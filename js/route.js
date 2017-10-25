app.config(function($routeProvider) {
      $routeProvider
      .when('/', {
        templateUrl: 'pages/index.html',
        //controller: HomeCtrl,
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
      });
    });

/*app.run(['$rootScope', '$http', '$browser', '$timeout', "$route", function($scope, $http, $browser, $timeout, $route) {
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
*/

app.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true); 
    $locationProvider.hashPrefix('!');
  }]);