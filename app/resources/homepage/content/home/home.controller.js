import { hotProducts, newProducts, catalog } from '../../fixture';

/* @ngInject */
export default $scope => {
  $scope.hotProducts = hotProducts;
  $scope.newProducts = newProducts;
  $scope.catalog = catalog;
}