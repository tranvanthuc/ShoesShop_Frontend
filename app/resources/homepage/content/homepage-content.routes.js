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
      template: require('./category/category.html'),
    })
    .state('homepage.detail', {
      url: 'products/{productName}',
      parent: 'homepage',
      template: require('./detail/detail.html'),
    })
}