import { headerMenu } from '../fixture';

/* @ngInject */
export default ($window, $rootScope, $scope) => {
  $scope.menu = headerMenu;

  $window.onscroll = () => {
    if($window.scrollY > 0){
      $scope.scrolling = true;      
    } else {
      $scope.scrolling = false;  
    }
    $scope.$apply();          
  }
}