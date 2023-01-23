browser.contextMenus.create({
  id: "scan_url_description",
  title: "Get target page's description",
  contexts: ["link"]
});

function get_request(url, callback) {
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //alert('responseText: ' + xmlhttp.responseText);
    try {
        var loc = JSON.parse(xmlhttp.responseText);
        //var headers = xmlhttp.getAllResponseHeaders().toLowerCase();
        //alert(headers['X-Rate-Limit-Remaining']);
    } catch(err) {
        console.warn(err.message + " in " + xmlhttp.responseText);
        return;
    }
    callback(loc);
}
};

xmlhttp.open("GET", url, true);
var authorization = window.btoa("noefavennec@gmail.com:V881RzLWA67lUycIivlY");
xmlhttp.setRequestHeader("Authorization", "Basic " + authorization);
xmlhttp.send();
}

browser.contextMenus.onClicked.addListener(function(info, tab) {
    console.log(info);
    if (info.menuItemId == "scan_url_description") {
      get_request("https://api.urlmeta.org/?url=" + info.linkUrl, (data) => {
        console.log(data);
      });
    };
  });
