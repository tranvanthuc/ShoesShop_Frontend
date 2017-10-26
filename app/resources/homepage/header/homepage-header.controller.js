import angular from 'angular';
import { headerMenu } from '../fixture';
import { genderConverter, textConverter } from '../../handlerServices';

/* @ngInject */
export default ($rootScope, $scope, $api, $localStorage, $state, $timeout) => {
  /* Show search box in category page */
  $scope.isCatalogPage = stateName => {
    return stateName.split('.')[1] === 'category' ? true : false;
  }

  $scope.search = $scope.isCatalogPage($state.current.name);

  $rootScope.$on('$stateChangeSuccess', (e, toState, toParams, fromState, fromParams) => {
    $scope.search = $scope.isCatalogPage(toState.name);
    $scope.openCategoriesDialog = false;
    if(!$scope.search) { // Out of category page
      $scope.menu.map(item => {
        item.isActivated = false;
      })
    }
  });

  // Watch search text and send it to category controller
  $scope._searchChanged = searchText => {
    $rootScope.$broadcast('searchTextChanged', searchText)
  }
  $timeout($scope._searchChanged, 3000);

  /* Authen */
  $scope.loggedIn = $localStorage.loggedIn;
  $scope.$on('authenActivated', (event, args) => {
    $scope.loggedIn = args;
  })
  
  $scope._goToAccount = () => {
    $scope.loggedIn ? $state.go('homepage.account') : $state.go('homepage.login');
  }
  
  /* Get all categories by catalog (men, women) */
  $rootScope.loading = true;
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
        categories: data[item]
      })  
    })

    $scope.menu = arr;

    $rootScope.headerHeight = $('#homepage-header').innerHeight();
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    $rootScope.loading = false;
  });;

  /* On header menu click */
  $scope.catalogActivated = $scope.isCatalogPage($state.current.name);   
  
  $rootScope.$watch('openCategoriesDialog', openCategoriesDialog => {
    // console.log('header: ', openCategoriesDialog);
    $scope.openCategoriesDialog = $rootScope.openCategoriesDialog;
  });

  $scope._onSubMenuClick = catalog => {
    $rootScope.openCategoriesDialog = true;
    $scope.openCategoriesDialog = $rootScope.openCategoriesDialog;
    $scope.categories = catalog.categories;
    $scope.catalogName = catalog.title;    
    $scope.categories.map(category => category.urlName = textConverter.convertToUrlParam(category.name));  
  }

  /* Handle scrolling */
  $rootScope.$watch('currentState', currentState => {
    let stateName = currentState.split('.')[1];

    if(stateName === 'home') {
      $rootScope.lightHeader = false;  
    } else {
      $rootScope.lightHeader = true;      
    }
  });

  /* Watch lightHeader to set background to header  */
  $rootScope.$watch('lightHeader', lightHeader => {
    $scope.lightHeader = lightHeader;
  })

  /* Catch event when orders quantity is changed */
  $scope.$on('ordersQuantityChanged', (event, args) => {
    $localStorage.ordersQuantity = args;
    $scope.ordersQuantity = $localStorage.ordersQuantity;
  })
  $scope.ordersQuantity = $localStorage.ordersQuantity;

  /* Toggle search form */
  // $scope.showSearchForm = false;
  $scope._onSearchClick = () => {
    $scope.showSearchForm = true;
  };
  $scope._onSearchClosed = () => {
    $scope.showSearchForm = false;
  }
}