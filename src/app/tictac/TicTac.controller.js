function TicTacController($sce, $scope, TicTacApi){
	var ctrl = this;

	$scope.loaded = false;

	$scope.difficulty = 3;

	ctrl.init = function(){
		TicTacApi.create({
			game_session: {
				ai_difficulty: $scope.difficulty
			}
		}).then(ctrl.loadGame);
	};

	ctrl.loadGame = function(response) {
		$scope.game = ctrl.responseToGame(response);
		$scope.loaded = true;
	};

	ctrl.responseToGame = function(response) {
		var game = response.data.game_session;
		game.board = game.board_state.split('');
		return game;
	};

	ctrl.updateState = function(event, position) {
		$scope.game.board[position-1] = $scope.game.p1_token;
		$scope.game.board_state = $scope.game.board.join('');
		console.log('updating state');
		console.log($scope.game.board_state);

		var updateParams = {
			game_session: {
				board_state: $scope.game.board_state
			}
		};

		TicTacApi.update($scope.game.id, updateParams).then(ctrl.loadGame);
	};

	ctrl.getAiMove = function() {
		TicTacApi.aiMove($scope.game.id).then(ctrl.loadGame);
	};

	$scope.$on('selectPosition', ctrl.updateState);
}

angular
	.module('app')
	.controller('TicTacController', ['$sce', '$scope', 'TicTacApi', TicTacController]);
