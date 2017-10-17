import angular from 'angular';

import { hotProducts, newProducts, catalog } from '../../fixture';
import { genderConverter } from '../../../handlerServices';

/* @ngInject */
export default ($rootScope, $scope, $api, $window) => {
  $scope.hotProducts = hotProducts;
  $scope.newProducts = newProducts;

  $scope.catalogImages = ['https://cdn.shopify.com/s/files/1/0238/2821/products/Mens-Pronto-FW17-Suede-Burgundy-Product-001_600b49f1-bcb1-4367-9564-a497fb5da8cf_280x188.jpg?v=1507846145','https://cdn.shopify.com/s/files/1/0238/2821/products/RoyaleW-Blush-Perforated-Product-001_280x188.jpg?v=1489683360'];
  
  /* Get all categories by catalog (men, women) */
  $api('cates/catalog', {
    method: 'GET',
  }).then(response => {
    let data = response.data.results;
    let arr = [];    
    const catalogNames = Object.getOwnPropertyNames(data);

    /* Convert JSON to Array (used in ng-repeat)*/
    Object.keys(data).map((item, index) => {
      arr.push({
        title: genderConverter.toCatalog(catalogNames[index]),
        image: $scope.catalogImages[index],
        categories: data[item]
      })  
    });

    $scope.menu = arr;
  });

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