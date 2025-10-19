// dummyProducts.js

import tshirt_img1 from "./shoes.jpg";
import tshirt_img2 from "./shirts2.jpg";
import jeans_img1 from "./shoes.jpg";
import jeans_img2 from "./shoes.jpg";
import jacket_img1 from "./shoes.jpg";
import jacket_img2 from "./shoes.jpg";
import hoodie_img1 from "./shoes.jpg";
import hoodie_img2 from "./shoes.jpg";
import sneakers_img1 from "./shoes.jpg";
import sneakers_img2 from "./shoes.jpg";

export const dummyProducts = [
  {
    _id: "cl001",
    name: "Classic White T-Shirt",
    category: "T-Shirts",
    price: 699,
    offerPrice: 499,
    image: ["https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg", tshirt_img2],
    description: [
      "100% cotton premium fabric",
      "Slim fit design",
      "Perfect for casual wear",
    ],
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "cl002",
    name: "Denim Blue Jeans",
    category: "Jeans",
    price: 1599,
    offerPrice: 1299,
    image: ["https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg", jeans_img2],
    description: [
      "Stretchable and durable fabric",
      "Classic mid-rise fit",
      "Ideal for everyday wear",
    ],
    createdAt: "2025-03-26T09:20:14.222Z",
    updatedAt: "2025-03-26T09:25:30.103Z",
    inStock: true,
  },
  {
    _id: "cl003",
    name: "Leather Brown Jacket",
    category: "Jackets",
    price: 3499,
    offerPrice: 2799,
    image: [jacket_img1, jacket_img2],
    description: [
      "Made from premium faux leather",
      "Zipper closure and side pockets",
      "Perfect for winter outings",
    ],
    createdAt: "2025-03-27T10:00:00.000Z",
    updatedAt: "2025-03-27T10:05:00.000Z",
    inStock: false,
  },
  {
    _id: "cl004",
    name: "Black Cotton Hoodie",
    category: "Hoodies",
    price: 1499,
    offerPrice: 999,
    image: ["https://images.pexels.com/photos/47037/man-male-boy-the-young-man-47037.jpeg", hoodie_img2],
    description: [
      "Soft fleece-lined interior",
      "Adjustable drawstring hood",
      "Unisex and trendy",
    ],
    createdAt: "2025-03-28T08:45:10.000Z",
    updatedAt: "2025-03-28T09:00:12.000Z",
    inStock: true,
  },
  {
    _id: "cl005",
    name: "White Casual Sneakers",
    category: "Footwear",
    price: 2499,
    offerPrice: 1999,
    image: [sneakers_img1, sneakers_img2],
    description: [
      "Breathable mesh upper",
      "Comfort-fit sole for all-day wear",
      "Ideal for daily casual use",
    ],
    createdAt: "2025-03-29T11:10:22.000Z",
    updatedAt: "2025-03-29T11:15:00.000Z",
    inStock: true,
  },
  {
    _id: "cl004",
    name: "Black Cotton Hoodie",
    category: "Hoodies",
    price: 1499,
    offerPrice: 999,
    image: ["https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg", hoodie_img2],
    description: [
      "Soft fleece-lined interior",
      "Adjustable drawstring hood",
      "Unisex and trendy",
    ],
    createdAt: "2025-03-28T08:45:10.000Z",
    updatedAt: "2025-03-28T09:00:12.000Z",
    inStock: true,
  },
  {
    _id: "cl005",
    name: "White Casual Sneakers",
    category: "Footwear",
    price: 2499,
    offerPrice: 1999,
    image: [sneakers_img1, sneakers_img2],
    description: [
      "Breathable mesh upper",
      "Comfort-fit sole for all-day wear",
      "Ideal for daily casual use",
    ],
    createdAt: "2025-03-29T11:10:22.000Z",
    updatedAt: "2025-03-29T11:15:00.000Z",
    inStock: true,
  },
  {
    _id: "cl006",
    name: "Analog Leather Strap Watch",
    category: "Accessories",
    price: 3499,
    offerPrice: 2799,
    image: ["https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg"],
    description: [
      "Classic analog design with date display",
      "Premium leather strap for comfort",
      "Water-resistant up to 30m",
    ],
    createdAt: "2025-03-29T12:05:10.000Z",
    updatedAt: "2025-03-29T12:10:30.000Z",
    inStock: true,
  },

  {
    _id: "cl007",
    name: "Men’s Cotton Cargo Shorts",
    category: "Clothing",
    price: 1599,
    offerPrice: 1199,
    image: ["https://images.pexels.com/photos/1574898/pexels-photo-1574898.jpeg"],
    description: [
      "Soft 100% cotton fabric",
      "Multiple utility pockets",
      "Perfect for outdoor or casual wear",
    ],
    createdAt: "2025-03-29T12:30:12.000Z",
    updatedAt: "2025-03-29T12:35:00.000Z",
    inStock: true,
  },

  {
    _id: "cl008",
    name: "Genuine Leather Belt",
    category: "Accessories",
    price: 1299,
    offerPrice: 999,
    image: ["https://images.pexels.com/photos/89783/belts-belt-buckle-leather-metal-89783.jpeg"],
    description: [
      "Made with high-quality leather",
      "Durable metal buckle",
      "Suitable for both formal and casual outfits",
    ],
    createdAt: "2025-03-29T13:10:22.000Z",
    updatedAt: "2025-03-29T13:15:00.000Z",
    inStock: true,
  },

  {
    _id: "cl009",
    name: "Casual Travel Backpack",
    category: "Bags",
    price: 2899,
    offerPrice: 2299,
    image: ["https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg"],
    description: [
      "Spacious main compartment with laptop sleeve",
      "Water-resistant fabric",
      "Padded shoulder straps for extra comfort",
    ],
    createdAt: "2025-03-29T13:40:15.000Z",
    updatedAt: "2025-03-29T13:45:00.000Z",
    inStock: true,
  },

  {
    _id: "cl010",
    name: "High-Top Sports Sneakers",
    category: "Footwear",
    price: 2999,
    offerPrice: 2499,
    image: ["https://images.pexels.com/photos/13580636/pexels-photo-13580636.jpeg"],
    description: [
      "Stylish high-top design for better ankle support",
      "Breathable mesh material",
      "Perfect for gym and outdoor activities",
    ],
    createdAt: "2025-03-29T14:00:45.000Z",
    updatedAt: "2025-03-29T14:05:00.000Z",
    inStock: true,
  }

];

export const categories = [
  {
    text: "Bags",
    path: "Bags",
    image: "https://images.pexels.com/photos/2081199/pexels-photo-2081199.jpeg"
  },
  {
    text: "Footwear",
    path: "Footwear",
    image: "https://images.pexels.com/photos/13580636/pexels-photo-13580636.jpeg"
  },
  {
    text: "Accessories",
    path: "Accessories",
    image: "https://images.pexels.com/photos/89783/belts-belt-buckle-leather-metal-89783.jpeg"
  },
  {
    text: "Hoodies",
    path: "Hoodies",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg"
  }
]

export const testimonialData = [
  {
    img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    name: "John Doe",
    role: "Businessman",
    text: "Marco Polo offers the best quality blazers I’ve ever bought. Stylish, comfortable, and worth every penny!",
  },
  {
    img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg",
    name: "Sarah Lee",
    role: "Designer",
    text: "I love the shirts collection here. They are so comfortable and look premium at the same time!",
  },
  {
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    name: "Michael Smith",
    role: "Entrepreneur",
    text: "Great shopping experience! The trousers fit perfectly and delivery was super quick.",
  },
];

export const dummyAddress = [
  {
    street: "101 Gandhi Street",
    city: "Kottayam",
    state: "Kerala",
    country: "India"
  },
  {
    street: "202 MG Road",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    phone: "7896541230"
  },
  {
    street: "303 Anna Salai",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    phone: "9123456780"
  }
];

export const dummyOrders = [
  {
    _id: "67e2589a8f87e63366786400",
    userId: "6765880e4d09769c5ca61644",
    items: [
      {
        product: dummyProducts[3],
        quantity: 2,
        _id: "67e2589a8f87e63366786401",
      },
    ],
    amount: 89,
    address: dummyAddress[0],
    status: "Order Placed",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-03-25T07:17:46.018Z",
    updatedAt: "2025-03-25T07:18:13.103Z",
  },
  {
    _id: "67e2589a8f87e63366786402",
    userId: "6765880e4d09769c5ca61645",
    items: [
      {
        product: dummyProducts[1],
        quantity: 1,
        _id: "67e2589a8f87e63366786403",
      },
    ],
    amount: 120,
    address: dummyAddress[1],
    status: "Shipped",
    paymentType: "COD",
    isPaid: false,
    createdAt: "2025-04-02T10:25:32.000Z",
    updatedAt: "2025-04-03T09:00:00.000Z",
  },
  {
    _id: "67e2589a8f87e63366786404",
    userId: "6765880e4d09769c5ca61646",
    items: [
      {
        product: dummyProducts[5],
        quantity: 3,
        _id: "67e2589a8f87e63366786405",
      },
    ],
    amount: 250,
    address: dummyAddress[2],
    status: "Delivered",
    paymentType: "Online",
    isPaid: true,
    createdAt: "2025-05-10T14:47:21.000Z",
    updatedAt: "2025-05-12T09:30:45.000Z",
  },
]


