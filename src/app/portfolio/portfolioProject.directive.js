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
            controller: [ '$scope', '$mdDialog', '$interval',
            function Ctrl($scope, $mdDialog, $interval) {
              var dialogCtrl = this;
              $scope.project = projectScope.project;
              console.log(this.project);
              $scope.closeDialog = function() {
                $mdDialog.hide();
              };

              $scope.mockup = {
                current: undefined,
                currentIndex: 0,
                update: function() {
                  this.current = $scope.project.mockups[this.currentIndex];
                },
                next: function() {
                  console.log('old index:', this.currentIndex);
                  if(this.currentIndex < $scope.project.mockups.length-1) {
                    this.currentIndex++;
                    this.update();
                  } else {
                    if(this.currentIndex!=0) {
                      this.currentIndex = 0;
                      this.update();
                    }
                  }
                  console.log('new index:', this.currentIndex);
                }
              };

              if($scope.mockup) {
                $scope.mockup.update();
                $interval(function(){ $scope.mockup.next() }, 3000);
              }


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
