/* @ngInject */
export default ($rootScope, $scope, $stateParams, $api) => {
  $rootScope.$watch('headerHeight', (newVal) => {
    $('#contact-container').css('padding-top', newVal + 'px'); 
  });

  $rootScope.loading = true;
  $api('shop-info', {
    method: 'GET',
  }).then(response => {
    $scope.shop = response.data.results[0];
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    $rootScope.loading = false;
  });

  $scope._submitContactForm = contact => {
    $rootScope.loading = true;
    $api('feedback/insert', {
      method: 'POST',
      data: {
        name: contact.name,
        email: contact.email,
        content: contact.message
      },
    }).then(response => {
      $('#contactVerifyModal').modal();
      $scope.contact = {
        name: '',
        email: '',
        message: ''
      }
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      $rootScope.loading = false;
    });
  }
}