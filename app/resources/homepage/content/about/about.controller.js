/* @ngInject */
export default ($rootScope, $scope, $stateParams, $api) => {
  $rootScope.$watch('headerHeight', headerHeight => {
    $('#story-container').css('padding-top', headerHeight + 'px'); 
  });

  $rootScope.loading = true;
  $api('shop-info', {
    method: 'GET',
  }).then(response => {
    $scope.about = response.data.results[0];
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    $rootScope.loading = false;
  });

  $scope.team = [
    {
      name: 'Dung Le',
      position: 'Frontend Dev',
      image: 'team-rachael.jpg'
    },
    {
      name: 'Thuc Tran',
      position: 'Backend Dev',
      image: 'team-mark.jpg'
    },
    {
      name: 'Huy Nguyen',
      position: 'Backend Dev',
      image: 'team-josanna.jpg',
    },
    {
      name: 'Minh Thai',
      position: 'Backend Dev',
      image: 'team-julian.jpg'
    },
  ];
}