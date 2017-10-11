import angular from 'angular';

import menCtrl from './men.controller';

/* @ngInject */
export default angular.module('app.homepage.content.men', [])
  .controller('menCtrl', menCtrl)
  .name