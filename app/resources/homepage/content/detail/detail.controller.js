import { capitalize } from '../../../handlerServices/textConverter';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $api) => {
  $rootScope.$watch('headerHeight', (newVal) => {
    $('#product-detail').css('padding-top', (70 + newVal) + 'px'); 
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
    $scope.product.price = '$' + $scope.product.price;
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    $rootScope.loading = false;
  });
}