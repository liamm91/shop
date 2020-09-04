import { SafeUrl } from '@angular/platform-browser';

export interface productItem {
    sys:{
        name: string,
        price: 
        {
            $numberDecimal: Number
        },
        img: 
        {
            data: 
            {
                type: Buffer,
                data: any,
            },
            contentType: string,
            url?: SafeUrl, //optional, used for when post processing of the image url is done
        },
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
            stars: number,
            numberOfReviews: Number,
        },
        customerReviews:[{
            stars: Number,
            user: String,
            feedback: String
        }],
        discount:{
            onSale: Boolean,
            amount: number,
        }
    },
    etc:{
        required: false
    }
}
/**
 * schema to export products from the mongodb interface
 * literally a copy-paste from the schema program,
 * this is what angular uses to map the json response to an object
 */