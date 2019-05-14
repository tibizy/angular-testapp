app.service('AlbumsService', ['$http', function ($http) {
  this.url = "http://jsonplaceholder.typicode.com/users"
  this.get = function (param, callback, errCallback) {
    $http({
      method: 'GET',
      url: this.url + "/" + param.user_id + "/albums",
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
      url: this.url + "/" + param.user_id + "/albums",
    }).then(function successCallback(response) {
      if (callback) callback(response.data)
    }, function errorCallback(response) {
      if (errCallback) errCallback(response.data)
    });
  }
}])