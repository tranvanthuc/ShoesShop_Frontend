import angular from 'angular';
import ngStorage from 'ngstorage';

import categoryCtrl from './category.controller';

export default angular.module('app.hompage.content.category', [
  'ngStorage'
])
  .controller('categoryCtrl', categoryCtrl)
  .name