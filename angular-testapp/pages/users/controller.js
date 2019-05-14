app.controller('UsersController', ['$scope', 'UsersService', '$uibModal', '$state', function ($scope, UsersService, $uibModal, $state) {

  var _this = this;

  $scope.submitForm = function (data, event) {
    if (event && event.target) {
      var form = event.target.closest('form')
      if (!form || !form.checkValidity || !form.checkValidity() || !data) return;
      UsersService.post(data, function (data) {
        if (data) $state.go('users')
      })
    }
  };

  $scope.search = function (param) {
    var param = {};
    if ($scope.searchFilter) param.name = $scope.searchFilter;
    console.log(param, $scope.searchFilter)
    _this.getData(param)
  }

  _this.getData = function (param) {
    UsersService.get(param, function (data) {
      _this.users = data;
      $scope.users = data
    })
  }

  $scope.$on('$viewContentLoaded', function readyToTrick() {
    _this.getData()
  });

}]);