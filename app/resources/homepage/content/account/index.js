import angular from 'angular';

import accountCtrl from './account.controller';

export default angular.module('app.hompage.content.account', [])
  .controller('accountCtrl', accountCtrl)
  .name