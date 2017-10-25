import angular from 'angular';
import { genderConverter, textConverter } from '../../../handlerServices';

/* @ngInject */
export default ($rootScope, $scope, $api, $window) => {
  const IMAGE_PATH = '/app/assets/images/';

  /* Get new products */
  $rootScope.loading = true;
  $api('product-details/limit', {
    method: 'GET',
  }).then(response => {
    $scope.newProducts = response.data.results;
    $scope.newProducts.forEach(product => {
      product.catalogName = genderConverter.toCatalog(product.gender);
      product.urlName = textConverter.convertToUrlParam(product.name);
    });
  }).catch((err) => {
    console.log(err);
  }).finally(() => {
    $rootScope.loading = false;
  });
  
  /* Catalog */
  $scope.menu = [
    {
      title: 'men',
      image: 'catalog-men.jpg'
    },
    {
      title: 'women',
      image: 'catalog-women.jpg'
    }
  ];

  /* Handle scroll action */
  const onScrollAction = () => {
    if($window.scrollY > 0){
      $rootScope.$apply(() => $rootScope.lightHeader = true);     
    } else {
      $rootScope.$apply(() => $rootScope.lightHeader = false);
    }
  }

  const init = () => {
    angular.element($window).on('scroll', onScrollAction);
  }

  const destroy = () => {
    angular.element($window).off('scroll', onScrollAction);
  }

  init();

  $scope.$on('$destroy', destroy);
}