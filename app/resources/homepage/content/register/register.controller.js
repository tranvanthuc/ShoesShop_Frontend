export default ($rootScope, $scope, $stateParams, $api) => {
  $rootScope.$watch('headerHeight', (newVal) => {
    $('#register-container').css('padding-top', newVal + 'px'); 
  });

}