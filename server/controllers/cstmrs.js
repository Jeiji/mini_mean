console.log(`Customers Controller up!`);

const mongoose = require('mongoose');
const Customer = mongoose.model( 'Customer' )

function cstmrsCtrl(){


  this.idx = function( req , res ){
    console.log(`TO CSTMRS CTRL FOR IDX`);
    Customer.find( {} , function( err , allCstmrs ){
      if( err ){
        console.log(`Error indexing all customers from db.`);
      }else{
        console.log(`SNATCHED ALL CUSTOMERS FROM DB:`);
        console.log( allCstmrs );
        res.json( allCstmrs )
      };
    });
  };

  this.add = function( req , res ){
    console.log(`TO CSTMRS CTRL FOR ADD`);
    let newCstmr = req.body
    Customer.create( newCstmr , function( err , addedCstmr ){
      if( err ){
        console.log(`Error adding new customer to db.`);
      }else{
        console.log(`ADDED CSTOMER TO DB!`);
        res.json( addedCstmr );
      };
    });
  };

  this.delete = function( req , res ){
    console.log(req.params);
    Customer.remove( { _id : req.params.victimId } , function( err , deletedCstmr ){
      if( err ){
        console.log(`Couldn't delete`);
      }else{
        res.json( deletedCstmr );
      };
    });
  };

};
module.exports = new cstmrsCtrl
