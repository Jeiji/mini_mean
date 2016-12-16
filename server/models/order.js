console.log(`Loading order.js model...`);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

OrderSchema = new mongoose.Schema(
  {
    _customer : { type : Schema.Types.ObjectId, ref: 'Customer' },
    _product : { type : Schema.Types.ObjectId, ref: 'Product' },
    qty : { type : Number , required : true },
  } ,
  { timestamps : true });
const Order = mongoose.model( 'Order' , OrderSchema )
