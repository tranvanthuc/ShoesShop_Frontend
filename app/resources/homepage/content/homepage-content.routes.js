/* @ngInject */
export default $stateProvider => {
  $stateProvider
    .state('homepage.home', {
      url: 'home',
      parent: 'homepage',
      template: require('./home/home.html'),
    })
    .state('homepage.men', {
      url: 'men',
      parent: 'homepage',
      template: require('./men/men.html'),
    })
    .state('homepage.women', {
      url: 'women',
      parent: 'homepage',
      template: require('./women/women.html'),
    })
}