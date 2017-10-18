/* @ngInject */
export default ($rootScope, $scope) => {
  $rootScope.$watch('headerHeight', (newVal, oldVal) => {
    $('#cart-container').css('padding-top', newVal + 'px'); 
  });
}