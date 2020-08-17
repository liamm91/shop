var express = require('express');
var router = express.Router();
const Product = require('../models/product-template')

/**
 * Sending a query to the database to retrieve one object
 */
router.get('/product', function(req, res, next) {
    console.log('respond with a single product');
    Product.findOne((err, products) => {
        if (err) {
            res.writeHead(500, err)
        } else {
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(products))
        }
    });
});

/**
 * Sending a query to the database to retrieve all objects
 */
router.get('/all', function(req, res, next) {
    console.log('respond with all product');
    Product.find((err, products) => {
        if (err) {
            res.writeHead(500, err)
        } else {
            res.writeHead(200, {"Content-Type": "application/json"})
            res.end(JSON.stringify(products))
        }
    });
});

module.exports = router;