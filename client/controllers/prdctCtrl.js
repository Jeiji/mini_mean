app.controller('prdctCtrl' , ['$scope' , 'prdctFctry' , function( scope , pf ) {

    let idx = function(){
    pf.idx( function( dataFromFactory ){
      scope.products = dataFromFactory
    });
  };
  idx();

  scope.addPrdct = function( newPrdct ){
    pf.addPrdct( newPrdct , function( dataFromFactory ){
    });
    scope.newPrdct = {};
    idx();
  };

  scope.delPrdct = function( victimId ){
    pf.delPrdct( victimId , function( dataFromFactory ){
      console.log(dataFromFactory);
    });
    idx();
  };

}]);
