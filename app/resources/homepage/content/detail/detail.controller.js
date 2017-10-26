import { capitalize } from '../../../handlerServices/textConverter';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $state, $api, $localStorage) => {
  $rootScope.$watch('headerHeight', newVal => {
    $('#product-detail').css('padding-top', newVal + 'px'); 
  });

  $scope.catalogName = capitalize($stateParams.catalogName) + "'s " + capitalize($stateParams.categoryName);

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
  $scope._onQuantityChanged = quantity => {
    if(quantity > 100 || quantity === null || quantity === undefined) {
      $scope.quantity = 0;
      $scope.invalidQuantity = true;
    } else {
      $scope.invalidQuantity = false;
    }
  };

  // Change size
  $scope._onSizeChanged = size => {
    $scope.productSize = size;
  };

  // Add to cart action
  $scope._addToCart = (product) => {
    // User is still not choose a size
    if($scope.productSize === undefined) {
      $scope.modalContent = 'Please select a size.';
      $scope.validToAdd = false;
    }
    // User has choosed a size
    else {
      // Quantity is invalid
      if($scope.invalidQuantity) {
        $scope.modalContent = 'Please enter valid quantity (0 - 100).';
        $scope.validToAdd = false;
      }
      // Quantity is valid
      else {
        // Initial isExisted variable to check if this product is exist or not
        let isExisted = false;
        // Check if user updates quantity of this shoe
        let isUpdateQuantity = false; 
        // Get all products from cart to check existed and quantity
        $localStorage.orders.forEach(order => { 
          // If product has the same size is existed
          if(product.id === order.id && $scope.productSize === order.size) { 
            // Continue check if quantity is matched, this product is existed in cart
            if($scope.quantity === order.quantity) { 
              isExisted = true;
            } 
            // If quantity is different, update quantity in cart with the same product
            else { 
              order.quantity = $scope.quantity;
              order.total = $scope.quantity * product.price
              isUpdateQuantity = true;
            }
          }
          // prevent loop to the last element
          return; 
        });

        // Product is existed with the same size and quantity
        if(isExisted) { 
          $scope.validToAdd = false;
          $scope.modalContent = "You've ordered this. Please choose another size or quantity. You can also update quantity in your cart.";    
        } else {
          $scope.validToAdd = true;          
          // Update quantity in cart with the same product
          if(isUpdateQuantity) { 
            $scope.modalContent = 'The shoe is updated.';            
          } 
          // Add new product
          else { 
            $scope.modalContent = 'The shoe is added.';
            const item = {
              id: product.id,
              name: $scope.catalogName + ' ' + product.name,
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