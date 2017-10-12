/* @ngInject */
export default ($scope) => {
  $('.sidebar-container').css('left', '-300px');

  $('.menu-bar').on('click', () => {
    $('.cover-bg').css('display', 'block');
    $('.sidebar-container').animate({left: '0'}, 400);
  })

  $('.cover-bg').on('click', () => {
    $('.cover-bg').css('display', 'none');
    $('.sidebar-container').animate({left: '-300px'}, 400);
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