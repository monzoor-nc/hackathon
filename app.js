/**
 *
 * Created by adib on 9/13/14.
 */
var app = angular.module("sampleApp", ["firebase"]);
app.controller("SampleCtrl", function($scope, $firebase) {
    var ref = new Firebase("https://designly.firebaseio.com/designly");
    var sync = $firebase(ref);

    var markers = [];
    // download the data into a local object
    var syncObject = sync.$asObject();
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "data");

    $scope.addMarker = function(){
        //$scope.data.markers.push($scope.marker);
        //$scope.data.markers.push($scope.marker);
        var markers = $scope.data.markers || [];

        markers.push($scope.marker);
        $scope.data.markers = markers;

        console.log($scope.data.markers);
    }
});
