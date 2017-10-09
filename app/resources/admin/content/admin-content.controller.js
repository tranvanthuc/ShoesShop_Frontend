import { reduceByChar } from '../../handlerServices/textConverter';

/* @ngInject */
export default ($scope, $http) => {
  $scope.list = [
    {
      title: 'jelly shoes',
      gender: 2
    },
    {
      title: 'classic boots',
      gender: 1
    },
    {
      title: 'sandal',
      gender: 1
    },
    {
      title: 'high-heeled',
      gender: 3
    },
    {
      title: 'goft shoes',
      gender: 3
    },
    {
      title: 'chef shoes',
      gender: 1
    },
    {
      title: 'roman sandals',
      gender: 2
    },
    {
      title: 'rounded toe shoes',
      gender: 3
    },
    {
      title: 'chef shoes',
      gender: 1
    },
    {
      title: 'roman sandals',
      gender: 2
    },
    {
      title: 'rounded toe shoes',
      gender: 3
    },
    {
      title: 'chef shoes',
      gender: 1
    },
    {
      title: 'roman sandals',
      gender: 2
    },
    {
      title: 'rounded toe shoes',
      gender: 3
    },
    {
      title: 'chef shoes',
      gender: 1
    },
    {
      title: 'roman sandals',
      gender: 2
    },
    {
      title: 'rounded toe shoes',
      gender: 3
    },
  ]

  for(let i=0; i<$scope.list.length; i++) {
    $scope.list[i].title = reduceByChar($scope.list[i].title)
  }
}