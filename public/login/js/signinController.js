/**
 * Created by anmolgupta on 06/10/15.
 */
app.controller('signinController',['$scope','$http',function($scope,$http){

    $scope.login = function(){

        $http.post('/login/signin',{email:$scope.email,password:$scope.password})
            .then(function success(res){


            },function error(res){
                $scope.error = true;

            });
    }
}]);