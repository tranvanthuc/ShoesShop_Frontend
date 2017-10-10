import angular from 'angular';

import productCtrl from './product.controller';

export default angular.module('app.admin.content.product', [])
  .controller('productCtrl', productCtrl)
  .name