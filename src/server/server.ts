
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


app.listen(PORT, function(){
    console.log( `starting at localhost http://localhost:${PORT}`);
})


