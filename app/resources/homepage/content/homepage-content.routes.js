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
      template: require('./catalog/catalog.html'),
    })
    .state('homepage.detail', {
      url: 'products/{name}',
      parent: 'homepage',
      template: require('./detail/detail.html'),
    })
}