/* @ngInject */
export default ($rootScope, $scope, $localStorage, $state) => {
  $rootScope.$watch('headerHeight', headerHeight => {
    $('#cart-container').css('padding-top', headerHeight + 'px'); 
  });

  $scope.orders = $localStorage.orders;

  /* Calculate subtotal */
  $scope._calculateSubtotal = (orders, subtotal) => {
    orders.forEach(order => {
      subtotal = subtotal + parseFloat(order.total);   
    });
    return subtotal;
  }

  /* Handle quantity is changed */
  $scope.subtotal = $scope._calculateSubtotal($scope.orders, 0);
  
  $scope._onQuantityChanged = (id, quantity, total) => {
    $scope.orders.forEach(order => {
      if(order.id === id) {
        order.quantity = quantity;
        order.total = quantity * order.price;
        $scope.subtotal = $scope.subtotal - total + parseFloat(order.total);
      }
    });
  }
  
  /* Remove order */
  $scope._onClickRemove = (order) => {
    $('#deleteOrderModal').modal();

    $scope._removeOrder = () => {
      const index = $scope.orders.indexOf(order);
      if(index > -1) {
        $scope.orders.splice(index, 1);
        $scope.subtotal = $scope._calculateSubtotal($scope.orders, 0);
      }

      $rootScope.$broadcast('ordersQuantityChanged', $scope.orders.length);    

      $('#deleteOrderModal').modal('hide');
    }
  }

  /* Payment */
  $scope._payment = () => {
    let count = 0; // valid payment
    if($localStorage.loggedIn) {
      if($scope.orders.length != 0) {
        $scope.orders.forEach(order => {
          if(order.quantity === null || order.quantity === undefined) {
            count++; // invalid payment
          }
          $scope.subtotal = $scope.subtotal
        });
        if (count > 0) {
          $scope.modalContent = 'Please enter valid quantity';
          $scope.verifyPayment = false;
        } else {
          $scope.modalContent = 'Do you want to pay for these?';
          $scope.verifyPayment = true;
        }
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