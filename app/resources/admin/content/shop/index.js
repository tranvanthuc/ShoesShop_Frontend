import angular from 'angular';

import shopCtrl from './shop.controller';

export default angular.module('app.admin.content.shop', [])
  .controller('shopCtrl', shopCtrl)
  .name