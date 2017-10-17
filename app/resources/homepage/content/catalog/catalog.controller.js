import { productsByCategory } from '../../fixture';
import { genderConverter } from '../../../handlerServices';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $http) => {
  $rootScope.$watch('headerHeight', (newVal, oldVal) => {
    $('#catalog-container').css('padding-top', newVal + 'px'); 
  });

  $scope.productsByCategory = productsByCategory;

  $http.post(
    'https://calm-dawn-66282.herokuapp.com/cates/gender',
    {gender: genderConverter.toGender($stateParams.catalogName)},
    {
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
    .then((response) => {
      $scope.categories = response.data.results;
      console.log(response.data.results);
    })

  switch ($stateParams.catalogName) {
    case 'men':
      return $scope.catalog = {
        title: "Men's",
        image: 'https://d2zy73x1fg2nl6.cloudfront.net/images/collection/Men_collection_desktop_171003.jpg'
      }   
    default:
      return $scope.catalog = {
        title: "Women's",
        image: 'https://d2zy73x1fg2nl6.cloudfront.net/images/collection/Womens_collection_desktop_171003.jpg'
      }
  }
}