const multer = require("multer");

// Multer configuration for storing files locally
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Unique filename for each uploaded file
  },
});

const upload = multer({ storage: storage });

module.exports = upload;