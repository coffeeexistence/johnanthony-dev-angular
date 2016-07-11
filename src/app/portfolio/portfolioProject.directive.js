  function portfolioProject() {
  	return {
  		restrict: 'E',
  		scope: {
  			project: '='
  		},
  		controller: ['$scope', '$sce', '$mdMedia', '$mdDialog', function($scope, $sce, $mdMedia, $mdDialog){
        var ctrl = this;
				$scope.expand = {
					state: false,
					text: 'MORE',
					toggle: function() {
						this.state = !this.state;
						this.text = (this.state ? "LESS" : "MORE")
					}
				};

        $scope.showAdvanced = function(ev) {
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
          $mdDialog.show({
            controller: function Ctrl() {
              this.project = $scope.project;
            },
            controllerAs: 'ctrl',
            templateUrl: 'templates/projectDialog.tpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: true,
          })
          .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });
          $scope.$watch(function() {
            return $mdMedia('xs') || $mdMedia('sm');
          }, function(wantsFullScreen) {
            $scope.customFullscreen = (wantsFullScreen === true);
          });
        };
    	}],
  		controllerAs: 'projectCtrl',
  		templateUrl: 'templates/project.tpl.html'
  	};
  }

  angular
  	.module('app')
  	.directive('portfolioProject', portfolioProject);
