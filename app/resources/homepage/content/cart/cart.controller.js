/* @ngInject */
export default ($rootScope, $scope, $localStorage, $state) => {
  $rootScope.$watch('headerHeight', headerHeight => {
    $('#cart-container').css('padding-top', headerHeight + 'px'); 
  });

  $scope.orders = $localStorage.orders;
  
  /* Remove order */
  $scope._onClickRemove = (order) => {
    $('#deleteOrderModal').modal();

    $scope._removeOrder = () => {
      const index = $scope.orders.indexOf(order);
      if(index > -1) {
        $scope.orders.splice(index, 1);
      }
  
      $rootScope.$broadcast('ordersQuantityChanged', $scope.orders.length);    

      $('#deleteOrderModal').modal('hide');
    }
  }

  /* Payment */
  $scope._payment = () => {
    console.log('cart: ', $localStorage.loggedIn);
    if($localStorage.loggedIn) {
      if($scope.orders.length != 0) {
        $scope.modalContent = 'Do you want to pay for these?';
        $scope.verifyPayment = true;
      } else {
        $scope.modalContent = "You have no orders";
        $scope.verifyPayment = false;
      }
      $('#paymentVerificationModal').modal();
    } else {
      $state.go('homepage.login');
    }
  }

  $scope._pay = () => {
    $scope.orders = [];
    $localStorage.orders = [];
    $scope.modalContent = 'Thank you for your paying';
    $scope.verifyPayment = false;
    $rootScope.$broadcast('ordersQuantityChanged', $scope.orders.length);
  }
}