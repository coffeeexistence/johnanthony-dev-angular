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

		if (turn === 0) { return ctrl.players[ctrl.players.order[0]] }
		else { return ctrl.players[ctrl.players.order[1]] }
	};

	ctrl.updateTurn = function() {
		if (!$scope.gameStatus().over) {
			ctrl.currentPlayer().move();
		}
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
		$scope.loading = true;
	};

	ctrl.loadGame = function(response) {
		$scope.game = ctrl.responseToGame(response);
		$scope.loaded = true;
		ctrl.updateTurn();
		$scope.loading = false;
	};

	$scope.gameStatus = function() {
		var status = {over: false};
		if ($scope.game.info.winner) {
			status.over = true;
			if($scope.game.info.winner === $scope.game.p1_token) { status.type = 'won' }
			else { status.type = 'lost' }
		} else if ($scope.game.info.draw === true) {
			status.over = true;
			status.type = 'draw';
		}
		return status;
	};

	$scope.gameOverMessage = function() {
		switch($scope.gameStatus().type) {
			case 'won':
				return 'You Won!!';
			case 'lost':
				return 'You Lost :('
			case 'draw':
				return 'Draw'
		}
	};


	ctrl.responseToGame = function(response) {
		var game = response.data.game_session;
		game.info = response.data.game_data;
		game.board = game.board_state.split('');
		return game;
	};

	ctrl.playerMove = function(event, position) {
		if (!$scope.gameStatus().over) {
			if (ctrl.currentPlayer().name === 'Player') {
				ctrl.updateState(position);
			} else { $scope.message += ", please wait your turn." }
		} else { $scope.gameOverAlert = "This game is over, you'll have to start a new game." }
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
