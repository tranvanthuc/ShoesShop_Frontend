/* @ngInject */
export default ($rootScope, $scope, $stateParams, $api) => {
  const IMAGE_URL = '/app/assets/images/';
  $rootScope.$watch('headerHeight', headerHeight => {
    $('#story-container').css('padding-top', headerHeight + 'px'); 
  });

  $rootScope.loading = true;
  $api('shop-info', {
    method: 'GET',
  }).then(response => {
    $scope.about = response.data.results[0];
  }).catch(err => {
    console.log(err);
  }).finally(() => {
    $rootScope.loading = false;
  });

  $scope.team = [
    {
      name: 'Ryan Babenzien',
      position: 'Founder'
    },
    {
      name: 'Rachael Ulman',
      position: 'President & COO'
    },
    {
      name: 'Kyle Megrue',
      position: 'Director of Finance'
    },
    {
      name: 'Mark Holcomb',
      position: 'Director of Communications'
    },
    {
      name: 'Charlie Wang',
      position: 'Head of Photography'
    },
    {
      name: 'Chris Berry',
      position: 'Email & SMS Marketing Manager'
    },
    {
      name: 'Andrew Clingenpeel',
      position: 'Head of Customer Stisfaction'
    },
    {
      name: 'Matt Raviotta',
      position: 'Graphic Designer'
    },
    {
      name: 'Julian Kan',
      position: 'Art Director'
    },
    {
      name: 'Sam Anacker',
      position: 'Webmaster'
    },
    {
      name: 'Kristin Sword',
      position: 'Marketing Manager'
    },
    {
      name: 'Josanna Torrocha',
      position: 'Graphic Designer'
    },
    {
      name: 'Albert Flordeliza',
      position: 'Customer Satisfaction'
    },
    {
      name: 'Sean MCDonagh',
      position: 'Merchandising Director'
    },
    {
      name: 'Brandon Smithwrick',
      position: 'Style Intern'
    }
  ]

  $scope.team.forEach(mem => {
    let firstname = mem.name.split(' ')[0];    
    mem.image = IMAGE_URL + 'team-' + firstname.charAt(0).toLowerCase() + firstname.slice(1) + '.jpg';
    mem.name = mem.name.toUpperCase();
  });
}