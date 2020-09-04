const Product = require("../../models/product-template")
const fs = require("fs");

const chair = new Product({
    sys:{
        name: "bentwood chair",
        price: 169.00,
        img: {
            data: fs.readFileSync(__dirname + "/../images/courtney_armchair.jpg"),
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
            "modified"
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
        features: "",
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

// making a function to generate a chair object
chair.random = () => {
    chair.set("sys.price", Math.floor(Math.random() * (200 - 100 + 1) + 100) - 0.01);
    chair.set("sys.catagory", catagories.get());
};

const catagories = [
    "office",
    "decorative",
    "on-sale",
    "new",
    "living-room",
    "dining-room",
    "kitchen",
];

/**
 * taken from stack overflow
 * sorts all elements in the array randomly then returns a slice of the array
 */
catagories.get = () => {
    return catagories.sort( 
        function (){ 
            return 0.5 - Math.random(); 
        } 
    ).slice(catagories, 4);
}

// disable to insert this object upon run
module.exports = chair