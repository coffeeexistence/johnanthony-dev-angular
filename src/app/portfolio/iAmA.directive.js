  function whatAmI() {
  	return {
  		restrict: 'E',
        scope: {},
  		controller: ['$scope', '$timeout', '$interval',
        function($scope, $timeout, $interval){
            var ctrl = this;

            var thingsIAm = [
                'a Web Designer.',
                'a JavaScript Developer.',
                'an Angular Superhero.',
                'a Rails Developer.',
                'a Coffee Enthusiast!'
            ];
            var thingIndex = 0;

            var nextThing = function(){
                if (thingIndex < thingsIAm.length-1) {
                    thingIndex++;
                } else { thingIndex = 0; }
                destination = thingsIAm[thingIndex];
                charIndex = 0;
                charStatus = 'adding';
                updateText();
            };

            $scope.text = '';

            var destination = '';
            var charIndex = 0;

            var wait = 3;

            var updateText = function(){
                $scope.text = destination.split('').slice(0, charIndex).join('');
            };

            var charStatus = 'adding';

            ctrl.nextChar = function(){
                if (charStatus=='adding'){
                    var doneAdding = !(addChar());
                    if (doneAdding) {
                        charStatus = 'subtracting';
                        wait = 3;
                    }
                } else {
                    var doneRemoving = !(removeChar());
                    if (doneRemoving) {
                        nextThing();
                        wait = 3;
                    }
                }
            };

            var addChar = function() {
                if (charIndex < destination.length){
                    charIndex++;
                    updateText();
                    return true;
                } else {
                    return false;
                }
            };

            var removeChar = function() {
                if (charIndex > 0){
                    charIndex--;
                    updateText();
                    return true;
                } else {
                    return false;
                }
            };

            var update = function() {
                var variability = 150;

                var timeoutPeriod = (charStatus === 'subtracting') ? (0) : (parseInt(Math.random()*variability));

                $timeout(function(){
                    if (wait>0) { wait--; }
                    else { ctrl.nextChar(); }
                }, timeoutPeriod);
            };

            var start = function() {
                $interval(update, 130);
            };


            start();
    	}],
  		template: [
            '<p class="what-am-i">',
                'I am {{text}}',
            '</p'
        ].join('')
  	};
  }

  angular
  	.module('app')
  	.directive('whatAmI', whatAmI);
