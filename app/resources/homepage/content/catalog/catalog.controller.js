import { genderConverter, textConverter } from '../../../handlerServices';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $api) => {
  const IMAGE_PATH = '/app/assets/images/';

  $rootScope.$watch('headerHeight', (newVal, oldVal) => {
    $('#catalog-container').css('padding-top', newVal + 'px'); 
  });

  if($stateParams.catalogName !== 'home') {
    $('.cover-bg').css('display', 'none');
    $('.sidebar-container').animate({left: '-300px'}, 400);
  }

  /* Get categories by catalog */
  $rootScope.loading = true;
  $api('cates/gender', {
    method: 'POST',
    data: {
      gender: genderConverter.toGender($stateParams.catalogName)
    }
  }).then(response => {
    $scope.categories = response.data.results;
    $scope.categories.forEach(category => {
      category.urlName = textConverter.convertToUrlParam(category.name);

      category.products.forEach(product => {
        product.urlName = textConverter.convertToUrlParam(product.name);
      });
    });
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