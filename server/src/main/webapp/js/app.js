'use strict';

/* App Module */

angular.module('prostalytic', []).

    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {templateUrl: '/partials/login.html',   controller: LoginFormCtrl}).
            when('/browse', {templateUrl: '/partials/patient-list.html',   controller: PatientListCtrl}).
            when('/form', {templateUrl: '/partials/form.html',   controller: PatientFormCtrl}).
            //when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
            otherwise({redirectTo: '/'});

            //$locationProvider.html5Mode(true);
    }]);
