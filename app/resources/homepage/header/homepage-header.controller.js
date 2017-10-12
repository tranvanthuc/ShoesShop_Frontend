import { headerMenu } from '../fixture';

/* @ngInject */
export default ($window, $rootScope, $scope) => {
  $scope.menu = headerMenu;

  $scope.$watch(() => {
    let stateName = $rootScope.currentState.split('.')[1];

    if(stateName === 'home') {
      $window.onscroll = () => {
        if($window.scrollY > 0){
          $scope.scrolling = true;      
        } else {
          $scope.scrolling = false;  
        }
        $scope.$apply();          
      }
    } else {
      $scope.scrolling = true;      
    }
  });
}