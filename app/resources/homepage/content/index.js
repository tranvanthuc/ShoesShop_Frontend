import angular from 'angular';
import uirouter from 'angular-ui-router';

import homepageContent from './homepage-content.directive';
import routes from './homepage-content.routes';

import home from './home';
import men from './men';
import women from './women';
import detail from './detail';

/* @ngInject */
export default angular.module('app.homepage.content', [
  uirouter,
  home,
  men,
  women,
  detail
])
  .directive('homepageContent', homepageContent)
  .config(routes)
  .name