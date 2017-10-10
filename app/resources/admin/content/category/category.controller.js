import { reduceByChar } from '../../../handlerServices/textConverter';
import { categories} from '../../fixture';

/* @ngInject */
export default ($scope) => {
  $scope.list = categories;

  for(let i=0; i<$scope.list.length; i++) {
    $scope.list[i].name = reduceByChar($scope.list[i].name)
  }
}