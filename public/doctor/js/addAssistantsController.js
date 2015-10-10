/**
 * Created by anmolgupta on 07/10/15.
 */
app.controller('addAssistantsController',['$scope','$http','$window',function($scope,$http,$window){

    $scope.assistantName = [];
    $scope.getArray = function(num){
        var retVal = [];
        for(var i = 1;i<=num;i++)
            retVal[i-1] = i;

        return retVal;
    }

    $scope.addAssistants = function(){

        var assistantNames = [];

        console.log($scope.assistantName);

        for(var i = 0; i < $scope.numberOfAssistantsToBeAdded; i++){
            if(!$scope.assistantName[i]) {
                console.log($scope.assistantName[name]);
                $window.alert('Name have been left blank');
                return;
            }

            assistantNames.add($scope.assistantName[i]);
        }

        $http.post('/doctor/addAssistant',{assistantNames:assistantNames}).then(function(data){

        },function(err){

        });

        //TODO:open model popup
    }
}]);