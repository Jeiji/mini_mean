console.log(`Loading customer.js model...`);
const mongoose = require('mongoose');

CustomerSchema = new mongoose.Schema(
  {name : { type : String , required : true , minlength : 3 }} ,
  { timestamps : true });
const Customer = mongoose.model( 'Customer' , CustomerSchema )
