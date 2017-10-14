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
  
  // $scope.submit = () => {
  //   let object = {
  //     first_name: 'Thuc',
  //     last_name: 'Tran Van',
  //     email: 'thuc.tv@neo-lab.vn',
  //     password: '123',
  //     role_id: 1
  //   }
  //   $http.post('http://localhost:8000/register', object,{
  //     headers : {
  //         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  //     }
  //   }).then((response) => {
  //     console.log(response.data);
  //   })
  // }
  $scope.submit = () => {
    let object = {
      id: 18,
      email: 'thuc.tv@neo-lab.vn',
      currentPassword: '123',
      // newPassword: '1234',
    }
    $http.post('http://localhost:8000/user/update-password', object,{
      headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then((response) => {
      console.log(response.data);
    })
  }
}