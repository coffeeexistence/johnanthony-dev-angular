function TicTacApi($http){
  var service = this;
  var apiPath = 'http://ttt-rails-backend.herokuapp.com/api/game';

  service.create = function(data) {
    return $http.post(apiPath, data);
  };
  service.show = function(id) { return $http.get(apiPath+'/'+id) };

  service.update = function(id, data) {
    return $http.post(apiPath+'/'+id, data)
  };

  service.aiMove = function(id) { return $http.get(apiPath+'/'+id+'/ai_move') };
}

angular
  .module('app')
  .service('TicTacApi', ['$http', TicTacApi]);
