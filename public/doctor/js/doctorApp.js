/**
 * Created by anmolgupta on 07/10/15.
 */
var app = angular.module('doctorApp',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/add', {
                templateUrl: './doctor/partials/addAssistants.html',
                controller: 'addAssistantsController'
            }).
            otherwise({
                redirectTo: '/add'
            });
    }]);