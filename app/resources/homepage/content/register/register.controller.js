export default ($rootScope, $scope, $state, $stateParams, $localStorage, $api) => {
  $rootScope.$watch('headerHeight', (newVal) => {
    $('#register-container').css('padding-top', newVal + 'px'); 
  });

  $scope._registerAccount = user => {
    $rootScope.loading = true;
    $api('register', {
      method: 'POST',
      data: {
        role_id: 2,
        first_name: user.firstname,
        last_name: user.lastname,
        email: user.email,
        password: user.password
      }
    }).then(response => { // success
      $scope.registerFail = false;
      $scope.user = {};
      $state.go('homepage.login');
    }).catch(error => { // fail
      $scope.registerFail = true;
      $scope.errorText = 'Email is existed.'
      console.log('fail: ', error);
    }).finally(() => {
      $rootScope.loading = false;
    })
  };
}