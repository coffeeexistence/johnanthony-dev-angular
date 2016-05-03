angular
  .module( 'app', [ 'ngMaterial', 'ui.router', 'ngSanitize'] )
    .config(function($stateProvider, $urlMatcherFactoryProvider, $sceDelegateProvider){

      $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        "https://www.youtube.com/embed/**"
      ]);

      $urlMatcherFactoryProvider.strictMode(false);
      $stateProvider
        .state('home', {
          url: '',
          template: 'I am home.'
        })

        .state('portfolio', {
          url: '/portfolio',
          templateUrl: '/templates/portfolio.html',
          controller: 'PortfolioController',
          controllerAs: 'ctrl'
        });
    });
