import angular from 'angular';

import loginCtrl from './login.controller';

export default angular.module('app.hompage.content.login', [])
  .controller('loginCtrl', loginCtrl)
  .name