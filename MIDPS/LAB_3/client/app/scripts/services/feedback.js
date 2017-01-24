'use strict';

angular.module('app')
  .service('feedbackService', function($http, LxNotificationService) {
    this.feedback = [];
    this.retrieveFeedback = () => {
      $http.get(apiLink + '/feedback').then(response => {
        this.feedback = response.data.feedback;
        $rootScope.$broadcast('Feedback_RETRIEVED');
      }).catch(error => {
        LxNotificationService.error('Error on get feedback list');
        throw error
      })
    };
    this.retrieveFeedback();

    this.registerFeedback = (data) => {
      const dataObj = {
        feedback: data
      };
      $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
      $http.post(apiLink + '/feedback', dataObj).then(() => {
        this.retrieveFeedback()
      }).catch(error => {
        LxNotificationService.error('Error on register team');
        throw error
      })
    }
  });
