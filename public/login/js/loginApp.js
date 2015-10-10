/**
 * Created by anmolgupta on 06/10/15.
 */
var app = angular.module('loginApp',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: './login/partials/signin.html',
                controller: 'signinController'
            }).
            when('/signup', {
                templateUrl: './login/partials/signup.html',
                controller: 'signupController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);