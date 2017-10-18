import angular from 'angular';

import homepageHeaderCtrl from './homepage-header.controller';
import homepageHeader from './homepage-header.directive';
import api from '../services/api.service';
/* @ngInject */
export default angular.module('app.homepage.header', [])
  .directive('homepageHeader', homepageHeader)
  .controller('homepageHeaderCtrl', homepageHeaderCtrl)
  .name