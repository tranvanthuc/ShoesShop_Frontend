import angular from 'angular';
import uirouter from 'angular-ui-router';

import homepageContent from './homepage-content.directive';
import routes from './homepage-content.routes';

import home from './home';
import catalog from './catalog';
import category from './category';
import detail from './detail';
import cart from './cart';

/* @ngInject */
export default angular.module('app.homepage.content', [
  uirouter,
  home,
  catalog,
  category,
  detail,
  cart
])
  .directive('homepageContent', homepageContent)
  .config(routes)
  .name