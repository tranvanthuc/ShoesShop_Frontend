/* Global import */
window.Tether = require('tether');
window.Popper = require('popper.js');
window.$ = window.jQuery = require('jquery');
require('bootstrap');

/* App */
import angular from 'angular';
import uirouter from 'angular-ui-router';
import angularPagination from 'angular-utils-pagination';

import routes from './app.routes';
import admin from './resources/admin';
import homepage from './resources/homepage';

import './assets/scss/admin/index.scss';
import './assets/scss/homepage/index.scss';

/* @ngInject */
angular.module('app', [
    uirouter,
    angularPagination,
    admin,
    homepage
  ])
  .config(routes)
  .run(['$rootScope', ($rootScope) => {
    // $rootScope.current_state = 'home';
    // $rootScope.isHome = false;
    $rootScope.$on('$stateChangeSuccess', (e, toState, toParams, fromState, fromParams) => {
      // $rootScope.current_state = toState.name;
      let stateName = toState.name.split('.')[1];
      $rootScope.stateName = stateName;
      // switch (stateName) {
      //   case 'home':
      //     $rootScope.isHome = true;
      //     break;
      //   default:
      //     $rootScope.isHome = true;
      //     break;
      // }
      // console.log(stateName);
    })
  }])
