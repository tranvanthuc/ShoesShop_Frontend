import { hotProducts, newProducts } from '../fixture';

/* @ngInject */
export default $scope => {
  $scope.hotProducts = hotProducts;
  $scope.newProducts = newProducts;
}