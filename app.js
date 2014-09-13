/**
 *
 * Created by adib on 9/13/14.
 */
var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebase) {
    var ref = new Firebase("https://designly.firebaseio.com/designly");
    var sync = $firebase(ref);

    $scope.markers = [];
    // download the data into a local object
    var syncObject = sync.$asObject();
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "data");

    $scope.addMarker = function(){
        alert('in here')
    }
});
