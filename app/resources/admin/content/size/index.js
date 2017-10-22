import angular from 'angular';

import sizeCtrl from './size.controller';

export default angular.module('app.admin.content.size', [])
  .controller('sizeCtrl', sizeCtrl)
  .name