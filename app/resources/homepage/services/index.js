import angular from 'angular';

import api from './api.service';

export default angular.module('app.homepage.services', [])
  .factory('$api', api)
  .name