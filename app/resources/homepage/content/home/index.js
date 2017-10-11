import angular from 'angular';

import homeCtrl from './home.controller';

/* @ngInject */
export default angular.module('app.homepage.content.home', [])
  .controller('homeCtrl', homeCtrl)
  .name