app.controller('ordrCtrl' , ['$scope' , 'ordrFctry' , 'prdctFctry' , 'cstmrFctry' ,  function( scope , of , pf , cf ) {

    const idx = function(){
      of.idx( function(dataFromFactory ){
              scope.orders = dataFromFactory;
      });
    };

    idx();


    const idx_C_and_P = function(){
    cf.idx( function( dataFromCF ){
      scope.customers = dataFromCF
    });
    pf.idx( function( dataFromPF ){
      scope.products = dataFromPF
    });
  };
  idx_C_and_P();


  scope.range = function(n) {
        return new Array(n);
    };
  scope.addOrdr = function( newOrdr ){
    console.log(scope.newOrdr.pIdx);
    scope.newOrdr.prdctId = products[newOrdr.pIdx]._id;
    console.log(scope.newOrdr.prdctId);
    of.addOrdr( newOrdr );
    idx();

  };

  scope.delOrdr = function( victimId ){
    of.delOrdr( victimId , function( dataFromFactory ){
      console.log(dataFromFactory);
    });
    idx();
  };

}]);
