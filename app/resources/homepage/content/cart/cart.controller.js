/* @ngInject */
export default ($rootScope, $scope, $localStorage) => {
  $rootScope.$watch('headerHeight', headerHeight => {
    $('#cart-container').css('padding-top', headerHeight + 'px'); 
  });

  $scope.orders = $localStorage.orders;
}