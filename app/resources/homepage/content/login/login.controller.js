/* @ngInject */
export default ($rootScope, $scope, $api, $state, $localStorage) => {
  $rootScope.$watch('headerHeight', headerHeight => {
    $('#login-container').css('padding-top', headerHeight + 'px'); 
  });

  $scope._login = user => {
    $rootScope.loading = true;
    $api('login', {
      method: 'POST',
      data: {
        email: user.email,
        password: user.password
      }
    }).then(response => {
      $scope.loggedIn = true;
      $scope.user = response.data.results[0];
      $localStorage.user = $scope.user;
    
      $state.go('homepage.account')
      
      $localStorage.loggedIn = $scope.loggedIn;
      $rootScope.$broadcast('authenActivated', $localStorage.loggedIn);
    }).catch(err => {
      $scope.loggedIn = false;
      $scope.message = 'Email or password is incorrect.';
      console.log(err);
    }).finally(() => {
      $rootScope.loading = false;
    });
  }
}