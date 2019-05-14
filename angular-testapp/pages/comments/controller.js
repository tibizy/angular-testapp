app.controller('CommentsController', ['$scope', 'CommentsService', '$state', '$stateParams', function ($scope, CommentsService, $state, $stateParams) {

  var _this = this;

  $scope.submitForm = function (data, event) {
    if (event && event.target) {
      var form = event.target.closest('form')
      if (!form || !form.checkValidity || !form.checkValidity() || !data) return;
      CommentsService.post(data, function (data) {
        if (data) $state.go('comments')
      })
    }
  };

  $scope.sort = function () {
    $scope.order = 'email'
    console.log($scope.order)
  };

  _this.getData = function (param) {
    CommentsService.get(param, function (data) {
      console.log(data)
      $scope.comments = data
    })
  }

  $scope.$on('$viewContentLoaded', function readyToTrick() {
    $scope.user_id = $stateParams.user_id
    $scope.post_id = $stateParams.post_id
    _this.getData({ user_id: $scope.user_id, post_id: $stateParams.post_id })
  });

}]);