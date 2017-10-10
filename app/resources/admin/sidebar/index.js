import angular from 'angular';

import adminSidebar from './admin-sidebar.directive';
import adminSidebarCtrl from './admin-sidebar.controller';
import routes from './admin-sidebar.routes';

export default angular.module('app.admin.sidebar', [])
  .directive('adminSidebar', adminSidebar)
  .controller('adminSidebarCtrl', adminSidebarCtrl)
  .config(routes)
  .name