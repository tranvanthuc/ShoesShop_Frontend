import { catalog } from '../../fixture';

/* @ngInject */
export default $scope => {
  $scope.list = catalog[1].products;
  console.log(catalog[1].products);
}