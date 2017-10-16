/* @ngInject */
export default $stateProvider => {
  $stateProvider
    .state('homepage.home', {
      url: 'home',
      parent: 'homepage',
      template: require('./home/home.html'),
    })
    .state('homepage.products', {
      url: 'catalog/{catalogName}/{categoryName}/products',
      parent: 'homepage',
      template: require('./men/men.html'),
    })
    .state('homepage.men', {
      url: 'catalog/men/{categoryName}/products',
      parent: 'homepage',
      template: require('./men/men.html'),
    })
    .state('homepage.women', {
      url: 'catalog/women',
      parent: 'homepage',
      template: require('./women/women.html'),
    })
    .state('homepage.detail', {
      url: 'products/{name}',
      parent: 'homepage',
      template: require('./detail/detail.html'),
    })
}