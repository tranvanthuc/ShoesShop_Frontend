/* Global import */
window.Tether = require('tether');
window.Popper = require('popper.js');
window.$ = window.jQuery = require('jquery');
require('bootstrap');

/* App */
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.routes';
import admin from './resources/admin';
import homepage from './resources/homepage';

import './assets/scss/admin/index.scss';
import './assets/scss/homepage/index.scss';

angular.module('app', [
    uirouter,
    admin,
    homepage
  ])
  .config(routes)
