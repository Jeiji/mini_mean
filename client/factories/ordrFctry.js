app.factory( 'ordrFctry' , [ '$http' , function( http ){
  orders = [];
  order = {};
  function ordrFctry(){
    var _this = this;

    this.idx = function( callbackToCtrl ){
      let dbOrders = [];
      http.get( '/ordrs' ).then( function( res ){
        dbOrders = res.data;
        orders = dbOrders
        callbackToCtrl( dbOrders );
      });
    };

    this.addOrdr = function( newOrdr ){
      http.post( '/add_ordr' , newOrdr ).then( function( res ){
        console.log(`New Order`);
        console.log(res);
      });
    };

    this.delOrdr = function( victimId , callbackToCtrl ){
      http.delete( '/del_ordr_' + victimId ).then( function( deletedOrdr ){
        callbackToCtrl( deletedOrdr )
      });
    };


  };
  return new ordrFctry();
}]);
