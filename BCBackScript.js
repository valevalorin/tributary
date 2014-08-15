(function(){
    console.log('Found bandcamp!');

    //Check to make sure this is in the extension not just around
    if(!(location.href.indexOf("?thisistrib=true") > -1))
        return;



    //Send to extension
    var id;

    var myport = chrome.runtime.connect({name: 'Tributary'});
    myport.postMessage({method: "iniplay?"});
    console.log('message sent');
    myport.onMessage.addListener(function(msg){
       if(msg.method == "iniplay?")
       {
           if(msg.value == true) {
               console.log("I will play");
               document.getElementById('big_play_button').click();
           }
           else
               console.log('not playing bro: '+msg.value);
       }
       else if(msg.method == 'click')
       {
            console.log("play on click");
            document.getElementById('big_play_button').click();
       }
    });

})();