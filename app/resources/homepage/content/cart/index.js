import angular from 'angular';

import cartCtrl from './cart.controller';

export default angular.module('app.hompage.content.cart', [])
  .controller('cartCtrl', cartCtrl)
  .name