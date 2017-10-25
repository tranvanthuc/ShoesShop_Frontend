/* @ngInject */
export default ($rootScope, $scope, $api, $state, $localStorage) => {
  $scope.user = $localStorage.user;
  
  $rootScope.$watch('headerHeight', headerHeight => {
    $('#account-container').css('padding-top', headerHeight + 'px'); 
  });

  $scope._logout = () => {
    $localStorage.user = {};
    $localStorage.loggedIn = false;
    $rootScope.$broadcast('authenActivated', $localStorage.loggedIn);
    $state.go('homepage.login');
  }
}