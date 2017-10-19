import angular from 'angular';

import registerCtrl from './register.controller';

export default angular.module('app.hompage.content.register', [])
  .controller('registerCtrl', registerCtrl)
  .name