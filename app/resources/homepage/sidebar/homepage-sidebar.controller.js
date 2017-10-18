/* @ngInject */
export default ($window, $rootScope, $scope, $api) => {
  $scope.menu = ['men', 'women', 'story'];
  // $scope.catalogClicked = false;

  /* On header menu click */
  // $scope._onSubMenuClick = (subMenu) => {
  //   console.log(subMenu);
  //   $scope.menu.map(item => {
  //     if(item.title === subMenu) {
  //       $scope.catalogClicked = !$scope.catalogClicked;
  //       if($scope.catalogClicked) {
  //         $scope.catalogActive = true;
  //       } else {
  //         $scope.catalogActive = false;
  //       }
  //       $scope.catalogName = subMenu.toLowerCase();
  //       $scope.categories = item.categories;
  //     }
  //   })
  // };
}