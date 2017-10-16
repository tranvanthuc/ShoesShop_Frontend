import { hotProducts, newProducts, catalog } from '../../fixture';
import { genderConverter } from '../../../handlerServices';

/* @ngInject */
export default ($scope, $http) => {
  $scope.hotProducts = hotProducts;
  $scope.newProducts = newProducts;

  $scope.catalogImages = ['https://cdn.shopify.com/s/files/1/0238/2821/products/Mens-Pronto-FW17-Suede-Burgundy-Product-001_600b49f1-bcb1-4367-9564-a497fb5da8cf_280x188.jpg?v=1507846145','https://cdn.shopify.com/s/files/1/0238/2821/products/RoyaleW-Blush-Perforated-Product-001_280x188.jpg?v=1489683360'];
  
  /* Get all categories by catalog (men, women) */
  $http({
    method: 'GET',
    url: 'https://calm-dawn-66282.herokuapp.com/cates/catalog',
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }).then((response) => {
    let data = response.data.results;
    let arr = [];    
    const catalogNames = Object.getOwnPropertyNames(data);

    /* Convert JSON to Array (used in ng-repeat)*/
    Object.keys(data).map((item, index) => {
      arr.push({
        title: genderConverter(catalogNames[index]),
        image: $scope.catalogImages[index],
        categories: data[item]
      })  
    });

    $scope.menu = arr;
  });

  // $scope.catalog = catalog;
}