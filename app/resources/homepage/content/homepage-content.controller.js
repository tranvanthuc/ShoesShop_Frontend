export default ($rootScope, $scope) => {
  $scope._onContentClick = () => {
    $rootScope.openCategoriesDialog = false;
  }
}