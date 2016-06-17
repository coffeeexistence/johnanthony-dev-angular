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
					text: 'more',
					toggle: function() {
						this.state = !this.state;
						this.text = (this.state ? "less" : "more")
					}
				};

    	}],
  		controllerAs: 'projectCtrl',
  		templateUrl: 'templates/project.tpl.html',
  		link: function(scope, elem, attrs, ctrl) {

  		}
  	};
  }

  angular
  	.module('app')
  	.directive('portfolioProject', portfolioProject);
