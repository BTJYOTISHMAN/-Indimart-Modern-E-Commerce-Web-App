const products = [

/* ================= MOBILES ================= */

{
id:1,
name:"Apple iPhone 15 Pro (128GB)",
category:"electronics",
subCategory:"mobile",
price:129990,
rating:4.8,
image:"https://i.pinimg.com/736x/5f/11/2c/5f112c7a5d55b72eb012319f884347fa.jpg",
description:"Titanium design with powerful A17 Pro chip.",
badge:"Bestseller"
},

{
id:2,
name:"Samsung Galaxy S24 Ultra",
category:"electronics",
subCategory:"mobile",
price:119999,
rating:4.7,
image:"https://images.unsplash.com/photo-1678911820864-e2c567c655d7?w=400",
description:"AI powered smartphone with pro camera.",
badge:"Trending"
},

{
id:3,
name:"Google Pixel 8 Pro",
category:"electronics",
subCategory:"mobile",
price:106990,
rating:4.6,
image:"https://i.pinimg.com/1200x/37/1f/bc/371fbc0e6566beac9803cbb8a8a979ff.jpg",
description:"Advanced AI camera smartphone.",
badge:"Top Rated"
},

{
id:4,
name:"OnePlus 12",
category:"electronics",
subCategory:"mobile",
price:69999,
rating:4.5,
image:"https://i.pinimg.com/474x/77/d3/ca/77d3cae4f9b677c5b2747bf110d609bb.jpg",
description:"Fast and smooth flagship performance.",
badge:"Great Value"
},

{
id:5,
name:"Nothing Phone 2",
category:"electronics",
subCategory:"mobile",
price:44999,
rating:4.4,
image:"https://images.unsplash.com/photo-1621330396173-e41b1cafd17f?w=400",
description:"Unique Glyph interface smartphone.",
badge:"Innovative"
},

{
id:6,
name:"Xiaomi 14 Ultra",
category:"electronics",
subCategory:"mobile",
price:99999,
rating:4.7,
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
description:"Leica camera flagship smartphone.",
badge:"Camera King"
},

{
id:7,
name:"Realme GT 6",
category:"electronics",
subCategory:"mobile",
price:34999,
rating:4.5,
image:"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400",
description:"Performance focused gaming smartphone.",
badge:"Gaming"
},

{
id:8,
name:"Vivo V30 Pro",
category:"electronics",
subCategory:"mobile",
price:41999,
rating:4.5,
image:"https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=400",
description:"ZEISS portrait camera smartphone.",
badge:"Portrait Master"
},

{
id:9,
name:"Motorola Edge 50 Pro",
category:"electronics",
subCategory:"mobile",
price:35999,
rating:4.4,
image:"https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400",
description:"144Hz curved display smartphone.",
badge:"Premium"
},

{
id:10,
name:"iPhone 13",
category:"electronics",
subCategory:"mobile",
price:48999,
rating:4.7,
image:"https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400",
description:"Most popular Apple smartphone.",
badge:"Top Seller"
},

/* ================= LAPTOPS ================= */

{
id:11,
name:"Apple MacBook Pro M3",
category:"electronics",
subCategory:"laptop",
price:154990,
rating:4.9,
image:"https://i.pinimg.com/736x/cb/fd/1c/cbfd1c6a2db6bdb1dd8b72020388013d.jpg",
description:"Powerful laptop with Apple M3 chip.",
badge:"Premium"
},

{
id:12,
name:"Dell XPS 13",
category:"electronics",
subCategory:"laptop",
price:112000,
rating:4.5,
image:"https://i.pinimg.com/1200x/e0/a0/55/e0a055dd1c874856c7188142220ef886.jpg",
description:"Ultra portable premium laptop.",
badge:"Thin & Light"
},

{
id:13,
name:"HP Spectre x360",
category:"electronics",
subCategory:"laptop",
price:125000,
rating:4.4,
image:"https://i.pinimg.com/1200x/29/c7/98/29c798c496d6a899a47b9501b3572a76.jpg",
description:"Premium convertible laptop.",
badge:"Versatile"
},

{
id:14,
name:"ASUS ROG Zephyrus G14",
category:"electronics",
subCategory:"laptop",
price:139990,
rating:4.8,
image:"https://i.pinimg.com/736x/8d/4e/6d/8d4e6da4a23cc557c60c8cd386bf3694.jpg",
description:"High performance gaming laptop.",
badge:"Gaming"
},

{
id:15,
name:"Lenovo IdeaPad Slim 5",
category:"electronics",
subCategory:"laptop",
price:62999,
rating:4.4,
image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
description:"Powerful everyday laptop.",
badge:"Best Value"
},

{
id:16,
name:"Acer Nitro 5 Gaming Laptop",
category:"electronics",
subCategory:"laptop",
price:85999,
rating:4.5,
image:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400",
description:"Gaming laptop with RTX graphics.",
badge:"Gaming Beast"
},

/* ================= MEN FASHION ================= */

{
id:21,
name:"Levi's Slim Fit Jeans",
category:"fashion",
subCategory:"menswear",
price:2499,
rating:4.2,
image:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
description:"Comfortable slim fit jeans.",
badge:"Bestseller"
},

{
id:22,
name:"Tommy Hilfiger Cotton Shirt",
category:"fashion",
subCategory:"menswear",
price:3299,
rating:4.3,
image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400",
description:"Premium cotton shirt.",
badge:"Trending"
},

{
id:23,
name:"Adidas Hoodie",
category:"fashion",
subCategory:"menswear",
price:4999,
rating:4.5,
image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400",
description:"Comfortable hoodie.",
badge:"Popular"
},

{
id:24,
name:"Nike Air Force Shoes",
category:"fashion",
subCategory:"shoes",
price:9695,
rating:4.8,
image:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
description:"Classic Nike sneakers.",
badge:"Hot"
},

{
id:25,
name:"Puma Sports Jacket",
category:"fashion",
subCategory:"menswear",
price:2899,
rating:4.4,
image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400",
description:"Stylish sports jacket.",
badge:"Winter"
},

{
id:26,
name:"U.S Polo T-Shirt",
category:"fashion",
subCategory:"menswear",
price:1599,
rating:4.1,
image:"https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=400",
description:"Premium casual polo t-shirt.",
badge:"Budget"
},

/* ================= WOMEN FASHION ================= */

{
id:31,
name:"Zara Floral Dress",
category:"fashion",
subCategory:"womenswear",
price:3999,
rating:4.4,
image:"https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400",
description:"Elegant floral dress.",
badge:"New"
},

{
id:32,
name:"H&M Knit Sweater",
category:"fashion",
subCategory:"womenswear",
price:2299,
rating:4.3,
image:"https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?w=400",
description:"Comfortable winter sweater.",
badge:"Winter"
},

{
id:33,
name:"Nike Women Leggings",
category:"fashion",
subCategory:"womenswear",
price:2995,
rating:4.6,
image:"https://i.pinimg.com/1200x/57/57/a6/5757a6fcd014352fba58c278a22a0372.jpg",
description:"Comfortable gym leggings.",
badge:"Top Rated"
},

{
id:34,
name:"Michael Kors Handbag",
category:"fashion",
subCategory:"accessories",
price:22500,
rating:4.7,
image:"https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400",
description:"Luxury designer handbag.",
badge:"Luxury"
},

{
id:35,
name:"Adidas Women Sneakers",
category:"fashion",
subCategory:"shoes",
price:7999,
rating:4.6,
image:"https://images.unsplash.com/photo-1519741497674-611481863552?w=400",
description:"Stylish sneakers for women.",
badge:"Trending"
},

/* ================= HOME ================= */

{
id:41,
name:"Samsung Smart LED TV",
category:"home",
subCategory:"appliances",
price:13990,
rating:4.2,
image:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
description:"HD smart television.",
badge:"Popular"
},

{
id:42,
name:"Electric Kettle",
category:"home",
subCategory:"kitchen",
price:649,
rating:4.0,
image:"https://i.pinimg.com/736x/cd/20/56/cd2056b02532458df516c932957ab54d.jpg",
description:"Fast boiling kettle.",
badge:"Budget"
},

{
id:43,
name:"Air Fryer",
category:"home",
subCategory:"kitchen",
price:8999,
rating:4.5,
image:"https://i.pinimg.com/1200x/f4/6c/c0/f46cc00158bcd950a6a03215e2ba46d2.jpg",
description:"Healthy cooking air fryer.",
badge:"Healthy"
},

{
id:44,
name:"Mixer Grinder",
category:"home",
subCategory:"kitchen",
price:3299,
rating:4.3,
image:"https://images.unsplash.com/photo-1584286595398-a59f21d313f5?w=400",
description:"Powerful kitchen mixer.",
badge:"Best Seller"
},

{
id:45,
name:"Vacuum Cleaner",
category:"home",
subCategory:"appliances",
price:15999,
rating:4.6,
image:"https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400",
description:"Cordless vacuum cleaner.",
badge:"Premium"
},

/* ================= GROCERIES ================= */

{
id:101,
name:"Organic Apples 1kg",
category:"fresh",
subCategory:"produce",
price:180,
rating:4.6,
image:"https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400",
description:"Fresh organic apples.",
badge:"Organic"
},

{
id:102,
name:"Fresh Broccoli",
category:"fresh",
subCategory:"produce",
price:95,
rating:4.8,
image:"https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400",
description:"Fresh green broccoli.",
badge:"Healthy"
},

{
id:103,
name:"Alphonso Mango Box",
category:"fresh",
subCategory:"produce",
price:1200,
rating:4.9,
image:"https://images.unsplash.com/photo-1553279768-865429fa0078?w=400",
description:"Premium Alphonso mangoes.",
badge:"Seasonal"
},

{
id:104,
name:"Aashirvaad Atta 5kg",
category:"fresh",
subCategory:"pantry",
price:350,
rating:4.5,
image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
description:"Premium wheat flour.",
badge:"Popular"
}

];

export default products;