angular.module('ratesController', []).
controller('ratesController', function($scope, ratesService) {
    $scope.ratesList = [];

    ratesService.getRates().success(function (response) {
        $scope.ratesList = response;
    })
});