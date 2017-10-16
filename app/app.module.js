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
    $rootScope.$on('$stateChangeStart', (e, toState, toParams, fromtState, fromParams) => {});

    $rootScope.$on('$stateChangeSuccess', (e, toState, toParams, fromState, fromParams) => {
      $rootScope.currentState = toState.name;

      switch ($rootScope.currentState.split('.')[0]) {
        case 'admin':
          $rootScope.pageTitle = 'The Helm - Admin Page';
          break;
        default:
          $rootScope.pageTitle = 'The Helm';  
          break;
      }

      $('#categories').css('display', 'none');
    });

    $rootScope.$on('$stateChangeFail', (e, toState, toParams, fromtState, fromParams) => {});
  }])
