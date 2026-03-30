import products from "./data.js";

/* ================= DOM ================= */

const productsContainer = document.getElementById("products");
const dealsContainer = document.getElementById("deals");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sort");

let allProducts = [];

/* ================= LOADER ================= */

function showLoader(){
if(productsContainer)
productsContainer.innerHTML=`<div class="loader"></div>`;
}

showLoader();

/* ================= STAR RATING ================= */

function getStars(rating){

let stars="";

for(let i=1;i<=5;i++){

if(i <= Math.floor(rating))
stars+="⭐";

else if(i-rating < 1)
stars+="⭐";

else
stars+="☆";

}

return stars;

}

/* ================= RANDOM PRICE ================= */

function random(min,max){
return Math.floor(Math.random()*(max-min+1))+min;
}

/* ================= CUSTOM PRODUCTS ================= */

let id=1000;

const mobileBrands=["iPhone 15","Samsung S24","OnePlus 12","Realme GT","Vivo X90"];
const laptopBrands=["MacBook M2","HP Pavilion","Dell Inspiron","Lenovo IdeaPad"];
const clothesBrands=["Nike T-Shirt","Puma Hoodie","Levis Jeans","Zara Shirt"];
const shoeBrands=["Nike Air","Adidas Boost","Puma Run","Reebok Classic"];
const bookBrands=["Atomic Habits","Rich Dad Poor Dad","Alchemist","Think & Grow Rich"];

/* ================= MOBILE IMAGES ================= */

const mobileImages=[
[
"https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
"https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg",
"https://m.media-amazon.com/images/I/81SigpJN1KL._SX679_.jpg"
],
[
"https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
"https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg",
"https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg"
]
];


/* ================= LAPTOP IMAGES ================= */

const laptopImages=[
[
"https://m.media-amazon.com/images/I/71qodgwQQ7L._SX679_.jpg",
"https://m.media-amazon.com/images/I/71f5Eu5lJSL._SX679_.jpg",
"https://m.media-amazon.com/images/I/71TPda7cwUL._SX679_.jpg"
],
[
"https://m.media-amazon.com/images/I/71an9eiBxpL._SX679_.jpg",
"https://m.media-amazon.com/images/I/81vPSZ9x1vL._SX679_.jpg",
"https://m.media-amazon.com/images/I/71p-MfA4v9L._SX679_.jpg"
]
];


/* ================= CLOTHES IMAGES ================= */

const clothesImages=[
[
"https://m.media-amazon.com/images/I/61bK6PMOC3L._UY741_.jpg",
"https://m.media-amazon.com/images/I/71YF2YJY0lL._UY741_.jpg",
"https://m.media-amazon.com/images/I/61-pz9bXJdL._UY741_.jpg"
],
[
"https://m.media-amazon.com/images/I/71cE7oXQn1L._UY741_.jpg",
"https://m.media-amazon.com/images/I/71gZQF1nVGL._UY741_.jpg",
"https://m.media-amazon.com/images/I/61q1f6sXUCL._UY741_.jpg"
]
];


/* ================= SHOES IMAGES ================= */

const shoesImages=[
[
"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_750,h_750/global/107353/02/sv01/fnd/IND/fmt/png/Cricket-Square-Men's-Shoes",
"https://rukminim1.flixcart.com/image/300/300/jm573ww0/shoe/n/j/c/cj0194-8-adidas-cblack-silvmt-mysblu-reag-original-imaf947eekybkgb8.jpeg?q=90",
"https://m.media-amazon.com/images/I/71bJ9K0N+7L._UY695_.jpg"
],
[
"https://m.media-amazon.com/images/I/81xKDZ9B0pL._UY695_.jpg",
"https://m.media-amazon.com/images/I/71tL1Vh3tHL._UY695_.jpg",
"https://m.media-amazon.com/images/I/71FZ0r9v2nL._UY695_.jpg"
]
];


/* ================= BOOK IMAGES ================= */

const bookImages=[
[
"https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
"https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
"https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
],
[
"https://m.media-amazon.com/images/I/71UwSHSZRnS.jpg",
"https://m.media-amazon.com/images/I/71tbalAHYCL.jpg",
"https://m.media-amazon.com/images/I/81af+MCATTL.jpg"
]
];
let customProducts=[];

/* ================= CREATE PRODUCTS ================= */

function createProducts(arr,category,type,imagesArr){

arr.forEach((name,i)=>{

customProducts.push({

id:id++,
title:name,
price:random(500,100000),
category,
type,
images:imagesArr[i%imagesArr.length],
rating:{rate:(Math.random()*5).toFixed(1)},
description:"Premium quality product"

});

});

}

createProducts(mobileBrands,"electronics","mobile",mobileImages);
createProducts(laptopBrands,"electronics","laptop",laptopImages);
createProducts(clothesBrands,"clothing","cloth",clothesImages);
createProducts(shoeBrands,"shoes","shoes",shoesImages);
createProducts(bookBrands,"books","book",bookImages);

/* ================= LOCAL PRODUCTS ================= */

const localProducts=products.map(p=>({

id:p.id,
title:p.name,
price:p.price,
category:p.category,
type:p.subCategory,
images:[p.image],
rating:{rate:p.rating},
description:p.description,
badge:p.badge

}));

/* ================= API PRODUCTS ================= */

fetch("https://fakestoreapi.com/products")

.then(res=>res.json())

.then(data=>{

const apiProducts=data.map(p=>({

id:p.id,
title:p.title,
price:Math.round(p.price*80),
category:p.category.includes("men")||p.category.includes("women")?"clothing":p.category,
type:p.category,
images:[p.image],
rating:p.rating,
description:p.description

}));

allProducts=[...localProducts,...apiProducts,...customProducts];

displayProducts(allProducts);
displayDeals(allProducts);
loadCategories(allProducts);
updateCartCount();
updateWishlistCount();

});

/* ================= DISPLAY PRODUCTS ================= */

function displayProducts(list,container=productsContainer){

if(!container) return;

container.innerHTML="";

if(list.length===0){

container.innerHTML=`<h2>No Products Found 😢</h2>`;
return;

}

list.forEach(p=>{

const discount=Math.floor(Math.random()*50)+10;
const imgs=p.images||[p.image];

container.innerHTML+=`

<div class="card">

${p.badge?`<span class="badge">${p.badge}</span>`:""}

<span class="discount">-${discount}%</span>

<div class="img-slider">

${imgs.map((img,i)=>`

<img src="${img}" class="slide ${i===0?"active":""}" onclick="openModal(${p.id})">

`).join("")}

</div>

<h3>${p.title}</h3>

<p><strong>₹${p.price}</strong></p>

<p class="rating">

${getStars(p.rating.rate)}
<span>${p.rating.rate}</span>

</p>

<div class="actions">

<button onclick="addToCart(${p.id})">🛒</button>
<button class="wishlist-btn" onclick="toggleWishlist(${p.id},this)">❤️</button>
<button onclick="buyNow(${p.id})">Buy Now</button>

</div>

</div>

`;

});

startSliders();

}

/* ================= IMAGE SLIDER ================= */

function startSliders(){

document.querySelectorAll(".img-slider").forEach(slider=>{

let index=0;
const slides=slider.querySelectorAll(".slide");

if(slides.length<=1) return;

setInterval(()=>{

slides[index].classList.remove("active");
index=(index+1)%slides.length;
slides[index].classList.add("active");

},2500);

});

}

/* ================= SEARCH ================= */

function searchProducts(){

const val=document.getElementById("search").value.toLowerCase();

const filtered=allProducts.filter(p=>
p.title.toLowerCase().includes(val)
);

displayProducts(filtered.length?filtered:allProducts);

}

/* ================= CATEGORY ================= */

function loadCategories(data){

const categories=["all",...new Set(data.map(p=>p.category))];

categories.forEach(cat=>{

let opt=document.createElement("option");
opt.value=cat;
opt.textContent=cat;

categoryFilter.appendChild(opt);

});

}

categoryFilter?.addEventListener("change",()=>{

const val=categoryFilter.value;

if(val==="all")
displayProducts(allProducts);

else
displayProducts(allProducts.filter(p=>p.category===val));

});

/* ================= SORT ================= */

sortSelect?.addEventListener("change",()=>{

let sorted=[...allProducts];

if(sortSelect.value==="low")
sorted.sort((a,b)=>a.price-b.price);

if(sortSelect.value==="high")
sorted.sort((a,b)=>b.price-a.price);

if(sortSelect.value==="rating")
sorted.sort((a,b)=>b.rating.rate-a.rating.rate);

displayProducts(sorted);

});

/* ================= LIGHTNING DEALS ================= */

function displayDeals(products){

if(!dealsContainer) return;

const deals=products.filter(p=>p.price<5000).slice(0,8);

displayProducts(deals,dealsContainer);

}

/* ================= CART ================= */

function addToCart(id){

let cart=JSON.parse(localStorage.getItem("cart"))||[];

cart.push(allProducts.find(p=>p.id===id));

localStorage.setItem("cart",JSON.stringify(cart));

updateCartCount();
renderCart();

}

function updateCartCount(){

let cart=JSON.parse(localStorage.getItem("cart"))||[];

const el=document.getElementById("cartCount");

if(el) el.innerText=cart.length;

}

/* CART SIDEBAR */

function openCart(){

document.getElementById("cartSidebar")?.classList.add("open");
renderCart();

}

function closeCart(){

document.getElementById("cartSidebar")?.classList.remove("open");

}

function renderCart(){

const container=document.getElementById("cartItems");
if(!container) return;

let cart=JSON.parse(localStorage.getItem("cart"))||[];

container.innerHTML="";

cart.forEach(item=>{

container.innerHTML+=`

<div class="cart-item">
<img src="${item.images[0]}" width="50">
<p>${item.title}</p>
<p>₹${item.price}</p>
</div>

`;

});

}

/* ================= WISHLIST ================= */

function toggleWishlist(id,btn){

let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];

if(wishlist.includes(id)){

wishlist=wishlist.filter(i=>i!==id);
btn?.classList.remove("active");

}else{

wishlist.push(id);
btn?.classList.add("active");

}

localStorage.setItem("wishlist",JSON.stringify(wishlist));

updateWishlistCount();

}

function updateWishlistCount(){

let wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];

const el=document.getElementById("wishlistCount");

if(el) el.innerText=wishlist.length;

}

/* ================= MODAL ================= */

function openModal(id){

const p=allProducts.find(x=>x.id===id);

document.getElementById("modalContent").innerHTML=`

<img src="${p.images[0]}">

<h2>${p.title}</h2>

<p>${p.description}</p>

<p><strong>₹${p.price}</strong></p>

<button onclick="addToCart(${p.id})">Add to Cart</button>
<button onclick="buyNow(${p.id})">Buy Now</button>

`;

document.getElementById("modal").style.display="flex";

}

function closeModal(){

document.getElementById("modal").style.display="none";

}

/* ================= BUY NOW ================= */

function buyNow(id){

addToCart(id);

showSection("payment");

}

/* ================= PAGE SWITCH ================= */

function showSection(section){

["home","login","signup","payment","order"].forEach(s=>{

const el=document.getElementById(s+"Section");

if(el) el.style.display="none";

});

document.getElementById(section+"Section").style.display="block";

}

/* ================= LOGIN ================= */

function loginUser(){

const email=document.getElementById("loginEmail").value;
const pass=document.getElementById("loginPassword").value;

const user=JSON.parse(localStorage.getItem("user"));

if(user && user.email===email && user.password===pass){

alert("Login Successful ✅");
showSection("home");

}else{

alert("Invalid Login ❌");

}

}

/* ================= SIGNUP ================= */

function signupUser(){

const email=document.getElementById("email").value;
const pass=document.getElementById("password").value;

localStorage.setItem("user",JSON.stringify({email,password:pass}));

alert("Signup Done ✅");

showSection("login");

}

/* ================= DARK MODE ================= */

function toggleDark(){
document.body.classList.toggle("dark");
}

/* ================= HOME SLIDER ================= */

const homeImages=[
"https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
"https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
"https://images.unsplash.com/photo-1580910051074-3eb694886505"
];

let homeIndex=0;

const homeSlider=document.getElementById("slideImg");

function autoHomeSlider(){

if(!homeSlider) return;

homeSlider.src=homeImages[homeIndex];

homeIndex=(homeIndex+1)%homeImages.length;

}

setInterval(autoHomeSlider,3000);
autoHomeSlider();
/* ================= TYPE FILTER ================= */

function filterByType(type){

if(!allProducts.length) return;

const filtered = allProducts.filter(p =>
p.type && p.type.toLowerCase() === type.toLowerCase()
);

displayProducts(filtered.length ? filtered : allProducts);

window.scrollTo({
top: document.getElementById("products").offsetTop - 100,
behavior:"smooth"
});

}


/* ================= CATEGORY FILTER ================= */

function filterByCategory(category){

if(!allProducts.length) return;

const filtered = allProducts.filter(p =>
p.category && p.category.toLowerCase() === category.toLowerCase()
);

displayProducts(filtered.length ? filtered : allProducts);

window.scrollTo({
top: document.getElementById("products").offsetTop - 100,
behavior:"smooth"
});

}

/* ================= GLOBAL FUNCTIONS ================= */

window.searchProducts=searchProducts;
window.openModal=openModal;
window.closeModal=closeModal;
window.addToCart=addToCart;
window.buyNow=buyNow;
window.toggleWishlist=toggleWishlist;
window.showSection=showSection;
window.toggleDark=toggleDark;
window.openCart=openCart;
window.closeCart=closeCart;
window.loginUser=loginUser;
window.signupUser=signupUser;

/* NEW FILTER FUNCTIONS */

window.filterByType = filterByType;
window.filterByCategory = filterByCategory;