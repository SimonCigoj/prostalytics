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

function PatientFormCtrl($scope, $http) {

    var id = getURLParameter('id');

    $http.get('/rest-mock/patient-' + id + '.json').success(function(data) {
        $scope.patient = data;
    });

    $scope.postFormData = function(form) {
        form.submitted = true;
        if (form.$valid) {
            alert("posting: " + angular.toJson($scope.patient));
        } else {
            alert("incomplete");
        }

    };

    $scope.validateField = function(form, field) {
        return (!field.$valid && (field.$dirty || form.submitted))
    };

    $scope.dateOptions = {
        dateFormat: "yy-mm-dd"
    };

    $scope.activeTab = 'personal';
    $scope.switchTab = function(tabName, valid) {

        console.log($scope.personalForm)
        console.log($scope.personalForm.patient_surname)
        //$scope.personalForm.patient_surname.$error.required=true;
        $scope.personalForm.patient_surname.required=true;



        if(valid) {
            $scope.activeTab = tabName;
        } else {
            alert("invalid form");
        }
    }

    //angular.element(PatientFormCtrl).scope()
    //angular.element(personalForm).scope().personal_form.patient_surname.$error.required=true;


    //$scope.personalForm.patient_surname.$error.required=true;


    window.scope = $scope;

}

function LoginFormCtrl($scope, $http) {

}