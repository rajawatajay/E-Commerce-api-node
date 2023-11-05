const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderItemSchema = new mongoose.Schema({
  
    product:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,

    }],
     size:{
        type: String,
        
       
    },
    quantity:{
        type: Number,
        required: true,
       

    },
    Price:{
        type: Number,
        required: true,
       

    },
    discountePrice:{
        type: Number,
        required: true,
       

    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
});
     const OrderItem = mongoose.model('orderItems', orderItemSchema);

     module.exports = OrderItem;