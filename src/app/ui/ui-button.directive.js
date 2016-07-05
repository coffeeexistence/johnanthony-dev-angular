function uiButton() {
    return {
        restrict: 'E',
        scope: true,
        transclude: true,
        controller: ['$scope', '$timeout', function($scope, $timeout){
            $scope.click = function() {
                if(!$scope.clicked) { 
                    $scope.clicked = true; 
                    $timeout(function(){
                        $scope.clicked = false;
                    }, 1000);
                }
            }
        }],
        template: [
            '<form class="noborder">',
                '<button ng-click="click()" class="ui-button-square ui-btn-soft" ng-class="{\'clicked\':clicked}">',
                    '<ng-transclude></ng-transclude>',
                '</button>',
            '</form>'
        ].join('')
    };
}

angular
    .module('app')
    .directive('uiButton', uiButton);
