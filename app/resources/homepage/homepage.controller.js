/* @ngInject */
export default ($rootScope, $scope, $window, $localStorage) => {
  $('.sidebar-container').css('left', '-300px');

  $('.menu-bar').on('click', () => {
    $('.cover-bg').css('display', 'block');
    $('.sidebar-container').animate({left: '0'}, 400);
  })

  $('.cover-bg').on('click', () => {
    $('.cover-bg').css('display', 'none');
    $('.sidebar-container').animate({left: '-300px'}, 400);
  })

  /* Sidebar menu */
  $('.sidebar-container .categories-container').animate({left: '102.25px'}, 400);

  $window.on('beforeunload', event => {
    $rootScope.loggedIn = $localStorage.loggedIn;
    console.log($rootScope.loggedIn);
  })

  // $('.sidebar-menu-item').on('click', () => {
  //   console.log('object');
  //   $scope._hideSidebar();
  // })

  // $scope._hideSidebar = () => {
  //   $('.cover-bg').css('display', 'none');
  //   $('.sidebar-container').animate({left: '-300px'}, 400);
  // }
}