function gameSlot() {
	return {
		restrict: 'A',
		scope: {
			index: '='
		},
    //require: '^TicTacController',
		controller: ['$sce', '$scope', function($sce, $scope){
			var ctrl =  this;
			$scope.show = false;
      replace: true,
			ctrl.load = function(index){
				//$scope.slot = slot;
        $scope.index = index;
				$scope.show = true;
			};

      ctrl.slot = function(){
        return $scope.$parent.game.board[$scope.index-1];
      };

      $scope.select = function() {
        $scope.$emit('selectPosition', $scope.index);
      };

  	}],
		controllerAs: 'slotCtrl',
		template: [
			'<div ng-if="show" ng-click="select()" class="game-slot">{{slotCtrl.slot()}}</div>'
		].join(''),
		link: function(scope, elem, attrs, ctrl) {
			scope.$watch('index', function (index) {
	        if (index!==undefined) {ctrl.load(index); console.log(index); }
	    });
		}
	};
}

angular
	.module('app')
	.directive('gameSlot', gameSlot);
