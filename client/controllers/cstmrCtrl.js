app.controller('cstmrCtrl' , ['$scope' , 'cstmrFctry' , 'ordrFctry' ,  function( scope , cf , of ) {

  const idx_O = function(){
    of.idx( function( dataFromOF ){
      scope.orders = dataFromOF
    });
  };
  idx_O();

    console.log(`IN CSTMRCTRL!`);
    let idx = function(){
    cf.idx( function( dataFromFactory ){
      console.log(`BACK TO CSTMRCTRL FROM FACTORY`);
      scope.customers = dataFromFactory
    });
  };
  idx();

  scope.addCstmr = function( newCstmr ){
    console.log(`TO CSTMRCTRL FOR ADDCSTMR`);
    cf.addCstmr( newCstmr , function( dataFromFactory ){
      console.log(`BACK TO THE CSTMRCTRL FOR ADDCSTMR`);
    });
    scope.newCstmr = {};
    idx();
  };

  scope.delCstmr = function( victimId ){
    cf.delCstmr( victimId , function( dataFromFactory ){
      console.log(dataFromFactory);
    });
    for( i = 0 ; i <= scope.orders.length-1 ; i++  ){
      if( scope.orders[i]._customer._id == victimId ){
        of.delOrdr( scope.orders[i]._id , function( dataFromFactory ){
          console.log(`Order is gone, too!`);
        });
      };
    };
    idx();
  };

}]);
