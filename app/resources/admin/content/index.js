import angular from 'angular';

import adminContent from './admin-content.directive';
import category from './category';
import size from './size';

export default angular.module('app.admin.content', [
  category,
  size
])
  .directive('adminContent', adminContent)
  .name