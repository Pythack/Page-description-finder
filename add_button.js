const json = '{"translations": {"en" : "Show image", "fr" : "Afficher l\'image", "ko" : "이미지 표시", "es" : "Mostrar imagen","zh": "显示图片"}}';
const data = JSON.parse(json);

function isHidden(el) { // Check if element is visible
    return (el.offsetParent === null)
}


var checkExist = setInterval(function() {
  var aTags = document.getElementsByTagName("span"); //All spans
  var searchText = "Visit";
  var anchor; //The div where we will place the button
  for (var i = 0; i < aTags.length; i++) {
    if (aTags[i].textContent == searchText && !isHidden(aTags[i])) {
      anchor = aTags[i].parentNode.parentNode.parentNode;
      break;
    }
  }
  if (!anchor.querySelector("div#extension-show-image-div")) {
    var images = document.querySelectorAll('img.KAlRDb');
    var image = null; //The image
    for (var i = 0; i < images.length; i++) {
      if (!isHidden(images[i])) {
        image = images[i];
        break;
      }
    }
    if (image != null) {
    var show_image_div = document.createElement("div");//Create div
    show_image_div.id = "extension-show-image-div";
    show_image_div.className = anchor.childNodes[1].firstChild.className;//Copy style of "Visit" button
    var show_image_span = document.createElement("span");//Create span
    show_image_span.id = "extension-show-image-span";
    var language = document.querySelector('html').lang.split("-")[0];
    show_image_span.textContent = data.translations[language] || "Show image";//Set language
    show_image_span.className = anchor.childNodes[1].firstChild.firstChild.className;//Copy style of "Visit" button
    show_image_div.appendChild(show_image_span);
    anchor.appendChild(show_image_div);//Add the button to the page
    document.querySelector("#extension-show-image-div").addEventListener("click", (event) => {//Setup the onclick event to open image tab
      var image_url = image.src;
      browser.runtime.sendMessage({
        url: image_url
      });
    })
  }
  }
}, 100);
