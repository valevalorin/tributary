(function(){
    buffer = "Congrations!";
    var app = angular.module('tributary', [ ]);
    app.controller('TribController', function(){
        this.message = buffer;
    });
    console.log("somehsit");
})();
