import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

const productSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    quantity: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: Array
});

// autoIncrement.initialize(mongoose.connection);
// productSchema2.plugin(autoIncrement.plugin, 'product2');

const products = mongoose.model('product2', productSchema);

export default products;