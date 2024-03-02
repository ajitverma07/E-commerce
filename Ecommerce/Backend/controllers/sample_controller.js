const ProductModel = require("../models/product_model");
const UserModel = require("../models/user_model");

// Seed Sample Users
const seedUsers = async (req, res) => {
  try {
    const user1 = {
      name: "Ajit",
      email: "ajit@gmail.com",
      password: "Ajit7737",
      address: "sidhmukh,rajasthan",
      isAdmin: true,
      orders: [],
    };
    const user2 = {
      name: "shivani",
      email: "shivani@gmail.com",
      password: "Shivani123",
      address: "churu,rajasthan",
      isAdmin: false,
      orders: [],
    };
    const user3 = {
      name: "shivam",
      email: "shivam@gmail.com",
      password: "Shivam123",
      address: "rajgarh,Rajasthan",
      isAdmin: false,
      orders: [],
    };
    const user4 = {
      name: "Panda",
      email: "panda@gmail.com",
      password: "Panda123",
      address: "bhadra,rajasthan",
      isAdmin: false,
      orders: [],
    };
    const user5 = {
      name: "jitu",
      email: "jitu@gmail.com",
      password: "Jitu123",
      address: "jaipur,rajasthan   ",
      isAdmin: false,
      orders: [],
    };
    const users = [user1, user2, user3, user4, user5];
    await UserModel.insertMany(users);
    res.status(200).json({ Message: "5 Users added successfully!" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ Message: error });
  }
};

// Seed Sample Products
const seedProducts = async (req, res) => {
  const product1 = {
    title: "Lip Balm" ,
    description: "Original",
    quantity: 50,
    price: 200,
    image: "https://sdcdn.io/mac/in/mac_sku_M6H301_1x1_0.png?width=1080&height=1080",
  };
  const product2 = {
    title: "Shampoo",
    description: "Original",
    quantity: 50,
    price: 150,
    image: "https://thumbs.dreamstime.com/b/london-uk-april-revlon-professionals-style-masters-shampoo-white-baground-london-uk-april-revlon-professionals-style-115594399.jpg",
  };
  const product3 = {
    title: "Maskara",
    description: "Original",
    quantity: 100,
    price: 300,
    image: "https://thumbs.dreamstime.com/b/london-uk-january-mac-false-lashes-mascara-container-brush-white-mac-cosmetics-was-founded-toronto-ontar-london-uk-107247000.jpg",
  };
  const product4 = {
    title: "Skin Powder",
    description: "Original",
    quantity: 30,
    price: 299,
    image: "https://thumbs.dreamstime.com/b/london-uk-march-mac-cosmetics-skin-powder-foundation-container-white-background-was-founded-toronto-ontario-88715531.jpg",
  };
  const product5 = {
    title: "Eye Liner",
    description: "Original",
    quantity: 60,
    price: 200,
    image: "https://thumbs.dreamstime.com/b/london-uk-january-mac-false-lashes-mascara-container-brush-white-mac-cosmetics-was-founded-toronto-ontar-london-uk-107247000.jpg",
  };
  const product6 = {
    title: "Conditioner",
    description: "Original",
    quantity: 100,
    price: 250,
    image: "https://thumbs.dreamstime.com/z/nottingham-uk-may-p-g-herbal-essences-bio-renew-shampoo-conditioner-white-background-essence-illustrative-editorial-117901465.jpg?w=768",
  };
  const product7 = {
    title: "Serum",
    description: "Original",
    quantity: 80,
    price: 190,
    image: "https://thumbs.dreamstime.com/z/bottle-rose-essential-oil-flower-white-bottle-rose-essential-oil-flower-isolated-white-151361733.jpg?w=576",
  };
  const product8 = {
    title: "Lipstick",
    description: "Original",
    quantity: 90,
    price: 200,
    image: "https://thumbs.dreamstime.com/z/fashionable-lipstick-close-up-white-background-fashionable-lipstick-close-up-white-background-197398348.jpg?w=2048",
  };
  const product9 = {
    title: "Maskara",
    description: "Original",
    quantity: 100,
    price: 290,
    image: "https://thumbs.dreamstime.com/z/black-mascara-wand-applicator-stroke-against-white-background-50531852.jpg?w=576",
  };
  const product10 = {
    title: "Nail Pant",
    description: "Original",
    quantity: 50,
    price: 150,
    image: "https://thumbs.dreamstime.com/z/blue-nail-polish-21517.jpg?w=992",
  };
  const product11 = {
    title: "Perfume",
    description: "Original",
    quantity: 70,
    price: 100,
    image: "https://thumbs.dreamstime.com/z/perfume-bottle-close-up-isolated-white-background-109202524.jpg?w=576",
  };
  const product12 = {
    title: "Kajal",
    description: "Original",
    quantity: 90,
    price: 105,
    image: "https://thumbs.dreamstime.com/b/london-uk-january-mac-false-lashes-mascara-container-brush-white-mac-cosmetics-was-founded-toronto-ontar-london-uk-107247000.jpg",
  };
  const product13 = {
    title: "Foundation",
    description: "Oiginal",
    quantity: 80,
    price: 200,
    image: "https://sdcdn.io/mac/in/mac_sku_M51090_1x1_0.png?width=1080&height=1080",
  };
  const product14 = {
    title: "Concealers",
    description: "Original",
    quantity: 90,
    price: 260,
    image: "https://sdcdn.io/mac/in/mac_sku_SF4X30_1x1_0.png?width=1080&height=1080",
  };
  const product15 = {
    title: "Highlighter",
    description: "Original",
    quantity: 70,
    price: 240,
    image: "https://sdcdn.io/mac/in/mac_sku_ST50Y2_1x1_0.png?width=1080&height=1080",
  };
  const product16 = {
    title: "Brushes",
    description: "Original",
    quantity: 70,
    price: 240,
    image: "https://sdcdn.io/mac/in/mac_sku_SYPM01_1x1_0.png?width=1080&height=1080",
  };
  const products = [
    product1,
    product2,
    product3,
    product4,
    product5,
    product6,
    product7,
    product8,
    product9,
    product10,
    product11,
    product12,
    product13,
    product14,
    product15,
    product16,

  ];
  await ProductModel.insertMany(products);
  res.status(200).json({ Message: "16 Products added successfully!" });
};

module.exports = { seedProducts, seedUsers };
