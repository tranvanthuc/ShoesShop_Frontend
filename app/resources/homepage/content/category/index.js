import angular from 'angular';

import categoryCtrl from './category.controller';

export default angular.module('app.hompage.content.category', [])
  .controller('categoryCtrl', categoryCtrl)
  .name