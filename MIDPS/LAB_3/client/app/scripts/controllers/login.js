'use strict';

angular.module('app')
  .controller('LoginCtrl', function($scope, $location) {

    $scope.submit = function() {

      $location.path('/teams');

      return false;
    }

  });
