/* @ngInject */
export default $stateProvider => {
  $stateProvider
    .state('homepage.home', {
      url: 'home',
      parent: 'homepage',
      template: require('./home/home.html'),
    })
    .state('homepage.catalog', {
      url: '{catalogName}',
      parent: 'homepage',
      template: require('./catalog/catalog.html'),
    })
    .state('homepage.category', {
      url: '{catalogName}/{categoryName}/products',
      parent: 'homepage',
      template: require('./category/category.html'),
    })
    .state('homepage.detail', {
      url: 'products/{productName}',
      parent: 'homepage',
      template: require('./detail/detail.html'),
    })
}