  function portfolioProject() {
  	return {
  		restrict: 'E',
  		scope: {
  			project: '='
  		},
  		controller: function($scope, $sce){
        var ctrl = this;

        ctrl.expanded = false;

        ctrl.toggleExpansion = function(){
          ctrl.expanded = !ctrl.expanded;
        };
    	},
  		controllerAs: 'projectCtrl',
  		templateUrl: 'js/app/portfolio/project.tpl.html',
  		link: function(scope, elem, attrs, ctrl) {

  		}
  	};
  }

  angular
  	.module('app')
  	.directive('portfolioProject', portfolioProject);
