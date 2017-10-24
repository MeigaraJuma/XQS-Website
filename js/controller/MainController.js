'use strict'

app.controller('MainController',['$scope',function($scope){
    $scope.menu={
        coffee: 'Coffee',
        chocolate: 'Chocolate',
        FS : 'Food & Snack'
    };
}]);


function HomeCtrl($scope, $http) {
}

function ProjectCtrl($scope, $http) {
}

function MenuCtrl($scope, $http, $timeout) {
}

function AboutCtrl($scope, $http, $timeout) {
}