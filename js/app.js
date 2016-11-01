angular.module('internApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    templateUrl: './views/initial-view.html',
    url: '/',
    controller: 'homeCtrl'
  }).state('landing-view', {
    templateUrl: './views/landing-view.html',
    url: '/landing-view',
    controller: 'landingCtrl'
  });
});
