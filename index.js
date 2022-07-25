const express = require("express");
const app = express();
const config = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoriesRoute = require("./routes/categories");
const cors = require("cors");

//for uploading images
const multer = require("multer");

config.config();
app.use(express.json());
app.use(cors());

//mongoose connection
const connectDB = require("./dbconnect/DBconnect");

connectDB();

//storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    res.status(200).json("file has been uploaded");
  } catch (err) {
    console.log(err);
  }
});

//routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/categories", categoriesRoute);

app.listen("8000", () => {
  console.log("backend running on port 8000...");
});
