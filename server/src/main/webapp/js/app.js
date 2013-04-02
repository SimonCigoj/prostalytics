'use strict';

/* App Module */

angular.module('prostalytic', []).

    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('./patients', {templateUrl: './partials/patient-list.html',   controller: PatientListCtrl}).
            //when('/phones/:phoneId', {templateUrl: 'partials/phone-detail.html', controller: PhoneDetailCtrl}).
            otherwise({redirectTo: './patients'});

        $locationProvider.html5Mode(true);
    }]);
