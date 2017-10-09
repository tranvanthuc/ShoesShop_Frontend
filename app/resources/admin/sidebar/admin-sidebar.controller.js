/* @ngInject */
export default $scope => {
  const PARENT_URL = 'admin.';
  $scope.avatar = 'https://www.atomix.com.au/media/2015/06/atomix_user31.png';
      
  $scope.managementMenu = [
    {
      title: 'Categories',
      icon: 'fa-th-list',
      url: PARENT_URL + 'category'
    },
    {
      title: 'Products',
      icon: 'fa-tags',
      url: PARENT_URL + 'category'
    },
    {
      title: 'Sizes',
      icon: 'fa-object-ungroup',
      url: PARENT_URL + 'size'
    },
    {
      title: 'Shop',
      icon: 'fa-university',
      url: PARENT_URL + 'category'
    },
    {
      title: 'Invoices',
      icon: 'fa-credit-card',
      url: PARENT_URL + 'category'
    },
    {
      title: 'Users',
      icon: 'fa-users',
      url: PARENT_URL + 'category'
    },
    {
      title: 'Roles',
      icon: 'fa-universal-access',
      url: PARENT_URL + 'category'
    },
    {
      title: 'Feedback',
      icon: 'fa-comments',
      url: PARENT_URL + 'category'
    }
  ]
}