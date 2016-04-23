/**
 * Created by vlaszaty on 16-4-16.
 */
angular.module('ratesService', []).
  factory('ratesService', function($http, API) {

    var ratesAPI = {};

    ratesAPI.getRates = function() {
      return $http({
        method: 'GET',
        url: API + '/rates'
      });
    }

    return ratesAPI;
  });