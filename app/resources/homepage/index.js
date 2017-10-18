import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngStorage from 'ngstorage';

import homepageCtrl from './homepage.controller';
import routes from './homepage.routes';
import homepageHeader from './header';
import homepageContent from './content';
import homepageFooter from './footer';
import homepageSidebar from './sidebar';
import services from './services';

/* @ngInject */
export default angular.module('app.homepage', [
    uirouter,
    'ngStorage',
    homepageHeader,
    homepageContent,
    homepageFooter,
    homepageSidebar,
    services
  ])
  .controller('homepageCtrl', homepageCtrl)
  .config(routes)
  .name