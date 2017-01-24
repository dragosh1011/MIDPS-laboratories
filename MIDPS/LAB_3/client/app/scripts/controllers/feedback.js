'use strict';

angular.module('app')
  .controller('FeedbackCtrl', function($scope, feedbackService) {
    init();
    $scope.submit = function() {
      feedbackService.registerFeedback({email: $scope.email, message: $scope.message});
      init();
    };

    function init() {
      $scope.email = '';
      $scope.message = '';
    }
  });
