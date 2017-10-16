import { catalog } from '../../fixture';
import { capitalize, convertToUrlParam } from '../../../handlerServices/textConverter';

/* @ngInject */
export default ($scope, $stateParams, $http) => {
  $scope.catalogName = capitalize($stateParams.catalogName) + "'s";
  $scope.categoryName = 'The ' + capitalize($stateParams.categoryName);
  $scope.list = catalog[$stateParams.catalogName.toLowerCase()].products;
  $scope.list.forEach(item => {
    item.name = convertToUrlParam(item.name.toLowerCase());
  });

  $http({
    method: 'GET',
    url: 'https://calm-dawn-66282.herokuapp.com/cates',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then((response) => {
    console.log('hello: ', response.data.results);
  })

  /* Pagination */
  $scope.currentPage = 1;
  $scope.pageSize = 6;

  $('#new-products').css('padding-top', (100 + $('#homepage-header').outerHeight()) + 'px');
}