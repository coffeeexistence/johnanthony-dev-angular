function ticTac() {
  return {
    restrict: 'E',
    controller: TicTacController,
    controllerAs: 'TicTacCtrl',
    templateUrl: 'templates/tictac.tpl.html'
  };
}

angular
  .module('app')
  .directive('ticTac', ticTac);
