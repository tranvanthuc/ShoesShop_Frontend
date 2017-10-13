import { headerMenu } from '../fixture';

/* @ngInject */
export default ($window, $rootScope, $scope, $http) => {
  $scope.menu = headerMenu;

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
  $scope.onSearchLick = false;
  $scope._onSearchClick = () => {
    $scope.onSearchLick = !$scope.onSearchLick;
  };
  $scope.$watch('onSearchLick', (newVal, oldVal) => {
    $scope.showSearchForm = newVal;
  });
  
  $scope.submit = () => {
    let object = {
      first_name: 'dung',
      last_name: 'le',
      email: 'dungle1811@gmail.com',
      password: 'abc',
      role_id: 3
    }

    $http.post('https://calm-dawn-66282.herokuapp.com/register', object).then((response) => {
      console.log(response);
    })
  }
}