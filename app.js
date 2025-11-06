// sample product data
const products = [
  { id:1, title:'Samsung S24', price:69999, img:'https://tse2.mm.bing.net/th/id/OIP.O37OHxsQkh-BIvHYDK7vZAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:2, title:'Laptop Pro', price:45999, img:'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=60&auto=format&fit=crop' },
  { id:3, title:'Wireless Earbuds', price:1299, img:'https://m.media-amazon.com/images/I/71hDPfQHtKL._AC_.jpg' },
  { id:4, title:'Smart TV 43"', price:18999, img:'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&q=60&auto=format&fit=crop' },
  { id:5, title:'Running Shoes', price:1899, img:'https://tse4.mm.bing.net/th/id/OIP.u93FO8xLqCogaTrBv0J-rgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:6, title:'Sunglasses', price:4999, img:'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-sunglass/4/k/0/free-size-4413-sunglasses-ghawk-original-imagz745gefwyggj.jpeg?q=70' },
  { id:7, title:'iPhone 14', price:79999, img:'https://p.turbosquid.com/ts-thumb/aR/M0SdVG/IR/iphone14purple0000/png/1668450204/1920x1080/fit_q87/e92f3d6d421d94d41e98b7d49bb707121792ea64/iphone14purple0000.jpg' },
  { id:8, title:'Bluetooth Speaker', price:2999, img:'https://tse1.mm.bing.net/th/id/OIP.D6Nd8_xZsOadqAikWvat_QHaH_?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:9, title:'Gaming Mouse', price:1499, img:'https://m.media-amazon.com/images/I/71vm32j2InL._AC_UF1000,1000_QL80_.jpg' },
  { id:10, title:'Mechanical Keyboard', price:3499, img:'https://th.bing.com/th/id/OIP.PQRYxpxA8tot0xTCw6xF7gHaEl?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:11, title:'Backpack', price:1999, img:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/078546/01/fnd/IND/fmt/png/PUMA-Storm-Water-Resistant-Backpack-27L' },
  { id:12, title:'Smartwatch', price:1999, img:'https://tse3.mm.bing.net/th/id/OIP.6alZ7JPJqVux40jogio0SAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:13, title:'Tablet 10"', price:15999, img:'https://m.media-amazon.com/images/I/618V2OyK53L._AC_SL1500_.jpg' },
  { id:14, title:'Digital Camera', price:25999, img:'https://th.bing.com/th/id/OIP.OaF5hlvhH0vz4ydWmObBYgHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:15, title:'Electric Kettle', price:1199, img:'https://th.bing.com/th/id/OIP.ZptvcZ8WP-5ehTc6qj7bvAHaHa?w=213&h=213&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { id:16, title:'Microwave Oven', price:7999, img:'https://th.bing.com/th/id/OIP.WOq4Lbn_Qx6d88xxdIigpAHaFe?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:17, title:'Air Purifier', price:12999, img:'https://m.media-amazon.com/images/I/81RFYaaIerL._AC_SL1500_.jpg' },
  { id:18, title:'Fitness Band', price:2499, img:'https://th.bing.com/th/id/OIP.X8HjoF50EHCHEhE2hGDVPAHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { id:19, title:'Desk Lamp', price:899, img:'data:image/webp;base64,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' },
  { id:20, title:'Office Chair', price:4999, img:'https://th.bing.com/th/id/OIP.ReyweVVqvgqDqiTfa5fA-wHaHa?w=220&h=220&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { id:21, title:'Gaming Chair', price:8999, img:'https://th.bing.com/th/id/OIP.RJbxOn9QKIXS-dgZO1-gfQHaHa?w=210&h=210&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { id:22, title:'Coffee Maker', price:3999, img:'https://th.bing.com/th/id/OIP.KAY01DGX_97Z-8rIxOua8QHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { id:23, title:'LED Monitor', price:10999, img:'https://th.bing.com/th/id/OIP.fdXZHGay2PpwEiDeWEDRywHaFy?w=244&h=190&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { id:24, title:'Printer', price:6999, img:'https://th.bing.com/th/id/OIP.BaZdj3iTvBLeWIasJfpnZQHaGL?w=205&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' },
  { id:25, title:'Router', price:1999, img:'data:image/webp;base64,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' },
  { id:26, title:'Portable Hard Drive', price:3499, img:'https://th.bing.com/th/id/OIP.C3Nq0b6D1AxEN7PwL5mv_AHaGT?w=206&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3' }

];

// render products
const grid = document.getElementById('productGrid');
function renderProducts(list = products){
  grid.innerHTML = '';
  list.forEach(p=>{
    const el = document.createElement('div');
    el.className = 'card';
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title}" loading="lazy">
      <div class="title">${p.title}</div>
      <div class="price">₹${p.price.toLocaleString()}</div>
      <div style="margin-top:8px">
        <button class="btn primary" data-id="${p.id}">Add to cart</button>
      </div>
    `;
    grid.appendChild(el);
  });
}
renderProducts();

// cart
const cart = {};
function addToCart(id){
  const p = products.find(x=>x.id==id);
  if(!p) return;
  if(!cart[id]) cart[id] = {...p, qty:0};
  cart[id].qty++;
  updateCartUI();

  // auto open cart panel
  document.getElementById('cartPanel').classList.add('open');
}

function removeFromCart(id){
  delete cart[id];
  updateCartUI();
}

function changeQty(id, delta){
  if(cart[id]){
    cart[id].qty += delta;
    if(cart[id].qty <= 0) removeFromCart(id);
    else updateCartUI();
  }
}

function updateCartUI(){
  const items = document.getElementById('cartItems');
  const totalEl = document.getElementById('cartTotal');
  items.innerHTML = '';
  let total = 0;
  Object.values(cart).forEach(it=>{
    total += it.price*it.qty;
    const row = document.createElement('div');
    row.className = 'cart-row';
    row.innerHTML = `
      <img src="${it.img}" alt="${it.title}">
      <div style="flex:1">
        <div>${it.title}</div>
        <div>₹${it.price.toLocaleString()} x ${it.qty}</div>
        <div style="margin-top:4px">
          <button class="btn ghost" onclick="changeQty(${it.id},1)">+</button>
          <button class="btn ghost" onclick="changeQty(${it.id},-1)">-</button>
        </div>
      </div>
      <button class="btn ghost" onclick="removeFromCart(${it.id})">Remove</button>
    `;
    items.appendChild(row);
  });
  totalEl.textContent = '₹' + total.toLocaleString();
}

// event listeners
grid.addEventListener('click', e=>{
  const id = e.target.getAttribute('data-id');
  if(id) addToCart(Number(id));
});
document.getElementById('closeCart').addEventListener('click', ()=>document.getElementById('cartPanel').classList.remove('open'));
document.getElementById('checkoutBtn').addEventListener('click', ()=>alert('Demo checkout — backend required'));

// --------------------- CAROUSEL LOGIC ---------------------
let idx = 0;
const slides = document.querySelectorAll('#carousel img');
function show(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[i].classList.add('active');
}
document.getElementById('next').addEventListener('click', () => {
  idx = (idx + 1) % slides.length;
  show(idx);
});
document.getElementById('prev').addEventListener('click', () => {
  idx = (idx - 1 + slides.length) % slides.length;
  show(idx);
});
setInterval(() => {
  idx = (idx + 1) % slides.length;
  show(idx);
}, 4000);


