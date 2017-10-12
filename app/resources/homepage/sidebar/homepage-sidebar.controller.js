import { headerMenu } from '../fixture';

/* @ngInject */
export default ($window, $rootScope, $scope) => {
  $scope.menu = headerMenu;
}