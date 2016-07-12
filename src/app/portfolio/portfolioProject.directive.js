  function portfolioProject() {
  	return {
  		restrict: 'E',
  		scope: {
  			project: '='
  		},
  		controller: ['$scope', '$sce', '$mdMedia', '$mdDialog', function($scope, $sce, $mdMedia, $mdDialog){
        var ctrl = this;

        var projectScope = $scope;

        $scope.showAdvanced = function(ev) {
          var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
          $mdDialog.show({
            controller: [ '$scope', '$mdDialog', '$interval', '$timeout',
            function Ctrl($scope, $mdDialog, $interval, $timeout) {
              var dialogCtrl = this;
              $scope.project = projectScope.project;
              console.log(this.project);
              $scope.closeDialog = function() {
                $interval.cancel(mockupCycle);
                $mdDialog.hide();
              };

              $scope.mockup = {
                show: true,
                current: undefined,
                currentIndex: 0,
                update: function() {
                  if($scope.project.mockups && this.currentIndex < $scope.project.mockups.length) {
                    this.current = $scope.project.mockups[this.currentIndex];
                  }
                },
                next: function() {
                  var differentImage = false;
                  console.log('old index:', this.currentIndex);
                  if(this.currentIndex < $scope.project.mockups.length-1) {
                    this.currentIndex++;
                    differentImage = true;
                  } else {
                    if(this.currentIndex!=0) {
                      this.currentIndex = 0;
                      differentImage = true;
                    }
                  }

                  if(differentImage) {
                    var vm = this;
                    this.show = false;
                    $timeout(function(){
                      vm.update();
                      vm.show = true;
                    }, 700);
                  }
                  console.log('show is', this.show);
                  console.log('new index:', this.currentIndex);

                }
              };

              if($scope.project.mockups) {
                $scope.mockup.update();
                var mockupCycle = $interval(function(){
                  $scope.mockup.next()
                }, 4000);
              }

              var bulletPointWidth = function() {
                if ($scope.project.mockups){
                  return 60;
                } else {
                  return 99;
                }
              };

              $scope.bulletPointWidth = bulletPointWidth();


            }],
            controllerAs: 'ctrl',
            templateUrl: 'templates/projectDialog.tpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:false,
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
