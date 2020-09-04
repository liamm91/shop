const Product = require("../../models/product-template")
const fs = require("fs")

var chair = new Product({
    sys:{
        name: "bentwood chair",
        price: 169.00,
        img: {
            data: fs.readFileSync("../images/courtney_armchair.jpg"),
            contentType: "image/png"
        },
        stock: 69,
        companyName: "COURTNEY",
        catagory: [
            "office",
            "decorative",
            "on-sale"
        ],
        tags: [
            "original"
        ]
    },
    details:{
        description: "Eccentrically designed, the Courtney bentwood chair stands out. The modern frame and legs made of elm wood will gracefully complement your decor, while seating your guest with comfort and style.",
        materials: [
            "Elm Wood",
            "Polyester",
            "Polyurethane Foam"
        ],
        dimensions: [
            "Depth: 69 cm (27\")", 
            "Width: 78 cm (30.5\")",
            "Height: 81 cm (32\")"
        ],
        features: "Chair",
        shippingOptions: "Right Now!",
        briefDescription: "Chair"
    },
    promotional:{
        rating:{
            avgStars: 0.0,
            numberOfReviews: 0,
        }
    },
})

// disable to insert this object upon run
// module.exports = chair