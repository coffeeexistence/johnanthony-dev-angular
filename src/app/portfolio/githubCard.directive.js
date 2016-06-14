  function githubCard() {
  	return {
  		restrict: 'E',
  		templateUrl: 'templates/github_card.tpl.html',
        controller: function() {
            $( document ).ready(function() {
                console.log('ready');
                var username = 'coffeeexistence'; // CHANGE THIS to your github name

                var profileURL = "https://github.com/" + username;
                $('.gh-username').html("<a href='" + profileURL + "'>" + username + "</a>");

                var gistsURL = "https://gist.github.com/" + username;
                var reposURL = "https://github.com/" + username +"?tab=repositories";

                var userPath = "https://api.github.com/users/" + username;
                var reposPath = "https://api.github.com/users/" + username + "/repos";

                var languages = [];

                // get user profile json
                $.getJSON(userPath, function(userResult){

                    // avatar pic
                    avatar = userResult.avatar_url;
                    $('.gh-avatar').html("<a href=" + profileURL + "><img src='" + avatar + "'></a>");

                    // get last activity month
                    var ghMonth = parseInt(userResult.updated_at.substring(5,7));
                    // get current month
                    var d = new Date;
                    var currentMonth = d.getMonth() + 1;

                    // has it been a month or less since you're last activity?
                    if (ghMonth === currentMonth || ghMonth + 1 === currentMonth || ghMonth === 13 && currentMonth === 01) {
                    console.log("＼(＾▽＾*)");
                    $('.gh-recently-active').removeClass('gh-hidden');
                    };

                    var reposNum = userResult.public_repos;
                    $('.gh-repos').html("<a href='" + reposURL + "'>" + reposNum + " Repositories</a>")
                    var gistsNum = userResult.public_gists;
                    $('.gh-gists').html("<a href='" + gistsURL + "'>" + gistsNum + " Gists</a>")
                });

                // get languages for all repos from github
                $.getJSON(reposPath, function(reposResult){
                    reposResult.forEach (function(obj){
                    if(obj.language && obj.language !== 'undefined') {
                        languages.push(obj.language)
                    }
                    });
                    var languagesSorted = languages.byCount();
                    languagesOutput = languagesSorted[0] + ", " + languagesSorted[1] + ", " + languagesSorted[2];
                    $('.gh-languages').html(languagesOutput)
                });

                // returns most frequent to least frequent
                Array.prototype.byCount= function(){
                    var itm, a= [], L= this.length, o= {};
                    for(var i= 0; i<L; i++){
                    itm= this[i];
                    if(!itm) continue;
                    if(o[itm]== undefined) o[itm]= 1;
                    else ++o[itm];
                    }
                    for(var p in o) a[a.length]= p;
                    return a.sort(function(a, b){
                    return o[b]-o[a];
                    });
                }

                });
        }
  	};
  }

  angular
  	.module('app')
  	.directive('githubCard', githubCard);
