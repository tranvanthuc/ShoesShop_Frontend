import { catalog } from '../../fixture';

/* @ngInject */
export default $scope => {
  $scope.list = catalog[0].products;

  $scope.currentPage = 1;
  $scope.pageSize = 6;
}