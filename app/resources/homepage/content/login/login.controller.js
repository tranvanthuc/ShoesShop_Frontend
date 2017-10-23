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
      console.log(response);
      if(response.data.results.length === 0) {
        $scope.loggedIn = false;
        $scope.message = 'Email or password is incorrect';
        $('#loginNotificationModal').modal();
      } else {
        $scope.loggedIn = true;
        $scope.user = response.data.results[0];
        $localStorage.user = $scope.user;
      console.log("You've logged in: ", $localStorage.user);
      
        $state.go('homepage.account')
      }
      $localStorage.loggedIn = $scope.loggedIn;
      $rootScope.$broadcast('authenActivated', $localStorage.loggedIn);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      $rootScope.loading = false;
    });
  }
}