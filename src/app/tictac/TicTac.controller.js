function TicTacController($sce, $scope, TicTacApi){
	var ctrl = this;

	$scope.loaded = false;

	$scope.difficulty = 3;

	ctrl.currentPlayer = function() {
		var turnCount = 0;
		$scope.game.board.forEach(function(slot){
			if (slot !== ' ') {turnCount++}
		});
		var turn = turnCount % 2;

		if (turn == 0) { return ctrl.players[ctrl.players.order[0]] }
		else { return ctrl.players[ctrl.players.order[1]] }
	};

	ctrl.updateTurn = function() {
		ctrl.currentPlayer().move();
	};

	ctrl.players = {
		order: ['ai', 'player'],
		ai: {
			name: 'HAL',
			move: function() {
				$scope.message = "AI is computing optimal move";
				ctrl.getAiMove();
			}
		},
		player: {
			name: 'Player',
			move: function() {
				$scope.message = "Your turn";
			}
		}
	};

	$scope.message = "Hello World";

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
		ctrl.updateTurn();
	};

	ctrl.responseToGame = function(response) {
		var game = response.data.game_session;
		game.board = game.board_state.split('');
		return game;
	};

	ctrl.playerMove = function(event, position) {

		ctrl.updateState(position)
	};

	ctrl.updateState = function(position) {
		$scope.game.board[position-1] = $scope.game.p1_token;
		$scope.game.board_state = $scope.game.board.join('');
		console.log('updating state');
		console.log($scope.game.board_state);
		console.log(position)
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

	$scope.$on('selectPosition', ctrl.playerMove );
}

angular
	.module('app')
	.controller('TicTacController', ['$sce', '$scope', 'TicTacApi', TicTacController]);
