import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './homepage.routes';

/* @ngInject */
export default angular.module('app.homepage', [
    uirouter
  ])
  .config(routes)
  .name