function sanitize($sce) {
  return function(htmlCode){
    return $sce.trustAsHtml(htmlCode);
  }
};

angular
  .module('app')
  .filter('sanitize', ['$sce', sanitize]);
