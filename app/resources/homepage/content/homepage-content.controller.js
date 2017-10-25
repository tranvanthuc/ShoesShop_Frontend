/* @ngInject */
export default ($rootScope, $scope) => {
  $rootScope.$watch('openCategoriesDialog', openCategoriesDialog => {
    $scope.openCategoriesDialog = openCategoriesDialog;
  });

  $scope._onContentClick = () => {
    $rootScope.openCategoriesDialog = false;
  };
}