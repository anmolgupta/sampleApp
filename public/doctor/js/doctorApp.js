/**
 * Created by anmolgupta on 07/10/15.
 */
var app = angular.module('doctorApp',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: './doctor/partials/home.html',
            }).
            when('/add', {
                templateUrl: './doctor/partials/addAssistants.html',
                controller: 'addAssistantsController'
            }).
            when('/show', {
                templateUrl: './doctor/partials/showAssistants.html',
                controller: 'showAssistantsController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);