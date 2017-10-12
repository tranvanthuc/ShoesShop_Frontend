/* @ngInject */
export default $stateProvider => {
  $stateProvider
    .state('homepage.home', {
      url: 'home',
      parent: 'homepage',
      template: require('./home/home.html'),
    })
    .state('homepage.men', {
      url: 'catalog/men',
      parent: 'homepage',
      template: require('./men/men.html'),
    })
    .state('homepage.women', {
      url: 'catalog/women',
      parent: 'homepage',
      template: require('./women/women.html'),
    })
    .state('homepage.detail', {
      url: 'products/product-name',
      parent: 'homepage',
      template: require('./detail/detail.html'),
    })
}