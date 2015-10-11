/**
 * Created by anmolgupta on 06/10/15.
 */
app.controller('signinController',['$scope','$http','$window',function($scope,$http,$window){

    $scope.login = function(){

        $http.post('/login/signin',{email:$scope.email,password:$scope.password})
            .then(function success(res){

                console.log(JSON.stringify(res));
                $window.location.href='/doctor';

            },function error(res){
                $scope.error = true;

            });
    }
}]);