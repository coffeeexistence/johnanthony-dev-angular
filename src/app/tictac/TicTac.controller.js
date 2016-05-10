function TicTacController($sce, $scope, TicTacApi){
	var ctrl = this;

	$scope.loaded = false;



	ctrl.init = function(){
		TicTacApi.create({
			game_session: {
				ai_difficulty: '5'
			}
		}).then(ctrl.loadGame);
	};

	ctrl.loadGame = function(response) {
		$scope.game = ctrl.responseToGame(response);
		$scope.loaded = true;
	};

	ctrl.responseToGame = function(response) {
		debugger;
		var game = response.data;
		game.board = game.board_state.split('');
		return game;
	};

	ctrl.init();
}

angular
	.module('app')
	.controller('TicTacController', ['$sce', '$scope', 'TicTacApi', TicTacController]);
