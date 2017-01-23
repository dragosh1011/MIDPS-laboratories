'use strict';

angular.module('app')
  .controller('TeamsCtrl', function($scope, $filter) {
    $scope.dataTableThead = [
      {
        name: 'name',
        label: 'name',
        sortable: true
      },
      {
        name: 'location',
        label: 'location',
        sortable: true
      },
      {
        name: 'founded',
        label: 'founded',
        sortable: true
      },
      {
        name: 'founder',
        label: 'founder',
        sortable: true
      }];
    $scope.advancedDataTableThead = angular.copy($scope.dataTableThead);
    $scope.dataTableTbody = [
      {
        id: 1,
        dessert: 'Frozen yogurt',
        calories: 159,
        fat: 6.0,
        comments: 'Lorem ipsum'
      },
      {
        id: 2,
        dessert: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        comments: 'Lorem ipsum',
        lxDataTableDisabled: true
      },
      {
        id: 3,
        dessert: 'Eclair',
        calories: 262,
        fat: 16.0,
        comments: 'Lorem ipsum'
      }];

    $scope.$on('lx-data-table__select', updateActions);
    $scope.$on('lx-data-table__unselect', updateActions);
    $scope.$on('lx-data-table__sort', updateSort);

    ////////////

    function updateActions(_event, _selectedRows)
    {
      $scope.selectedRows = _selectedRows;
    }

    function updateSort(_event, _column)
    {
      $scope.dataTableTbody = $filter('orderBy')($scope.dataTableTbody, _column.name, _column.sort === 'desc' ? true : false);
    }
    $scope.dataTableThead = [
      {
        name: 'name'
      },
      {
        name: 'location'
      },
      {
        name: 'founded'
      },
      {
        name: 'founder'
      }];
    $scope.teams = [
      {
        name: 'test',
        location: 'test',
        founded: 'test',
        founder: 'test'
      },
      {
        name: 'test',
        location: 'test',
        founded: 'test',
        founder: 'test'
      },
      {
        name: 'test',
        location: 'test',
        founded: 'test',
        founder: 'test'
      }
    ]

  });
