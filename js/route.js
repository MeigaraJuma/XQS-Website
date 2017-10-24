app.config(['$routeProvider', function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        //controller: HomeCtrl,
        //activetab: 'projects'
      })
      .when('/project/:projectId', {
        templateUrl: function(params) { return 'pages/' + params.projectId + '.html'; },
        controller: ProjectCtrl,
        //activetab: 'projects'
      })
      .when('/contact', {
        templateUrl: 'pages/contact.html',
        //controller: MenuCtrl,
        //activetab: 'menu'
      })
      .when('/about', {
        templateUrl: 'pages/about.html',
        //controller: AboutCtrl,
        //activetab: 'about'
      })
      .otherwise({ redirectTo: '/' });
    }]);

app.run(['$rootScope', '$http', '$browser', '$timeout', "$route", function($scope, $http, $browser, $timeout, $route) {
    $scope.$on("$routeChangeSuccess", function(scope, next, current) {
    $scope.part = $route.current.activetab;
    });
        // onclick event handlers
    $scope.showForm = function() {
        $('.contactRow').slideToggle();
    };
    $scope.closeForm = function() {
        $('.contactRow').slideUp();
    };
    // save the 'Contact Us' form
    $scope.save = function() {
        $scope.loaded = true;
        $scope.process = true;
        $http.post('sendemail.php', $scope.message).success(function() {
        $scope.success = true;
        $scope.process = false;
          });
    };
}]);


app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('!');
}]);