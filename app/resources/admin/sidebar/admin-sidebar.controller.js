import {managementMenu} from '../fixture';

/* @ngInject */
export default $scope => {
  const PARENT_URL = 'admin.';
  $scope.avatar = 'https://www.atomix.com.au/media/2015/06/atomix_user31.png';
      
  $scope.managementMenu = managementMenu;
}