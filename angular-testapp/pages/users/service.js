app.service('UsersService', ['$http', function ($http) {
  this.url = "http://jsonplaceholder.typicode.com/users"
  this.get = function (param, callback, errCallback) {
    $http({
      method: 'GET',
      params: param,
      url: this.url,
    }).then(function successCallback(response) {
      if (callback) callback(response.data)
    }, function errorCallback(response) {
        if (errCallback) errCallback(response.data)
    });
  }
  this.post = function (param, callback, errCallback) {
    $http({
      method: 'POST',
      params: param,
      url: this.url
    }).then(function successCallback(response) {
        if (callback) callback(response.data)
    }, function errorCallback(response) {
        if (errCallback) errCallback(response.data)
    });
  }
}])