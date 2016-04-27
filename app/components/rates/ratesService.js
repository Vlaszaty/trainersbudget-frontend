/**
 * Created by vlaszaty on 16-4-16.
 */
angular.module('ratesService', []).
  service('ratesService', function($http, API) {

    var ratesAPI = {};

    this.getAllRates = function() {
      return $http({
        method: 'GET',
        url: API + '/rates'
      });
    }

    this.deleteRate = function(id) {
      return $http({
        method: 'DELETE',
        URL: API + '/rates'

      })
    }
  });