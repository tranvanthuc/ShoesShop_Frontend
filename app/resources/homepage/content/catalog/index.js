import angular from 'angular';

import catalogCtrl from './catalog.controller';

export default angular.module('app.hompage.content.catalog', [])
  .controller('catalogCtrl', catalogCtrl)
  .name