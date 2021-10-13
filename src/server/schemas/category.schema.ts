import mongoose from 'mongoose';
import { Category } from '../../shared/models/category.model.js';

const {Schema, model} = mongoose;

const categorySchema = new Schema<Category>({
    category_name: {type: String, required: true},
    parentCategory: {type: Schema.Types.ObjectId, ref: 'Category'},
    //subCategories: [{type: Schema.Types.ObjectId,ref: 'Category'}],// is the reference corrrect???
     
})

export const CategoryModel = model<Category>('Category', categorySchema);