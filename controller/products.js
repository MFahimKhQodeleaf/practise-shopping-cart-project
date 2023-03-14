const Product = require('../models/product'); 
// /admin/add-product => GET
exports.getAddProducts = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "add-product",
    formCSS: true,
    productCSS: true,
    activeAddproduct: true,
  });
};

//admin/add-product => POST
exports.postAddProducts = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

//shop show all products
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });})  
};

