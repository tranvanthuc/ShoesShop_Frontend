import angular from 'angular';

import homepageSidebarCtrl from './homepage-sidebar.controller';
import homepageSidebar from './homepage-sidebar.directive';

/* @ngInject */
export default angular.module('app.homepage.sidebar', [])
  .controller('homepageSidebarCtrl', homepageSidebarCtrl)
  .directive('homepageSidebar', homepageSidebar)
  .name