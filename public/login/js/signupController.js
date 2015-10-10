/**
 * Created by anmolgupta on 06/10/15.
 */
app.controller('signupController',['$scope','$http',function($scope,$http){


    $scope.signup = function(){

        $http.post('/login/signup',{email: $scope.email, password:$scope.password}).then(function(data){
            console.log("success"+JSON.stringify(data));
        },
        function(err){
            console.log("error"+JSON.stringify(err));
            $scope.error = true;
        });
    }

}]);