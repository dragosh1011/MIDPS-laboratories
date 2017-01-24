'use strict';

const apiLink = 'http://localhost:3003';

angular.module('app')
  .service('teamService', function($http, $rootScope, LxNotificationService) {
    this.teams = [];
    this.retrieveTeams = () => {
      $http.get(apiLink + '/teams').then(response => {
        this.teams = response.data.teams;
        $rootScope.$broadcast('TEAMS_RETRIEVED');
      }).catch(error => {
        LxNotificationService.error('Error on get teams list');
        throw error
      })
    };
    this.retrieveTeams();

    this.registerTeam = (data) => {
      const dataObj = {
        "team": data
      };
      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      $http.post(apiLink + '/teams', dataObj).then(() => {
        this.retrieveTeams()
      }).catch(error => {
        LxNotificationService.error('Error on register team');
        throw error
      })
    }
  });
