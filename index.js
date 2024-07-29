// to Create an Express Application
const express = require("express");
// to manipulate MongoDB
const mongoose = require("mongoose");
// giving collection route to CRUD into MongoDB
const Product = require("./models/product.model");
// import routes
const productRoutes = require("./routes/product.route.js");
// creating app using express
const app = express();

//middle ware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Welcom from Node API ");
});

//connect to DB
mongoose
  .connect(
    "mongodb+srv://thuyamyint:thuya123@cluster-1.eh5dgi2.mongodb.net/BACKEND-1?retryWrites=true&w=majority&appName=Cluster-1"
  )
  .then(() => {
    console.log("Connected to Mongo DB!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
