// imports
var express = require('express');
var router = express.Router();
var verbose = require("../bin/www");
const Product = require('../models/product-template');

// user defined varibles
const legalSrch = [
    "office",
    "decorative",
    "on-sale",
    "new",
    "living-room",
    "dining-room",
    "kitchen",
];
const regex = /(?=[a-z]*[-])([a-z-]+)|[a-z]+/gm

/**
 * Sending a query to the database to retrieve objects sorted
 * by catagories
 */
router.get('/query/:srch', function(req, res, next) {
    // getting the search param from the url
    var query = req.params.srch;

    // testing to make sure its all letters
    query.match(regex)[0] ? {} : (console.log("bad srch, sending 404"), res.sendStatus(404));
    console.log("received: " + query.match(regex));

    // testing the query against the list of legal queries
    if (legalSrch.includes(query.match(regex)[0])) { // GOOD
        console.log(`responded with all product of catagory ${query}`);
        Product.find({"sys.catagory": query }, (err, products) => {
            if (err) {
                res.writeHead(500, err)
            } else {
                // have to write headers for CORS
                res.writeHead(200, {
                    "Content-Type": "application/json", 
                    "Access-Control-Allow-Origin":"*",
                    "Access-Control-Allow-Headers":"Content-Type",
                    "Access-Control-Allow-Methods":"GET"
                })
                res.end(JSON.stringify(products))
            }
        });
    }
});

/**
 * Sending a query to the database to retrieve all objects
 */
router.get('/all', function(req, res, next) {
    console.log('responded with all products');
    Product.find((err, products) => {
        if (err) {
            res.writeHead(500, err)
        } else {
            // have to write headers for CORS
            res.writeHead(200, {
                "Content-Type": "application/json", 
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Headers":"Content-Type",
                "Access-Control-Allow-Methods":"GET"
            })
            res.end(JSON.stringify(products))
        }
    });
});

module.exports = router;