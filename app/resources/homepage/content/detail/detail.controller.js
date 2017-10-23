import { capitalize } from '../../../handlerServices/textConverter';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $state, $api, $localStorage) => {
  $rootScope.$watch('headerHeight', (newVal) => {
    $('#product-detail').css('padding-top', (50 + newVal) + 'px'); 
  });

  $scope.catalogName = capitalize($stateParams.catalogName) + "'s";

  /* Handle quantity format */
  $scope.quantity = 1;
  $scope.$watch('quantity', quantity => {
    if(quantity < 1 || quantity === null || quantity === undefined) {
      $scope.invalidQuantity = true;
    } else {
      $scope.invalidQuantity = false;
    }
  })
  
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

  $scope._changedValue = (size) => {
    $scope.productSize = size;
  }

  $scope._addToCart = (product) => {
    if($scope.productSize === undefined) {
      $scope.modalContent = 'Please select a size';
      $scope.validToAdd = false;
    } else {
      if($scope.invalidQuantity) {
        $scope.modalContent = 'Please enter valid quantity';
        $scope.validToAdd = false;
      } else {
        $scope.validToAdd = true;
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

    $('#cartVerificationModal').modal();
  };

  /* Go to cart page if order success and user press on View cart button */
  $scope._goToCart = () => {
    $('#cartVerificationModal').modal('hide');
    $state.go('homepage.cart');
  }
}