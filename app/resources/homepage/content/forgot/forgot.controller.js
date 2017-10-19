/* @ngInject */
export default ($rootScope, $scope, $stateParams, $api) => {
  $rootScope.$watch('headerHeight', (newVal) => {
    $('#forgot-container').css('padding-top', newVal + 'px'); 
  });

}