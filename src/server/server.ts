
import express from 'express';
import cors from 'cors';
import path from 'path';
import { ProductModel } from './schemas/product.schema.js'
import mongoose from 'mongoose';
import { CategoryModel } from './schemas/category.schema.js';

const app = express();
const __dirname = path.resolve();
const PORT = 3501;

mongoose
    .connect('mongodb://localhost:27017/menuDB')
    .then(() => {
    console.log('Connected to Database Successfully');
    })
    .catch(err => console.log('Failed to Connect to DB', err))



app.use(cors());
app.use(express.json());

//testing
app.get('/', function(req, res) {
   res.json({message:'test'});
});

//create-product

//create-category
app.post('/create-category', function(req, res){
    const new_category = new CategoryModel({
        category_name: 'Kids',
        parentCategory: '616716a7a9480f243b116d67'
    })
    new_category
        .save()
        .then(data => {
            console.log('new category created:', {data})
            res.json({data})
        })
        .catch(err => res.json(err))
})

// show categories
app.get('/categories',function(req,res){
    CategoryModel
    .find()
    .then( data => {
        console.log("categories: ",data)
        res.json(data) 
    })
    .catch( err => res.json(err))
})

//update category 
// app.post('/update-category:id', function(req,res) {
//     CategoryModel
//     .findByIdAndUpdate(
//         req.params.id = ""
//     )
// })

//create-product
app.post('/create-product', function(req,res) {
    const new_product = new ProductModel({
        product_name: "Women's black dress",
        price: 12.55,
        quantity: 14,
        categories: ["616716a7a9480f243b116d67",
           "616722192104dfe978de5e1c"
        ]
    })
    new_product
        .save()
        .then( data => {
            console.log(data)
            res.json({data})
        })
        .catch( err => console.log(err))
})

// show products
app.get('/products', function(req,res) {
    ProductModel
    .find()
    .then( data => res.json({data}))
    .catch(err => res.json(err))
})

//update-product
// A.findByIdAndUpdate(id, update, options, callback) // executes
//A.findByIdAndUpdate(id, update, options)
app.put('/update-product:id',function(req,res) {
    ProductModel.findByIdAndUpdate(
        req.params.id = "616c0975757c707a19f729ce",
        {$set: 
            {
                'quantity': 12,
                // 'categories': [
                //     "616716a7a9480f243b116d67",
                //     "616722192104dfe978de5e1c"
                // ]
            }
        },
        {new: true},
        function(err,updateProduct) {
            if(err) {
                res.json(err)
            }
            else {
                res.json(updateProduct);
            }
        }
    )
})

//delete
//A.findOneAndDelete(conditions, options, callback) // executes
app.delete('/delete-product:id', function(req,res) {
    ProductModel
    .findByIdAndDelete(
        req.params.id = "616c0975757c707a19f729ce"
    )
    .then( data => {
        console.log({data})
        res.json({ data })
    });
});

//update-category(maybe)

app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})


