app.service('threadService', function () {
    var firebaseRef = new Firebase("https://gamebook.firebaseio.com/");
    
    
    
    
    this.getThreads = function () {
        return new Firebase(fb.url + 'threads');
    }
    
    this.getThread = function (threadId) {
        return new Firebase(fbUrl + '/threads' + threadId);
    }
})