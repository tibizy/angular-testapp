app.service('CommentsService', ['$http', function ($http) {
  this.url = "http://jsonplaceholder.typicode.com/posts"
  this.get = function (param, callback, errCallback) {
    $http({
      method: 'GET',
      url: this.url + "/" + param.post_id + "/comments",
    }).then(function successCallback(response) {
      if (callback) callback(response.data)
    }, function errorCallback(response) {
      if (errCallback) errCallback(response.data)
    });
  }
  this.post = function (param, callback, errCallback) {
    $http({
      method: 'POST',
      param: param,
      url: this.url + "/" + param.post_id + "/comments"
    }).then(function successCallback(response) {
      if (callback) callback(response.data)
    }, function errorCallback(response) {
      if (errCallback) errCallback(response.data)
    });
  }
}])