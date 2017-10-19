import angular from 'angular';

import aboutCtrl from './about.controller';

/* @ngInject */
export default angular.module('app.homepage.content.about', [])
  .controller('aboutCtrl', aboutCtrl)
  .name