
import express from 'express';
import cors from 'cors';
import path from 'path';
import { ProductModel } from './schemas/user.schema.js'
import mongoose from 'mongoose';
import { CategoryModel } from './schemas/category.schema.js';

const app = express();
const __dirname = path.resolve();
const PORT = 3501;

mongoose.connect('mongodb://localhost:27017/menuDB')
.then(() => {
    console.log('Connected to Database Successfully');
})
.catch(err => console.log('Failed to Connect to DB', err))



app.use(cors());
app.use(express.json());

app.get('/', function(req, res) {
   res.json({message:'test'});
});


app.get('/products', function(req,res){
    ProductModel.find()
    .then(data => {
        console.log({data});
        res.json({data}) } )
    .catch(err => {
        res.status(501)
        res.json({errors: err});
    })
});

app.post('/create-product', function(req,res) {
    const new_product = new ProductModel(req.body)
    new_product
    .save()
    .then( data => {
        console.log('new product created: ', {data})
        res.json({data})
    })
    .catch( err => res.json(err));
})

app.get('/categories', function(req,res) {
    CategoryModel
    .find()
    .populate('parentCategory')// populate return array of document in place of original _ids only
    .then( data => {
        console.log({data});
        res.json({data})
    })
    .catch(err => {res.status(501).json(err)} )
})


app.post('/create-category', function(req,res) {
    const new_category = new CategoryModel(req.body)
    new_category
    .save()
    .then( data => {
        console.log('New category created: ', {data})
        res.json({data})
    })
    .catch( err => res.json(err))
})

// add parent category
app.post('/add-parentCategory', function(req,res) {
    CategoryModel
    .findByIdAndUpdate(
        req.body.id, // id to be updated
        {parentCategory: req.body.parent},//new value
        {new: true})
    .then( data => res.json( {data} ))
    .catch( err => res.json(err))
})


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})


/*app.post('/create-product', function(req,res){
    const {product_name, categories} = req.body;
    const user = new ProductModel({
        product_name,
        categories
    });
    user.save()
    .then((data) => {
        res.json({data});
    })
    .catch(err => {
        res.status(501);
        res.json({errors: err});
    })
});*/
