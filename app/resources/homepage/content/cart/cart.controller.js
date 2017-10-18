/* @ngInject */
export default ($rootScope, $scope, $localStorage) => {
  $rootScope.$watch('headerHeight', headerHeight => {
    $('#cart-container').css('padding-top', headerHeight + 'px'); 
  });

  // $localStorage.$reset();
  $scope.orders = $localStorage.orders;

  $scope._onClickRemove = () => {
    $('#deleteOrderModal').modal();
  }

  $scope._removeOrder = order => {
    const index = $scope.orders.indexOf(order);
    if(index != -1) {
      $scope.orders.splice(index, 1);
    }
    $('#deleteOrderModal').modal('hide');
  }
}