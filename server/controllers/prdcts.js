console.log(`Products Controller up!`);

const mongoose = require('mongoose');
const Product = mongoose.model( 'Product' )

function prdctsCtrl(){


  this.idx = function( req , res ){
    console.log(`TO CSTMRS CTRL FOR IDX`);
    Product.find( {} , function( err , allPrdcts ){
      if( err ){
        console.log(`Error indexing all products from db.`);
      }else{
        console.log(`SNATCHED ALL CUSTOMERS FROM DB:`);
        console.log( allPrdcts );
        res.json( allPrdcts )
      };
    });
  };

  this.add = function( req , res ){
    console.log(`TO CSTMRS CTRL FOR ADD`);
    let newPrdct = req.body
    Product.create( newPrdct , function( err , addedPrdct ){
      if( err ){
        console.log(`Error adding new product to db.`);
      }else{
        console.log(`ADDED CSTOMER TO DB!`);
        res.json( addedPrdct );
      };
    });
  };

  this.delete = function( req , res ){
    console.log(req.params);
    Product.remove( { _id : req.params.victimId } , function( err , deletedPrdct ){
      if( err ){
        console.log(`Couldn't delete`);
      }else{
        res.json( deletedPrdct );
      };
    });
  };

  this.adj_inv = function( req , res ){
    Product.findOne( { _id : req.params.prdctId } , function( err , prdct ){
      if( err ){
        console.log(`Sowee, couldn't edit the inv of the prdct`);
      }else{
        console.log(req.params);
      prdct.qty -= req.params.qty;
      prdct.save();
      console.log(`Updated inv!`);
      console.log(prdct);
      };
    });
  };

  this.rep_inv = function( req , res ){
    Product.findOne( { _id : req.params.prdctId } , function( err , prdct ){
      console.log(req.params.prdctId);
      if( err ){
        console.log(`Couldn't adjust inventory...`);
      }else{
      console.log(`About to adjust inventory`);
      console.log(prdct.qty);
      prdct.qty += parseInt(req.params.qty);
      prdct.save();
      };
    });
  };

};
module.exports = new prdctsCtrl
