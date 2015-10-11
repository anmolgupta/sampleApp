/**
 * Created by anmolgupta on 07/10/15.
 */
app.controller('addAssistantsController',['$scope','$http','$window','$filter','$modal',
    function($scope,$http,$window,$filter,$modal){

    $scope.assistantName = [];
    $scope.getArray = function(num){
        var retVal = [];
        for(var i = 1;i<=num;i++)
            retVal[i-1] = i;

        return retVal;
    }

    $scope.addAssistants = function(){

        $scope.assistants = [];

        console.log($scope.assistantName);

        for(var i = 0; i < $scope.numberOfAssistantsToBeAdded; i++){

            if(!$scope.assistantName[i]) {

                $window.alert('Name have been left blank');
                return;
            }

            $scope.assistants.push({name:$scope.assistantName[i]});
        }

        $scope.selectedAssistant = $scope.assistants[0]
        $scope.modalPopup = $modal.open({scope: $scope, templateUrl:'./doctor/partials/manageAssistant1.html',show:true})
    }


    $http.get('/doctor/getDefaultPreference').then(function(data){

        console.log(JSON.stringify(data.data));
        $scope.defaultPermissionSet = data.data;
    },function(err){

    })

    $scope.submit = function(){
        console.log(JSON.stringify($scope.defaultPermissionSet));

        if(!$filter('checkForAnyTrueValuePresent')($scope.selectedAssistant.permission)){
            $window.alert('Select some Permission Set')
            return;
        }

        var index = $scope.assistants.indexOf($scope.selectedAssistant);
        console.log(index)
        if(index == $scope.assistants.length) {

            $scope.modalPopup.dismiss();

            $http.post('/doctor/addAssistants',$scope.assistants).then(function(data){



            },function(err){

            })

        }else
            $scope.selectedAssistant = $scope.assistants[++index];
    }

    $scope.selectAssistant = function(assistant){
        console.log(JSON.stringify(assistant));

        if(!assistant.permission){
            assistant.permission = angular.copy($scope.defaultPermissionSet);
        }


        console.log(JSON.stringify(assistant));
    }
}]);