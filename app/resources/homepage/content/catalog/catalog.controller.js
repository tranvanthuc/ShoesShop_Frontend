import { productsByCategory } from '../../fixture';
import { genderConverter } from '../../../handlerServices';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $api) => {
  const IMAGE_PATH = '/app/assets/images/';

  $rootScope.$watch('headerHeight', (newVal, oldVal) => {
    $('#catalog-container').css('padding-top', newVal + 'px'); 
  });

  $scope.productsByCategory = productsByCategory;

  $rootScope.loading = true;
  $api('cates/gender', {
    method: 'POST',
    data: {
      gender: genderConverter.toGender($stateParams.catalogName)
    }
  }).then(response => {
      $scope.categories = response.data.results;
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      $rootScope.loading = false;
    });
  
  switch ($stateParams.catalogName) {
    case 'men':
      return $scope.catalog = {
        name: 'men',
        title: "Men's",
        image: IMAGE_PATH + 'Men_collection_desktop_171003.jpg'
      }   
    default:
      return $scope.catalog = {
        name: 'women',
        title: "Women's",
        image: IMAGE_PATH + 'Womens_collection_desktop_171003.jpg'
      }
  };
}