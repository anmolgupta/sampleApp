/**
 * Created by anmolgupta on 10/10/15.
 */
app.filter('checkForAnyTrueValuePresent',function(){

    return function(obj){
        var found = false;

        for(var i = 0; i< obj.length; i++){

            for(var key in obj[i].permission) {

                if(obj[i].permission[key])
                    found = true;
            }

        }

        return found;
    }
});
