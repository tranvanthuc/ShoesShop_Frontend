import angular from 'angular';

import contactCtrl from './contact.controller';

export default angular.module('app.hompage.content.contact', [])
  .controller('contactCtrl', contactCtrl)
  .name