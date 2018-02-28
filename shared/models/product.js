// jshint esversion: 6
let mongoose = require('mongoose');
// var Promise = require('promise');
// mongodb://admin:admin@ds249718.mlab.com:49718/ecommerce
// mongoose.connect('mongodb://admin:admin@ds249718.mlab.com:49718/ecommerce', function(err) {
//     if(err) {
//         console.log("Error " + err);
//         return;
//     }
//     else
//         console.log("Database connected successfully...");

//     fetchProduct(120);
// });

let Schema = mongoose.Schema;

// create a schema here

var productSchema = new Schema({
    id: Number,
    name: String,
    code: String,
    isavailable: Boolean,
    price: Number,
    rating: Number,
    imageurl: String
});

let productModel = mongoose.model('products', productSchema);

productModel.getProductItems = function(id) {
    return mongoose.connect('mongodb://admin:admin@ds249718.mlab.com:49718/ecommerce', function(err) {
        if(err) {
            console.log("Error " + err);
            return;
        }
        else
            console.log("Database connected successfully...");
    }).then(val=> {
        // fetchProduct(120);
        return productModel.findById("5a968c61734d1d3655e985cb", function(err, product) {
            if(err) {
                console.log("findById failed " + err);
                return;
            }
        });
    });
};

function fetchProduct(id) {
    var isPromiseEnd=false;
    var productQueryResult = productModel.findById("5a968c61734d1d3655e985cb", function(err, product) {
        if(err) {
            console.log("findById failed " + err);
            return;
        }
    
        // console.log(product);
    }).then(value => {
        // console.log("disconnecting ... " + value);
        // disconnectDB();
        isPromiseEnd=true;
    });

    // console.log(productQueryResult.resolve);

    // console.log("outside of findById");

    return productQueryResult;
}

function disconnectDB() {
    mongoose.disconnect(err => {
        if(err)
            console.log("Disconnecting : " + err);

        // console.log("Database disconnected ...");
    });
}

/*let fetchProduct = function(id) {
    productModel.findById("5a968c61734d1d3655e985cb", function(err, product) {
        if(err) {
            console.log("findById failed " + err);
            return;
        }
    
        console.log(product);

        mongoose.disconnect(err => {
            if(err)
                console.log("Disconnecting : " + err);
        })
    });
};*/

// console.log(getProductItems);
module.exports = productModel;
