function GoogleAuth($q) {
    
    var service = this;
    
    var clientId = '1046740664450-h2jkpmc43gp57qi0gjg9tfbtq00chgdg.apps.googleusercontent.com';

    var apiKey = 'AIzaSyBSPUse-QZUyO9RzXUgVt9RUmOvZb3ufVE';

    function handleClientLoad() {
    // Step 2: Reference the API key
    gapi.client.setApiKey(apiKey);
    window.setTimeout(checkAuth,1);
    }

    function checkAuth() {
        gapi.auth.authorize({client_id: clientId, scope: service.scopes, immediate: true}, handleAuthResult);
    }

    function handleAuthResult(authResult) {
        if (authResult && !authResult.error) {
            service.deferred.resolve(authResult);
        } else {
            service.deferred.reject();
        }
    }

    function handleAuthClick(event) {
        // Step 3: get authorization to use private data
        gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
        return false;
    }

    // Load the API and make an API call.  Display the results on the screen.
    service.load = function(name, version, callback) {
    // Step 4: Load the Google+ API
        gapi.client.load('plus', 'v1').then(function() {
            // Step 5: Assemble the API request
            var request = gapi.client.plus.people.get({
                'userId': 'me'
            });
            // Step 6: Execute the API request
            request.then(function(resp) {
            
            }, function(reason) {
            console.log('Error: ' + reason.result.error.message);
            });
        });
    }
    
    service.auth = function(scopes){
        service.deferred = $q.defer();
        service.scopes = scopes;
        handleClientLoad();
        return service.deferred.promise;
    }
};

angular
  .module('app')
  .filter('GoogleAuth', ['$q', GoogleAuth]);
