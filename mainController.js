app.controller('mainController', function ($scope, threadsSerice) {
//    $scope.hello = 'hello User!';
    $scope.createThread = function(username,title) {
        $scope.threads.$add({
            username: username,
            title: title
        });
    }
});