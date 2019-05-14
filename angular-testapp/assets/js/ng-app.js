app = angular.module('ngApp', ['ui.bootstrap', 'ui.router']);
var pages_path = "/pages";

app.config(['$stateProvider', '$locationProvider', '$compileProvider', function ($stateProvider, $locationProvider, $compileProvider) {

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  $stateProvider.state({
    name: 'users', url: '/', templateUrl: pages_path + '/users/index.html', controller: 'UsersController'
  });

  $stateProvider.state({
    name: 'users.new', url: 'users/new', templateUrl: pages_path + '/users/form.html',
  });

  $stateProvider.state({
    name: 'posts', url: '/users/:user_id/posts', templateUrl: pages_path + '/posts/index.html', controller: 'PostsController'
  });

  $stateProvider.state({
    name: 'posts.new', url: '/new', templateUrl: pages_path + '/posts/form.html',
  });

  $stateProvider.state({
    name: 'posts.comments', url: '/:post_id/comments', templateUrl: pages_path + '/comments/index.html', controller: 'CommentsController'
  });

  $stateProvider.state({
    name: 'albums', url: '/users/:user_id/albums', templateUrl: pages_path + '/albums/index.html', controller: 'AlbumsController'
  });

  $stateProvider.state({
    name: 'albums.new', url: '/new', templateUrl: pages_path + '/albums/form.html',
  });


  // use the HTML5 History API
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: true
  });

}]);