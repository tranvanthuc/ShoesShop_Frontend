/* @ngInject */
export default $stateProvider => {
  $stateProvider.state('homepage', {
    url: '/',
    template: require('./homepage.html'),
  })
}