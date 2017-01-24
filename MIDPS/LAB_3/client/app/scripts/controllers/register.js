'use strict';

angular.module('app')
  .controller('RegisterCtrl', function($scope, teamService) {
    $scope.team = {
      name: ''
    };

    $scope.submit = function() {
      teamService.registerTeam($scope.team);
      $scope.team = {};
      return false;
    }

  });
