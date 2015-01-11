var blog = angular.module('blog', []);

function mainController($scope, $http) {
  $scope.formData = {};

// CRUD R
  $http.get('/blog/posts')
       .success(function(data){
          $scope.posts = data;
          console.log(data);
       })
       .error(function(data){
          console.log('Error: ' + data);
       });

// CRUD C
  $scope.createPost = function() {
    $http.post('/blog/posts', $scope.formData)
         .success(function(data){
            $scope.formData = {};
            $scope.posts = data;
            console.log(data);
         })
         .error(function(data){
            console.log('Error: ' + data);
         });
       };

// CRUD D
  $scope.deletePost = function(id){
    $http.delete('/blog/posts/' + id)
         .success(function(data){
            $scope.posts = data;
            console.log(data);
         })
         .error(function(data){
            console.log('Error: ' + data);
         });
  };
}