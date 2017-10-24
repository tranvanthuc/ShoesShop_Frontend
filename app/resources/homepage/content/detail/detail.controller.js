import { capitalize } from '../../../handlerServices/textConverter';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $state, $api, $localStorage) => {
  $rootScope.$watch('headerHeight', (newVal) => {
    $('#product-detail').css('padding-top', (50 + newVal) + 'px'); 
  });

  $scope.catalogName = capitalize($stateParams.catalogName) + "'s";

  /* Get product info */
  $rootScope.loading = true;
  $api('product/all-info', {
    method: 'POST',
    data: {
      id: $stateParams.productId
    }
  }).then(response => {
    $scope.product = response.data.results;
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    $rootScope.loading = false;
  });

  /* Order product */
  $scope.orders = $localStorage.orders;

  // Handle quantity format
  $scope.quantity = 1;
  $scope.$watch('quantity', quantity => {
    if(quantity < 1 || quantity === null || quantity === undefined) {
      $scope.invalidQuantity = true;
    } else {
      $scope.invalidQuantity = false;
    }
  })

  // Change size
  $scope._changedValue = (size) => {
    $scope.productSize = size;
  }

  // Add to cart action
  $scope._addToCart = (product) => {
    if($scope.productSize === undefined) { // User is still not choose a size
      $scope.modalContent = 'Please select a size';
      $scope.validToAdd = false;
    } else { // User has choosed a size
      if($scope.invalidQuantity) { // Quantity is invalid
        $scope.modalContent = 'Please enter valid quantity';
        $scope.validToAdd = false;
      } else { // Quantity is valid
        let isExisted = false; // Initial isExisted variable to check if this product is exist or not
        let isUpdateQuantity = false; // Check if user updates quantity of this shoe
        $localStorage.orders.forEach(order => { // Get all products from cart to check existed and quantity
          if(product.id === order.id && $scope.productSize === order.size) { // If product has the same size is existed
            if($scope.quantity === order.quantity) { // Continue check if quantity is matched, this product is existed in cart
              isExisted = true;
            } else { // If quantity is different, update quantity in cart with the same product
              order.quantity = $scope.quantity;
              order.total = $scope.quantity * product.price
              isUpdateQuantity = true;
            }
          }
          return; // prevent loop to the last element
        });

        if(isExisted) { // Product is existed with the same size and quantity
          $scope.validToAdd = false;
          $scope.modalContent = "You've ordered this. Please choose another size or quantity. You can also update quantity in your cart.";    
        } else {
          $scope.validToAdd = true;          
          if(isUpdateQuantity) { // Update quantity in cart with the same product
            $scope.modalContent = 'The shoe is updated';            
          } else { // Add new product
            $scope.modalContent = 'The shoe is added';
            const item = {
              id: product.id,
              name: product.name,
              image: product.image,
              size: $scope.productSize,
              quantity: $scope.quantity,
              price: product.price,
              total: product.price * $scope.quantity
            }
            
            if($localStorage.orders === undefined) {
              $scope.orders = [];
            }
        
            $scope.orders.push(item);
            $localStorage.orders = $scope.orders;
      
            $rootScope.$broadcast('ordersQuantityChanged', $localStorage.orders.length);
          }
        }
      }
    }

    $('#cartVerificationModal').modal();
  };

  /* Go to cart page if order success and user press on View cart button */
  $scope._goToCart = () => {
    $('#cartVerificationModal').modal('hide');
    $state.go('homepage.cart');
  }
}