(function(){
    buffer = "Congrations!";
    var app = angular.module('tributary', [ ]).config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([ "http://bandcamp.com/**",
        "http://*.bandcamp.com/**"]);
    });
    app.controller('TribController', function($scope){
        //Initialize app

        $scope.play = false;
        this.currentPlayer = "bc";
        track = {
            title: "Evan Awake - Discovery",
            provider: "BC",
            link: "http://bandcamp.com/EmbeddedPlayer/album=3537911480/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1241010586/transparent=true/?thisistrib=true",
            active: false
        };
        this.queue = [];
        this.queue.push(track);
        newtrack = {
            title: "Evan Awake - Open Up",
            provider: "BC",
            link: "http://bandcamp.com/EmbeddedPlayer/album=3537911480/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=1298998539/transparent=true/?thisistrib=true",
            active: false
        };
        this.queue.push(newtrack);
        this.activeTrack = this.queue.shift();

        $('#tribTrackTitle').ellipsis();
        //Receive from content script

        chrome.runtime.onConnect.addListener(function(port) {
            console.assert(port.name == "Tributary");
            console.log("asserted");

            port.onMessage.addListener(function(msg){
                if(msg.method == "iniplay?")
                {
                    console.log("recieved message: play is "+$scope.play);
                    port.postMessage({method: 'iniplay?', value: $scope.play})
                }
            });
            $scope.clickButton = function () {
                console.log("button clicked");
                $scope.play = !$scope.play;
                port.postMessage({method: "click"})
            };

        });
       /* $scope.clickButton = function () {
            console.log("outside");
        };*/

    });
})();