'use strict';

angular.module('XXXX').factory('apiConsumer', [ '$http', '$q',
	function($http, $q) {
		var obj = {};

		function _requestInfo(url) {
			var deferred = $q.defer();

			$http.get(url)
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.resolve(err);
				});

			return deferred.promise;
		}

		obj.apiName = {
			getInfo: function (item) {
				var url = '/api/url';

				return _requestInfo(url);			
			}
		};

		return obj;
	}
]);