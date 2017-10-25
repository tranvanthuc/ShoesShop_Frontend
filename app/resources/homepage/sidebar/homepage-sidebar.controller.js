/* @ngInject */
export default ($window, $rootScope, $scope, $api) => {
  $scope.menu = ['men', 'women', 'story'];
  // $scope.openCategoriesDialog = false;

  /* On header menu click */
  // $scope._onSubMenuClick = (subMenu) => {
  //   console.log(subMenu);
  //   $scope.menu.map(item => {
  //     if(item.title === subMenu) {
  //       $scope.openCategoriesDialog = !$scope.openCategoriesDialog;
  //       if($scope.openCategoriesDialog) {
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