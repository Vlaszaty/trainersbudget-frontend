angular.module('ratesController', []).
controller('ratesController', function($scope, ratesService) {
    $scope.ratesList = [];

    ratesService.getAllRates().success(function (response) {
        $scope.ratesList = response;
    })
});