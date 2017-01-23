'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ui.router',
    'ngAnimate',
    'lumx'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/404');

    $stateProvider
      .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
      })
      .state('login', {
        url: '/login',
        parent: 'base',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .state('menu', {
        url: '',
        parent: 'base',
        templateUrl: 'views/menu.html',
      })
      .state('teams', {
        url: '/teams',
        parent: 'menu',
        templateUrl: 'views/teams.html',
        controller: 'TeamsCtrl'
      })
      .state('team-details', {
        url: '/teams/:teamId',
        parent: 'menu',
        templateUrl: 'views/team-details.html'
      })
      .state('register', {
        url: '/register',
        parent: 'menu',
        templateUrl: 'views/registration.html'
      })
      .state('feedback', {
        url: '/feedback',
        parent: 'menu',
        templateUrl: 'views/feedback.html',
        controller: 'FeedbackCtrl'
      })
      .state('404', {
        url: '/404',
        templateUrl: '404.html'
      });

  });
