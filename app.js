(function(){
    buffer = "Congrations!";
    var app = angular.module('tributary', [ ]);
    app.controller('TribController', function($scope){
        //Initialize app
        $scope.play = true;
        this.currentPlayer = "bc";
        track = {
            title: "Evan Awake - Discovery",
            provider: "BC",
            link: "https://youtube.com/?v=qpwoeuqpw",
            active: false
        };
        $scope.queue = [];
        $scope.queue.push(track);
        $scope.queue[0].active = true;

        $('#tribTrackTitle').ellipsis();
        //Receive from content script
        chrome.runtime.onConnect.addListener(function(port) {
            console.assert(port.name == "ContentToTrib");
            console.log("asserted");
            port.onMessage.addListener(function(msg){
                if(msg.method == "iniplay?")
                {
                    console.log("recieved message: play is "+$scope.play);
                    port.postMessage({method: 'iniplay?', value: $scope.play})
                }
            })
        });

/*        //Send to content script
        this.myport = chrome.runtime.connect({name: "TribToContent"});

        this.clickButton = function() {
          this.play = !this.play;
          this.myport.postMessage({method: "click"})
        };*/
    });
})();