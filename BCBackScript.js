(function(){
    console.log('Found bandcamp!');

    //Check to make sure this is in the extension not just around
    if(!(location.href.indexOf("?thisistrib=true") > -1))
        return;



    //Send to extension
    var myport = chrome.runtime.connect({name: 'ContentToTrib'});
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
    });
/*
    //Receive from extension
    chrome.runtime.onConnect(function(port){
       console.assert(port.name == "TribToContent");
       port.onMessage.addListener(function(msg){
          if(msg.method = 'click')
          {
              document.getElementById('big_play_button').click();
          }
       });
    });*/

})();