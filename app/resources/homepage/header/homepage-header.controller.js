import { headerMenu } from '../fixture';

/* @ngInject */
export default ($window, $rootScope, $scope) => {
  $scope.menu = headerMenu;
  $scope.catalogClicked = false;

  /* On header menu click */
  $scope._onSubMenuClick = (subMenu) => {
    $scope.menu.map(item => {
      if(item.title === subMenu) {
        $scope.catalogClicked = !$scope.catalogClicked;
        if($scope.catalogClicked) {
          $scope.catalogActive = true;
        } else {
          $scope.catalogActive = false;
        }
        $scope.catalogName = subMenu.toLowerCase();
        $scope.categories = item.categories;
      }
    })
  }

  /* Handle scrolling */
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

  /* Toggle search form */
  // $scope.onSearchLick = false;
  // $scope._onSearchClick = () => {
  //   $scope.onSearchLick = !$scope.onSearchLick;
  // };
  // $scope.$watch('onSearchLick', (newVal, oldVal) => {
  //   $scope.showSearchForm = newVal;
  // });
  
  
}