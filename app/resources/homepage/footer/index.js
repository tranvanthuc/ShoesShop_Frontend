import angular from 'angular';

import homepageFooterCtrl from './homepage-footer.controller';
import homepageFooter from './homepage-footer.directive';

/* @ngInject */
export default angular.module('app.homepage.footer', [])
  .directive('homepageFooter', homepageFooter)
  .controller('homepageFooterCtrl', homepageFooterCtrl)
  .name