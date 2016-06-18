function codify($filter) {
    
    var keywords = 'break case catch class continue ' +
    'default delete do else enum export extends false ' +
    'for from as function if implements import in instanceof ' +
    'interface let new null package private protected ' +
    'static return super switch ' +
    'this throw true try typeof var while with yield';
    keywords = keywords.split(' ');
    keywords = keywords.map(function(keyword){
        return '\\b'+keyword+'\\b';
    });
    keywords = keywords.join('|');
    
    var keywordsRegex = new RegExp(keywords, "gm");
    
    var variableRegex = /var\s*(\S*)\s*=/gm;
    
    return function(code){
        if(code) {
            code = code.replace(variableRegex, '<span class="codify-variable">$&</span>');
            code = code.replace(keywordsRegex, '<span class="codify-keyword">$&</span>');
            debugger;
            
            code = '<pre>'+code+'</pre>';
            return $filter('sanitize')(code);
        }
        
    };
};

angular
    .module('app')
    .filter('codify', ['$filter', codify]);
