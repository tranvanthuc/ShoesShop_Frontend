import angular from 'angular';

import detailCtrl from './detail.controller';

export default angular.module('app.homepage.content.detail', [])
  .controller('detailCtrl', detailCtrl)
  .name