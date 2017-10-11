import angular from 'angular';

import womenCtrl from './women.controller';

/* @ngInject */
export default angular.module('app.homepage.content.women', [])
  .controller('womenCtrl', womenCtrl)
  .name