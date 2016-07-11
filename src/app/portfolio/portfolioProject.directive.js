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

        var projectScope = $scope;

        $scope.showAdvanced = function(ev) {
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
          $mdDialog.show({
            controller: [ '$scope', '$mdDialog',
            function Ctrl($scope, $mdDialog) {
              this.project = projectScope.project;
              console.log(this.project);
              $scope.closeDialog = function() {
                $mdDialog.hide();
              };
            }],
            controllerAs: 'ctrl',
            templateUrl: 'templates/projectDialog.tpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: true,
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
