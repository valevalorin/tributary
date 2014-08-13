function queueClick(info, tab) {
    console.log("congrations! you done it!");
}

chrome.contextMenus.create({"title": "Tributary Queue", "contexts": ["link"], "onclick": queueClick});