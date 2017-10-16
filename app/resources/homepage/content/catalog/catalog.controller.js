import { productsByCategory } from '../../fixture';
// import { genderConverter } from '../../../handlerServices';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $http) => {
  $scope.productsByCategory = productsByCategory;

  $rootScope.$watch('headerHeight', (newVal, oldVal) => {
    $('#catalog-container').css('padding-top', newVal + 'px'); 
  });

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