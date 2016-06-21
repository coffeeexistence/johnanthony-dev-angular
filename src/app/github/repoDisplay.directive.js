  function repoDisplay() {
  	return {
  		restrict: 'E',
  		templateUrl: 'templates/repo_display.tpl.html',
        controller: ['githubApi', '$scope', '$timeout', 
        function(githubApi, $scope, $timeout) {
            
            var username = 'coffeeexistence';
            var repo = 'Coding-Exercises';
            
            githubApi.repoContents(username, repo, 'advent-of-code').then(function(browser){
                $scope.browser = browser;
                $timeout(function(){Rainbow.color()}, 1000);
            });
            
            
        }]
  	};
  }

  angular
  	.module('app')
  	.directive('repoDisplay', [repoDisplay]);
