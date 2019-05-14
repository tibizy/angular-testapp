app.controller('PostsController', ['$scope', 'PostsService', '$state', '$stateParams', function ($scope, PostsService, $state, $stateParams) {

  var _this = this;

  $scope.submitForm = function (data, event) {
    if (event && event.target) {
      var form = event.target.closest('form')
      if (!form || !form.checkValidity || !form.checkValidity() || !data) return;
      data.user_id = $stateParams.user_id
      PostsService.post(data, function (data) {
        if (data) $state.go('posts')
      })
    }
  };

  _this.getData = function (param) {
    PostsService.get(param, function (data) {
      $scope.posts = data
    })
  }

  $scope.$on('$viewContentLoaded', function readyToTrick() {
    $scope.user_id = $stateParams.user_id
    _this.getData({ user_id: $scope.user_id})
  });

}]);