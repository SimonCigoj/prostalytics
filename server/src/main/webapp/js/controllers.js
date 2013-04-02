'use strict';

/* Controllers */
function PatientListCtrl($scope, $http) {

    $http.get('./rest-mock/patients.json').success(function(data) {
        $scope.patients = data;
    });

    /*$scope.openForm = function(id){
        window.location='#{ctxRoot}form.jsf?id=' + id;
    } */
}