import angular from 'angular';

import { capitalize, convertToUrlParam } from '../../../handlerServices/textConverter';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $api) => {
  $rootScope.$watch('headerHeight', (newVal) => {
    $('#new-products').css('padding-top', newVal + 'px'); 
  });

  /* Get catalog and category name */
  $scope.catalogNameParam = $stateParams.catalogName;
  $scope.catalogName = capitalize($stateParams.catalogName) + "'s";
  $scope.categoryName = 'The ' + capitalize($stateParams.categoryName);
  /* Get products by category and catalog from API */
  $api('product-details/category', {
    method: 'POST',
    data: {
      category_id: $stateParams.categoryId
    },
  }).then(response => {
    $scope.products = response.data.results;
    $scope.products.forEach(item => {
      item.productName = convertToUrlParam(item.name);
      item.price = '$' + item.price;
    });
  });

  /* Pagination */
  $scope.currentPage = 1;
  $scope.pageSize = 8;
}