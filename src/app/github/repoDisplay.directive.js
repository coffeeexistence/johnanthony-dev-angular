  function repoDisplay() {
  	return {
  		restrict: 'E',
  		templateUrl: 'templates/repo_display.tpl.html',
        controller: ['githubApi', '$scope', function(githubApi, $scope) {
            
            var username = 'coffeeexistence';
            var repo = 'Coding-Exercises';
            
            githubApi.repoContents(username, repo, 'advent-of-code').then(function(browser){
                $scope.browser = browser;
            });
            
            
        }]
  	};
  }

  angular
  	.module('app')
  	.directive('repoDisplay', [repoDisplay]);
