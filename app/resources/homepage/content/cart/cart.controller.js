/* @ngInject */
export default ($rootScope, $scope, $localStorage, $state, $api) => {
  $rootScope.$watch('headerHeight', headerHeight => {
    $('#cart-container').css('padding-top', headerHeight + 'px'); 
  });

  /* Get all orders from localStorage */
  $scope.orders = $localStorage.orders;
  $scope.orders.forEach((order, index) => {
    order.orderId = index;
  });

  /* Calculate subtotal */
  $scope._calculateSubtotal = (orders, subtotal) => {
    orders.forEach(order => {
      subtotal = subtotal + parseFloat(order.total);   
    });
    return subtotal;
  }

  /* Handle quantity is changed */
  $scope.subtotal = $scope._calculateSubtotal($scope.orders, 0);
  
  $scope._onQuantityChanged = (orderId, quantity, total) => {
    // total: old
    // order.total: new
    $scope.subtotal = 0;
    $scope.orders.forEach(order => {
      if(order.orderId === orderId) {
        if(quantity === null || quantity === undefined) {
          order.quantity = 0;
          order.total = 0;
        } else {
          order.quantity = quantity;
          order.total = quantity * order.price;   
        }
      }
      $scope.subtotal = $scope.subtotal + parseFloat(order.total);      
    });
  }
  
  /* Remove order */
  $scope._onClickRemove = (order) => {
    $('#deleteOrderModal').modal();

    $scope._removeOrder = () => {
      const index = $scope.orders.indexOf(order);
      if(index > -1) {
        $scope.orders.splice(index, 1);
        if($scope.orders.length == 0) {
          $scope.subtotal = 0;
        } else {
          $scope.subtotal = $scope._calculateSubtotal($scope.orders, 0);          
        }
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
          if(order.quantity === 0 || order.quantity === null || order.quantity === undefined) {
            count++; // invalid payment
          }
        });
        if (count > 0) {
          $scope.modalContent = 'Please enter valid quantity.';
          $scope.verifyPayment = false;
        } else {
          $scope.modalContent = 'Do you want to pay for these shoes?';
          $scope.verifyPayment = true;
        }
      } else {
        $scope.modalContent = "You have no orders.";
        $scope.verifyPayment = false;
      }
      $('#paymentVerificationModal').modal();
    } else {
      $state.go('homepage.login');
    }
  }

  $scope._pay = () => {
    $rootScope.loading = true;    
    let data = [];    
    $scope.orders.map(order => {
      data.push({
        name: order.name,
        size: order.size,
        quantity: order.quantity,
        price: order.price,
        total: order.total
      })
    });

    $api('order/insert', {
      method: 'POST',
      data: {
        user_id: $localStorage.user.id,
        products: data
      }
    }).then(response => {
      $scope.orders = [];
      $localStorage.orders = [];
      $scope.subtotal = 0;
      $rootScope.loading = false;
      $scope.modalContent = 'Thank you for your paying.';
      $scope.verifyPayment = false;
      $rootScope.$broadcast('ordersQuantityChanged', $scope.orders.length);
    }).catch(error => {
      console.log(error);
      $rootScope.loading = false;      
    });
  }
}