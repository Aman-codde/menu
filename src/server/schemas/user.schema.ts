import mongoose from 'mongoose';
import type { Product } from '../../shared/models/user.model';
const {Schema, model} = mongoose

const productSchema = new Schema<Product>({
    product_name: {type: String, required: true},
    categories: [{type: Schema.Types.ObjectId, ref: 'Category'}],
})

export const ProductModel = model<Product>('Product',productSchema)
