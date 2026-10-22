// SOLARA OUTDOOR — Shopping Cart (localStorage)

const CART_KEY = 'solara_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, qty = 1, color = null) {
  const product = getProductById(productId);
  if (!product) return false;

  let cart = getCart();
  const existing = cart.find(item => item.id === productId && item.color === color);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.images[0],
      qty: qty,
      color: color || (product.colors && product.colors[0]) || null
    });
  }

  saveCart(cart);
  showToast(`${product.name} added to cart`);
  return true;
}

function removeFromCart(productId, color = null) {
  let cart = getCart();
  cart = cart.filter(item => !(item.id === productId && item.color === color));
  saveCart(cart);
}

function updateQty(productId, qty, color = null) {
  let cart = getCart();
  const item = cart.find(i => i.id === productId && i.color === color);
  if (item) {
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

function getCartTotal() {
  return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartCount() {
  const el = document.querySelectorAll('.cart-count');
  const count = getCartCount();
  el.forEach(e => {
    e.textContent = count;
    e.style.display = count > 0 ? 'flex' : 'none';
  });
}

function clearCart() {
  localStorage.removeItem(CART_KEY);
  updateCartCount();
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

// Init on every page
document.addEventListener('DOMContentLoaded', updateCartCount);
