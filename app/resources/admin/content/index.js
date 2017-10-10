import angular from 'angular';
import adminContent from './admin-content.directive';
import category from './category';
import size from './size';
import product from './product';
import shop from './shop';

export default angular.module('app.admin.content', [
  category,
  size,
  product,
  shop
])
  .directive('adminContent', adminContent)
  .name