const express = require("express");
const cors = require("cors");
const path = require("path");
const dbConfig = require("./config/db");
const userRouter = require("./routes/user_route");
const { PORT } = require("./config/env");
const adminRouter = require("./routes/admin_route");
const productRouter = require("./routes/product_route");
const seedRouter = require("./routes/seed_route");
const app = express();

// Serve static files from the 'uploads' directory
app.use('/files', express.static(path.join(__dirname, 'uploads')));

dbConfig();

app.use(express.json());

app.use(cors());

app.use("/api/seed",seedRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/product",productRouter);

app.listen(PORT, () => {
  console.log("Server started at", PORT);
});
