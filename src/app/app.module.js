angular
  .module( 'app', [ 'ngMaterial', 'ui.router', 'ngSanitize'] )
    .config(function($stateProvider, $urlMatcherFactoryProvider, $sceDelegateProvider){

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
