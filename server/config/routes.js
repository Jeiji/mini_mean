console.log(`Routes are up!`);
const cstmrs = require('../controllers/cstmrs.js')
const prdcts = require('../controllers/prdcts.js')
const ordrs = require('../controllers/ordrs.js')
module.exports = function( app ){

  app.get( '/cstmrs' , function( req , res ){
    console.log(`TO / ROUTES IN BACKEND`);
    cstmrs.idx( req , res );
  });

  app.post( '/add_cstmr' , function( req , res ){
    console.log(`TO /ADD_CSTMR ROUTES IN BACKEND`);
    console.log(req.body);
    cstmrs.add( req , res );
  });

  app.delete( '/del_cstmr_:victimId' , function( req , res ){
    cstmrs.delete( req , res );
  });

  app.get( '/prdcts' , function( req , res ){
    console.log(`TO / ROUTES IN BACKEND`);
    prdcts.idx( req , res );
  });

  app.get( '/dec_prdct_inv_:prdctId/:qty' , function( req , res ){
    prdcts.adj_inv( req , res );
  });

  app.delete( '/rep_inv/:prdctId/:qty' , function( req , res ){
    prdcts.rep_inv( req , res );
  });

  app.post( '/add_prdct' , function( req , res ){
    console.log(`TO /ADD_CSTMR ROUTES IN BACKEND`);
    console.log(req.body);
    prdcts.add( req , res );
  });

  app.delete( '/del_prdct_:victimId' , function( req , res ){
    prdcts.delete( req , res );
  });

  app.post( '/add_ordr' , function( req , res ){
    ordrs.add( req , res );
  });

  app.get( '/ordrs' , function( req , res ){
    console.log(`TO / ROUTES IN BACKEND`);
    ordrs.idx( req , res );
  });

  app.delete( '/del_ordr_:victimId' , function( req , res ){
    ordrs.delete( req , res );
  });


};
