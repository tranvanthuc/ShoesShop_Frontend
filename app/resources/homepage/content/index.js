import angular from 'angular';

import homepageContentCtrl from './homepage-content.controller';
import homepageContent from './homepage-content.directive';

/* @ngInject */
export default angular.module('app.homepage.content', [])
  .directive('homepageContent', homepageContent)
  .controller('homepageContentCtrl', homepageContentCtrl)
  .name