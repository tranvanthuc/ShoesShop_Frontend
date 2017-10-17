import { productsByCategory } from '../../fixture';
import { genderConverter } from '../../../handlerServices';

/* @ngInject */
export default ($rootScope, $scope, $stateParams, $api) => {
  $rootScope.$watch('headerHeight', (newVal, oldVal) => {
    $('#catalog-container').css('padding-top', newVal + 'px'); 
  });

  $scope.productsByCategory = productsByCategory;

  $api('cates/gender', {
    method: 'POST',
    data: {
      gender: genderConverter.toGender($stateParams.catalogName)
    }
  }).then(response => {
      $scope.categories = response.data.results;
      // $scope.categories.forEach((category) => {
      //   $scope.getProductsByCategory(category.id).then((response) => {
      //     category.products = response.data.results;
      //   console.log(category);
        
      //   })
      // });
    }).catch(err => {
      console.log(err);
    });

  // $scope.getProductsByCategory = (categoryId) => {
  //   return $api.post(
  //     'https://calm-dawn-66282.herokuapp.com/product-details/category',
  //     {category_id: categoryId},
  //     {
  //       headers: {
  //         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  //       }
  //     });
  // };
  
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
  };
}