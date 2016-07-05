  function portfolioProject() {
  	return {
  		restrict: 'E',
  		scope: {
  			project: '='
  		},
  		controller: ['$scope', '$sce', function($scope, $sce){
        var ctrl = this; 
				$scope.expand = {
					state: false,
					text: 'MORE',
					toggle: function() {
						this.state = !this.state; 
						this.text = (this.state ? "LESS" : "MORE")
					}
				};
    	}],
  		controllerAs: 'projectCtrl',
  		templateUrl: 'templates/project.tpl.html'
  	};
  }

  angular
  	.module('app')
  	.directive('portfolioProject', portfolioProject);
