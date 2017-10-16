import { catalog } from '../../fixture';
import { capitalize, convertToUrlParam } from '../../../handlerServices/textConverter';

/* @ngInject */
export default ($scope, $stateParams) => {
  $scope.catalogName = capitalize($stateParams.catalogName) + "'s";
  $scope.categoryName = 'The ' + capitalize($stateParams.categoryName);
  $scope.list = catalog[$stateParams.catalogName.toLowerCase()].products;
  $scope.list.forEach(item => {
    item.productName = convertToUrlParam(item.name.toLowerCase());
  });

  

  /* Pagination */
  $scope.currentPage = 1;
  $scope.pageSize = 6;

  $('#new-products').css('padding-top', (100 + $('#homepage-header').outerHeight()) + 'px');
}