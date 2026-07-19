import headphone1 from "../assets/products/sony-HeadPhone.png";
import camera1 from "../assets/products/canon-camera.png";
import appleWatch from "../assets/products/Apple-Watch-Ultra.png";
import mackbook from "../assets/products/Mackbook.png";
import iphone from "../assets/products/iphone.png";
import nikeShoe from "../assets/products/nikeShoe.png";
import rgbKeyboard from "../assets/products/rgbKeyboard.png";
import rgbMouse from "../assets/products/rgbMouse.png";
import backpack from "../assets/products/backpack.png";
import sofa from "../assets/products/sofa.png";
import coffeeMaker from "../assets/products/coffeeMaker.png";
import Chair from "../assets/products/Chair.png";
import lcd from "../assets/products/lcd.png";
import speaker from "../assets/products/speaker.png";
import sunglasses from "../assets/products/sunglasses.png";
import woodenTable from "../assets/products/woodenTable.png";
import airFryer from "../assets/products/airFryer.png";
import yogaMat from "../assets/products/yogaMat.png";
import earBuds from "../assets/products/earBuds.png";
import WristWatch from "../assets/products/WristWatch.png";

const products = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    title: "Wireless Noise Cancelling Headphones",
    description: "Premium headphones with industry-leading noise cancellation.",
    price: 349,
    category: "Electronics",
    rating: 4.9,
    stock: true,
    featured: true,
    newArrival: true,
    image: headphone1,
  },

  {
    id: 2,
    name: "Canon EOS R50",
    title: "Mirrorless DSLR Camera",
    description: "Capture stunning photos and videos with crystal clear quality.",
    price: 899,
    category: "Electronics",
    rating: 4.8,
    stock: true,
    featured: true,
    newArrival: false,
    image: camera1,
  },

  {
    id: 3,
    name: "Apple Watch Ultra",
    title: "Premium Smart Watch",
    description: "Advanced fitness tracking and premium design.",
    price: 799,
    category: "Accessories",
    rating: 4.9,
    stock: true,
    featured: true,
    newArrival: true,
    image: appleWatch,
  },

  {
    id: 4,
    name: "MacBook Air M3",
    title: "Apple Laptop",
    description: "Powerful laptop with Apple's latest M3 chip.",
    price: 1399,
    category: "Electronics",
    rating: 5,
    stock: true,
    featured: true,
    newArrival: true,
    image: mackbook,
  },

  {
    id: 5,
    name: "iPhone 16 Pro",
    title: "Latest Apple Smartphone",
    description: "Flagship smartphone with an incredible camera system.",
    price: 1299,
    category: "Electronics",
    rating: 4.9,
    stock: true,
    featured: true,
    newArrival: true,
    image: iphone,
  },

  {
    id: 6,
    name: "Nike Air Max",
    title: "Running Shoes",
    description: "Comfortable and stylish sneakers for everyday use.",
    price: 180,
    category: "Sports",
    rating: 4.8,
    stock: true,
    featured: true,
    newArrival: false,
    image: nikeShoe,
  },

  {
    id: 7,
    name: "Gaming Keyboard",
    title: "RGB Mechanical Keyboard",
    description: "Mechanical keyboard with customizable RGB lighting.",
    price: 129,
    category: "Electronics",
    rating: 4.7,
    stock: true,
    featured: false,
    newArrival: true,
    image: rgbKeyboard,
  },

  {
    id: 8,
    name: "Gaming Mouse",
    title: "Wireless Gaming Mouse",
    description: "High precision wireless gaming mouse.",
    price: 79,
    category: "Electronics",
    rating: 4.8,
    stock: true,
    featured: false,
    newArrival: false,
    image: rgbMouse,
  },

  {
    id: 9,
    name: "Leather Backpack",
    title: "Travel Backpack",
    description: "Premium leather backpack with spacious storage.",
    price: 120,
    category: "Accessories",
    rating: 4.7,
    stock: true,
    featured: false,
    newArrival: true,
    image: backpack,
  },

  {
    id: 10,
    name: "Modern Sofa",
    title: "Luxury Living Room Sofa",
    description: "Comfortable sofa with premium fabric finish.",
    price: 999,
    category: "Furniture",
    rating: 4.8,
    stock: true,
    featured: true,
    newArrival: false,
    image: sofa,
  },

  {
    id: 11,
    name: "Coffee Maker",
    title: "Automatic Coffee Machine",
    description: "Brew café-quality coffee at home.",
    price: 249,
    category: "Home",
    rating: 4.7,
    stock: true,
    featured: false,
    newArrival: true,
    image: coffeeMaker,
  },

  {
    id: 12,
    name: "Office Chair",
    title: "Ergonomic Chair",
    description: "Designed for maximum comfort during work.",
    price: 299,
    category: "Furniture",
    rating: 4.8,
    stock: true,
    featured: false,
    newArrival: false,
    image: Chair,
  },

  {
    id: 13,
    name: "Smart TV",
    title: "55-inch 4K UHD TV",
    description: "Immersive entertainment with vibrant colors.",
    price: 799,
    category: "Electronics",
    rating: 4.9,
    stock: true,
    featured: true,
    newArrival: false,
    image: lcd,
  },

  {
    id: 14,
    name: "Bluetooth Speaker",
    title: "Portable Wireless Speaker",
    description: "Powerful sound with deep bass.",
    price: 99,
    category: "Electronics",
    rating: 4.6,
    stock: true,
    featured: false,
    newArrival: true,
    image: speaker,
  },

  {
    id: 15,
    name: "Sunglasses",
    title: "Polarized Sunglasses",
    description: "Stylish sunglasses with UV protection.",
    price: 69,
    category: "Accessories",
    rating: 4.5,
    stock: true,
    featured: false,
    newArrival: false,
    image: sunglasses,
  },

  {
    id: 16,
    name: "Coffee Table",
    title: "Wooden Coffee Table",
    description: "Minimal modern design for your living room.",
    price: 199,
    category: "Furniture",
    rating: 4.7,
    stock: true,
    featured: false,
    newArrival: true,
    image: woodenTable,
  },

  {
    id: 17,
    name: "Air Fryer",
    title: "Digital Air Fryer",
    description: "Healthy cooking with less oil.",
    price: 179,
    category: "Home",
    rating: 4.8,
    stock: true,
    featured: true,
    newArrival: true,
    image: airFryer,
  },

  {
    id: 18,
    name: "Yoga Mat",
    title: "Fitness Yoga Mat",
    description: "Comfortable anti-slip exercise mat.",
    price: 49,
    category: "Sports",
    rating: 4.7,
    stock: true,
    featured: false,
    newArrival: false,
    image: yogaMat,
  },

  {
    id: 19,
    name: "Wireless Earbuds",
    title: "Bluetooth Earbuds",
    description: "Crystal clear sound with long battery life.",
    price: 149,
    category: "Electronics",
    rating: 4.8,
    stock: true,
    featured: true,
    newArrival: true,
    image: earBuds,
  },

  {
    id: 20,
    name: "Luxury Wrist Watch",
    title: "Classic Analog Watch",
    description: "Elegant watch with premium leather strap.",
    price: 299,
    category: "Accessories",
    rating: 4.9,
    stock: true,
    featured: true,
    newArrival: false,
    image: WristWatch,
  },
];

export default products;