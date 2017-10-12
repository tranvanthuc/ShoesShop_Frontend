import angular from 'angular';
import uirouter from 'angular-ui-router';

import homepageCtrl from './homepage.controller';
import routes from './homepage.routes';
import homepageHeader from './header';
import homepageContent from './content';
import homepageFooter from './footer';
import homepageSidebar from './sidebar';

/* @ngInject */
export default angular.module('app.homepage', [
    uirouter,
    homepageHeader,
    homepageContent,
    homepageFooter,
    homepageSidebar
  ])
  .controller('homepageCtrl', homepageCtrl)
  .config(routes)
  .name