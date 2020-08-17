const mongoose = require("mongoose")
const Schema = mongoose.Schema;

/**
 * this is the schema all products/objects in the specified collection below will follow
 */
const ProductSchema = Schema({
    sys:{
        name: String,
        price: Schema.Types.Decimal128,
        images: [String],
        productId: Number,
        stock: Number,
        companyName: String
    },
    details:{
        description: String,
        materials: [String],
        dimensions: [String],
        features: [String],
        shippingOptions: [String],
        briefDescription: String
    },
    promotional:{
        rating:{
            stars: Schema.Types.Decimal128,
            numberOfReviews: Number,
        },
        customerReviews:[{
            stars: Number,
            user: String,
            feedback: String
        }],
        discount:{
            onSale: Boolean,
            amount: Schema.Types.Decimal128
        }
    },
    etc:{
        required: false
    }
});

/**
 * RIGHT HERE IS RESPONSIBLE FOR INTERFACING WITH THE COLLECTION NAMED 'products'
 */
const Product = module.exports = mongoose.model("products", ProductSchema)
