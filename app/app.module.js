/* Global import */
window.Tether = require('tether');
window.Popper = require('popper.js');
window.$ = window.jQuery = require('jquery');
require('bootstrap');

/* App */
import angular from 'angular';
import uirouter from 'angular-ui-router';

import admin from './resources/admin';
import routes from './app.routes';

import './assets/scss/admin/index.scss';

angular.module('app', [
  uirouter,
  admin
])
  .config(routes)
