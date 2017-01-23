'use strict';

angular.module('app')
  .controller('FeedbackCtrl', function($scope) {
    init();
    $scope.submit = function() {
      init();
      return false;
    };

    function init() {
      $scope.email = '';
      $scope.message = '';
    }
  });
