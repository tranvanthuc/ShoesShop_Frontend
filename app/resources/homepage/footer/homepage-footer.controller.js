/* @ngInject */
export default ($rootScope, $scope) => {
  $scope.menu = [
    {
      title: 'Company',
      href: 'homepage.about'
    }, 
    {
      title: 'Help',
      href: 'homepage.contact'
    },
    {
      title: 'Contact us',
      href: 'homepage.contact'
    }
  ];

  // $rootScope.$watch('openCategoriesDialog', openCategoriesDialog => {
  //   console.log('footer: ', $rootScope.openCategoriesDialog);
    
  // })

  $scope._onFooterClick = () => {
    $rootScope.openCategoriesDialog = false;
  };
}