angular
  .module( 'app', [ 'ngMaterial', 'ui.router', 'ngSanitize', 'angular-bind-html-compile', 'gist-embed', 'ngMdIcons'] )
    .config(function($httpProvider, $stateProvider, $urlMatcherFactoryProvider, $sceDelegateProvider){

      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'];

      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        "https://www.youtube.com/embed/**"
      ]);

      $urlMatcherFactoryProvider.strictMode(false);
      $stateProvider

        .state('portfolio', {
          url: '',
          templateUrl: 'templates/portfolio.tpl.html',
          controller: 'PortfolioController',
          controllerAs: 'ctrl'
        })

        .state('tictac', {
          url: '/tictac',
          templateUrl: 'templates/tictac.tpl.html',
          controller: 'TicTacController',
          controllerAs: 'TicTacCtrl'
        });

    });
