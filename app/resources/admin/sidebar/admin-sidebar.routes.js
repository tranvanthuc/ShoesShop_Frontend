/* @ngInject */
export default $stateProvider => {
  $stateProvider
    .state('admin.category', {
      url: '/category',
      parent: 'admin',
      template: require('../content/category/category.html')
    })
    .state('admin.size', {
      url: '/size',
      parent: 'admin',
      template: require('../content/size/size.html')
    })
    .state('admin.product', {
      url: '/product',
      parent: 'admin',
      template: require('../content/product/product.html')
    })
}