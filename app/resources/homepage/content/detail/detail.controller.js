import { size } from '../../fixture';
import { convertToUrlParam } from '../../../handlerServices/textConverter';

/* @ngInject */
export default ($scope, $stateParams) => {
  $scope.size = size;

  console.log(convertToUrlParam($stateParams.name));

  $('#product-detail').css('padding-top', (100 + $('#homepage-header').outerHeight()) + 'px');
}