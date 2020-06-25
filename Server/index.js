const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const productRouter = require("./routers/product");
const authRouter = require("./routers/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/product", productRouter);
app.use("/auth", authRouter);

app.listen(3001);
