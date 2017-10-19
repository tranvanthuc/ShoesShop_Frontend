/* @ngInject */
export default ($rootScope, $scope, $localStorage) => {
  $rootScope.$watch('headerHeight', headerHeight => {
    $('#cart-container').css('padding-top', headerHeight + 'px'); 
  });

  // $localStorage.$reset();
  $scope.orders = $localStorage.orders;
  // $scope.ordersLength = $localStorage.orders.length;


  // $scope.$on('ordersQuantityChanged', (event, args) => {
  //   $scope.ordersQuantity = args;
  //   console.log('cart: ', args);

  //   $rootScope.$broadcast('realOrders', $localStorage.orders.length);
  // })

  // $scope.$on('ordersQuantityChanged', (event, args) => {
  //   $scope.ordersQuantity = args;
  // })

  /* Remove order */
  $scope._onClickRemove = (order) => {
    $('#deleteOrderModal').modal();

    $scope._removeOrder = () => {
      const index = $scope.orders.indexOf(order);
      if(index > -1) {
        $scope.orders.splice(index, 1);
      }
  
      $('#deleteOrderModal').modal('hide');
    }
  }
}