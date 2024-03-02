const ProductModel = require("../models/product_model");

// All products
const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    // console.log(products);
    res.status(200).json({ Products: products });
  } catch (error) {
    console.log("Error:", error);
    res.status(404).json({ Message: "Product not found" });
  }
};

//  Create Product
const addProduct = async (req, res) => {
  try {
    const { title, description, quantity, price } = req.body;

    // Check if all required fields are provided
    if (!title || !description || !quantity || !price) {
      return res.status(400).json({ Message: "All fields are mandatory!" });
    }

    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ Message: "Image is required!" });
    }

    // Get the filename of the uploaded file
    const imageUrl = `http://localhost:8080/files/${req.file.filename}`;

    // Create new product object with provided data and uploaded image filename
    const newProduct = new ProductModel({
      title,
      description,
      quantity,
      price,
      image: imageUrl, // Assign the uploaded image filename to the 'image' field
    });

    // Save the new product to the database
    await newProduct.save();

    // Return success response with a message
    res.status(201).json({ Message: "Product created successfully!" });
  } catch (error) {
    // If an error occurs during file upload or database operation, handle it
    console.error("Error:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the product." });
  }
};

// Get Products Details
const productDetails = async (req, res) => {
  const productId = req.params.id;
  const product = await ProductModel.findById(productId);
  if (!product) {
    return res.status(404).json({ Message: "No product found" });
  }
  res.status(200).json({ Product: product });
};

// Search Products
const searchProduct = async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ Message: "Search query required!" });
  }
  const searchResults = await ProductModel.aggregate([
    {
      $match: {
        $or: [
          { title: { $regex: query, $options: "i" } },
          { description: { $regex: query, $options: "i" } },
        ],
      },
    },
  ]);
  res.status(200).json({ searchResults });
};

// Update Product
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    return res.status(404).json({ Message: "Product not found!" });
  }
  const product = await ProductModel.findById(productId);
  const { title, description, quantity, price } = req.body;
  const updatedFields = {};
  if (title && title !== product.title) updatedFields.title = title;
  if (description && description !== product.description)
    updatedFields.description = description;
  if (quantity && quantity !== product.quantity)
    updatedFields.quantity = quantity;
  if (price && price !== product.price) updatedFields.price = price;
  if (Object.keys(updatedFields).length === 0) {
    return res.status(400).json({ Message: "Please edit atleast one field!" });
  }
  const updatedProduct = await ProductModel.findByIdAndUpdate(
    productId,
    updatedFields,
    { new: true }
  );
  res
    .status(200)
    .json({ Message: "Product updated successfully!", updatedProduct });
};

// Delete Product
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  if (!productId) {
    return res.status(404).json({ Message: "Product not found!" });
  }
  const deletedProduct = await ProductModel.findByIdAndDelete(productId);
  res.status(200).json({ Message: "Product deleted!", deletedProduct });
};

module.exports = {
  getAllProducts,
  addProduct,
  productDetails,
  searchProduct,
  updateProduct,
  deleteProduct,
};
