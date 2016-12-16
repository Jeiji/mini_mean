console.log('Orders Ctrl up!');
const mongoose = require('mongoose');
const Order = mongoose.model('Order');

function ordrsCtrl(){


  this.add = function( req , res ){
    let no = req.body;
    Order.create( { _customer : no.cstmrId , _product : no.prdctId , qty : no.qty } , function( err , data ){
      console.log(`******************************`);
      console.log(no);
      if( err ){
        console.log(`Error adding new order to DB`);
      }else{
        console.log(`DID IT!`);
        console.log(data);
        res.redirect('/dec_prdct_inv_'+no.prdctId+'/'+no.qty)
      };
    });
  };

  this.idx = function( req , res ){
    Order.find( {} )
      .populate('_customer')
      .populate('_product')
      .exec(function( err , allOrdrs ){
      if( err ){
        console.log(`Error indexing all orders from db.`);
      }else{
        console.log(`SNATCHED ALL ORDERS FROM DB:`);
        console.log( allOrdrs );
        res.json( allOrdrs )
      };
    });
  };

  this.delete = function( req , res ){
    console.log(req.params);
    let prdctIdToAdj = {};
    let qty = 0;
    Order.findOne( { _id : req.params.victimId } , function( err , ordr ){
      if( err ){
        console.log(`Couldn't adjust product inventories`);
      }else{
      console.log(`FOUND THE ONE I WANT TO DELETE`);
      prdctIdToAdj = ordr._product;
      qty = ordr.qty;
      Order.remove( { _id : req.params.victimId } , function( err , deletedOrdr ){
          if( err ){
            console.log(`Couldn't delete`);
          }else{
            console.log(`GETTING HERE AFWLKJAFWEL; KAFF ;LKDJS ;ASLDJKF ;ASDLFJK AS;DLFKJ AS;DLFKJ ASD;FLJK AS`);
            // res.json( deletedOrdr );
            res.redirect('/rep_inv/'+prdctIdToAdj+'/'+qty)
          };
        });
      };
    });

  };

};
module.exports = new ordrsCtrl;
