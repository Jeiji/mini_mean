console.log(`Loading product.js model...`);
const mongoose = require('mongoose');

ProductSchema = new mongoose.Schema(
  {
    name : { type : String , required : true , minlength : 3 },
    desc : { type : String , required : true , minlength : 3 },
    img : { type : String , required : true , minlength : 3 },
    qty : { type : Number , required : true },
  } ,
  { timestamps : true });
const Product = mongoose.model( 'Product' , ProductSchema )
