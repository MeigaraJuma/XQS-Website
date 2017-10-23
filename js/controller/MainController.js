'use strict'

app.controller('MainController',['$scope',function($scope){
    $scope.menu={
        coffee: 'Coffee',
        chocolate: 'Chocolate',
        FS : 'Food & Snack'
    },
    $scope.coffee={
        espressobased: 'Espresso-Based',
        espressomilk: 'Espresso-Milk',
        classicstyle: 'Classic Style',
        manualbrew: 'Manual Brew'
    };
}]);

function HomeCtrl($scope, $http) {
}

function ProjectCtrl($scope, $http) {
}

function PrivacyCtrl($scope, $http, $timeout) {
}

function AboutCtrl($scope, $http, $timeout) {
}