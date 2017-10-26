/* @ngInject */
export default $stateProvider => {
  $stateProvider
    .state('homepage.home', {
      url: 'home',
      parent: 'homepage',
      template: require('./home/home.html'),
    })
    .state('homepage.account', {
      url: 'account',
      parent: 'homepage',
      template: require('./account/account.html'),
    })
    .state('homepage.login', {
      url: 'login',
      parent: 'homepage',
      template: require('./login/login.html'),
    })
    .state('homepage.register', {
      url: 'register',
      parent: 'homepage',
      template: require('./register/register.html'),
    })
    .state('homepage.forgot', {
      url: 'forgot',
      parent: 'homepage',
      template: require('./forgot/forgot.html'),
    })
    .state('homepage.about', {
      url: 'our-story',
      parent: 'homepage',
      template: require('./about/about.html'),
    })
    .state('homepage.cart', {
      url: 'cart',
      parent: 'homepage',
      template: require('./cart/cart.html'),
    })
    .state('homepage.contact', {
      url: 'contact',
      parent: 'homepage',
      template: require('./contact/contact.html'),
    })
    .state('homepage.catalog', {
      url: '{catalogName}',
      parent: 'homepage',
      template: require('./catalog/catalog.html'),
    })
    .state('homepage.category', {
      url: '{catalogName}/{categoryName}/{categoryId}/products',
      parent: 'homepage',
      template: require('./category/category.html'),
    })
    .state('homepage.detail', {
      url: '{catalogName}/{categoryName}/{productName}/{productId}',
      parent: 'homepage',
      template: require('./detail/detail.html'),
    })
}