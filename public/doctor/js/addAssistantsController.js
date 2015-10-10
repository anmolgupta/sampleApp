/**
 * Created by anmolgupta on 07/10/15.
 */
app.controller('addAssistantsController',['$scope','$http','$window','$filter',function($scope,$http,$window,$filter){

    $scope.assistantName = [];
    $scope.getArray = function(num){
        var retVal = [];
        for(var i = 1;i<=num;i++)
            retVal[i-1] = i;

        return retVal;
    }

    $scope.addAssistants = function(){

        //var assistantNames = [];
        //
        //console.log($scope.assistantName);
        //
        //for(var i = 0; i < $scope.numberOfAssistantsToBeAdded; i++){
        //    if(!$scope.assistantName[i]) {
        //        console.log($scope.assistantName[name]);
        //        $window.alert('Name have been left blank');
        //        return;
        //    }
        //
        //    assistantNames.add($scope.assistantName[i]);
        //}
        //
        //$http.post('/doctor/addAssistant',{assistantNames:assistantNames}).then(function(data){
        //
        //},function(err){
        //
        //});

        //TODO:open model popup
        //$modal({scope: $scope, template:'./doctor/partials/manageAssistant.html',show:true})
    }


    $http.get('/doctor/getDefaultPreference').then(function(data){

        console.log(JSON.stringify(data.data));
        $scope.defaultPermissionSet = data.data;
    },function(err){

    })

    $scope.submit = function(){
        console.log(JSON.stringify($scope.defaultPermissionSet));

        if(!$filter('checkForAnyTrueValuePresent')($scope.defaultPermissionSet)){
            $window.alert('Select some Permission Set')
        }
    }


}]);