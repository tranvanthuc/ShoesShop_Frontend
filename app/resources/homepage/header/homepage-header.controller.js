import { headerMenu } from '../fixture';
import { genderConverter } from '../../handlerServices';

/* @ngInject */
export default ($window, $rootScope, $scope, $http) => {
  $scope.catalogImages = ['https://cdn.shopify.com/s/files/1/0238/2821/products/Mens-Pronto-FW17-Suede-Burgundy-Product-001_600b49f1-bcb1-4367-9564-a497fb5da8cf_280x188.jpg?v=1507846145','https://cdn.shopify.com/s/files/1/0238/2821/products/RoyaleW-Blush-Perforated-Product-001_280x188.jpg?v=1489683360']

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

    $rootScope.headerHeight = $('#homepage-header').outerHeight();
  });

  
  $scope.catalogClicked = false;

  /* On header menu click */
  $scope._onSubMenuClick = (title) => {
    $scope.menu.map(item => {
      if(item.title === title) {
        $scope.catalogClicked = !$scope.catalogClicked;
        if($scope.catalogClicked) {
          $scope.catalogActive = true;
        } else {
          $scope.catalogActive = false;
        }
        $scope.catalogName = title;
        $scope.categories = item.categories;
      }
    })
  }

  

  /* Handle scrolling */
  $scope.$watch(() => {
    let stateName = $rootScope.currentState.split('.')[1];

    if(stateName === 'home') {
      $window.onscroll = () => {
        if($window.scrollY > 0){
          $scope.scrolling = true;      
        } else {
          $scope.scrolling = false;  
        }
        $scope.$apply();          
      }
    } else {
      $scope.scrolling = true;      
    }
  });

  /* Toggle search form */
  // $scope.onSearchLick = false;
  // $scope._onSearchClick = () => {
  //   $scope.onSearchLick = !$scope.onSearchLick;
  // };
  // $scope.$watch('onSearchLick', (newVal, oldVal) => {
  //   $scope.showSearchForm = newVal;
  // });
  
  
}