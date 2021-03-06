import angular from 'angular';
import uirouter from 'angular-ui-router';

import homepageContent from './homepage-content.directive';
import homepageContentCtrl from './homepage-content.controller';
import routes from './homepage-content.routes';

import home from './home';
import catalog from './catalog';
import category from './category';
import detail from './detail';
import cart from './cart';
import contact from './contact';
import login from './login';
import register from './register';
import forgot from './forgot';
import about from './about';
import account from './account';

/* @ngInject */
export default angular.module('app.homepage.content', [
  uirouter,
  home,
  catalog,
  category,
  detail,
  cart,
  contact,
  login,
  register,
  forgot,
  about,
  account
])
  .directive('homepageContent', homepageContent)
  .controller('homepageContentCtrl', homepageContentCtrl)
  .config(routes)
  .name