function githubApi($http, $q) {
    var api = this;


    api.repoContents = function(user, repo, path) {
        var deferred = $q.defer();
        if (typeof path == 'undefined') { var path = '' } 
        var request = $http.get('https://api.github.com/repos/'+user+'/'+repo+'/contents/'+path);
        
        request.then(function(resp){
            console.log(resp);
            var folders = resp.data.filter(function(object){
                return (object.type=="dir");  
            });

            var files = resp.data.filter(function(object){
                return (object.type=="file");  
            });
            
            files = files.map(function(file) {
                $http.get(file.download_url)
                .then(function(resp){
                    file.text = resp.data;
                });
                return file;
            });
            
            var browser = {files: files, folders: folders};
            
            deferred.resolve(browser);

        });

        return deferred.promise;
    };
  
};

angular
  .module('app')
  .service('githubApi', ['$http', '$q', githubApi]);
