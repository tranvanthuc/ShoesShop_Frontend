import angular from 'angular';

import { catalog } from '../../fixture';
import { capitalize, convertToUrlParam } from '../../../handlerServices/textConverter';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $http) => {
  $rootScope.$watch('headerHeight', (newVal) => {
    $('#new-products').css('padding-top', newVal + 'px'); 
  });

  /* Get catalog and category name */
  $scope.catalogName = capitalize($stateParams.catalogName) + "'s";
  $scope.categoryName = 'The ' + capitalize($stateParams.categoryName);

  /* Get products by category and catalog from API */
  $http({
    method: 'POST',
    url: 'https://calm-dawn-66282.herokuapp.com/product-details/category',
    data: {
      category_id: $stateParams.categoryId
    },
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then(response => {
    $scope.products = response.data.results;
    $scope.products.forEach(item => {
      item.productName = convertToUrlParam(item.name);
      item.price = '$' + item.price;
    });
  })

  /* Pagination */
  $scope.currentPage = 1;
  $scope.pageSize = 8;
}