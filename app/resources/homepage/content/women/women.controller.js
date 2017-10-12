import { catalog } from '../../fixture';

/* @ngInject */
export default $scope => {
  $scope.list = catalog[1].products;
  
  $scope.currentPage = 1;
  $scope.pageSize = 6;

  $('#women-products').css('padding-top', (100 + $('#homepage-header').outerHeight()) + 'px');
}