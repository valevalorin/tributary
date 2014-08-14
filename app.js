(function(){
    buffer = "Congrations!";
    var app = angular.module('tributary', [ ]);
    app.controller('TribController', function(){
        this.currentPlayer = "yt";
        track = {
          title: "Watsky - All That I",
          provider: "YT",
          link: "https://youtube.com/?v=qpwoeuqpw",
          active: false
        };
        this.queue = [];
        for(var i = 0; i < 12; i++)
        {
            trackbuff = JSON.parse(JSON.stringify(track));
            trackbuff.title = trackbuff.title + i;
            console.log('added');
            this.queue.push(trackbuff);
        }
        this.queue[0].active = true;

    });
})();
