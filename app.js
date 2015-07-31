var app = angular.module('rtfmApp', ['firebase', 'ngRoute'])

.constant('fb', {
    url: 'https://gamebook.firebaseio.com/'
});

app.config([function ($routeProvider) {
    $routeProvider
    .when('/threads', {
        templateUrl: 'js/threads.html',
        controller: 'mainController',
        resolve: {
                threadsRef: function(threadsService)
                    return threadsService.getThreads();
                }
    })
    .when('/threads/:threadId', {
        templateUrl: 'js/threadId/threadIdTmpl.html',
        controller: 'threadsCtrl',
        resolve: {
            threadsRef: function($route, threadsService)
                return threadsService.getThread($route.current.params.threadId)
        },
            commentsRef: function(threadsService, $route) {
                return threadsService.getcomments($route.current.params.threadId);
            }
    })
    
    .otherwise ({
        redirectTo: '/threads'
    });
}]);