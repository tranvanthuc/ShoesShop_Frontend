import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './homepage.routes';
import homepageHeader from './header';
import homepageContent from './content';
import homepageFooter from './footer';

/* @ngInject */
export default angular.module('app.homepage', [
    uirouter,
    homepageHeader,
    homepageContent,
    homepageFooter
  ])
  .config(routes)
  .name