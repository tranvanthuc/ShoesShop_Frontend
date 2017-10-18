import angular from 'angular';

import catalogCtrl from './catalog.controller';

/* @ngInject */
export default angular.module('app.catalogpage.content.catalog', [])
  .controller('catalogCtrl', catalogCtrl)
  .name