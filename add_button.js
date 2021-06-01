const json = '{"translations": {"en" : "Show image", "fr" : "Afficher l\'image", "es" : "Mostrar imagen","zh": "显示图片"}}';
const data = JSON.parse(json);

function isHidden(el) {
    return (el.offsetParent === null)
}

var checkExist = setInterval(function() {
  if (document.querySelector('div.fwCBrd')) {
    let div_array = document.querySelectorAll('div.fwCBrd');
    if (!isHidden(div_array[0])) {
      var anchor = div_array[0];
    } else if (!isHidden(div_array[1])) {
      var anchor = div_array[1];
    }
  if (!anchor.querySelector("div#extension-show-image-div")) {
    var images = document.querySelectorAll('img.n3VNCb');
    if (!isHidden(images[0])) {
      var image = images[0];
    } else if (!isHidden(images[1])) {
      var image = images[1];
    }
    var show_image_div = document.createElement("div");
    show_image_div.id = "extension-show-image-div";
    show_image_div.className = "dJcyOc";
    var show_image_span = document.createElement("span");
    show_image_span.id = "extension-show-image-span";
    var language = document.querySelector('html').lang;
    show_image_span.textContent = data.translations[language] || "Show image";
    show_image_span.className = "pM4Snf";
    show_image_div.appendChild(show_image_span);
    anchor.appendChild(show_image_div);
    document.querySelector("#extension-show-image-div").addEventListener("click", (event) => {
      var image_url = image.src;
      browser.runtime.sendMessage({
        url: image_url
      });
    })
   }
 } else if (document.querySelector('div.fwCBrd')) {
   let div_array = document.querySelectorAll('div.fwCBrd');
   if (!isHidden(div_array[0])) {
     var anchor = div_array[0];
   } else if (!isHidden(div_array[1])) {
     var anchor = div_array[1];
   }
 if (!anchor.querySelector("div#extension-show-image-div")) {
   var images = document.querySelectorAll('img.n3VNCb');
   if (!isHidden(images[0])) {
     var image = images[0];
   } else if (!isHidden(images[1])) {
     var image = images[1];
   }
   var show_image_div = document.createElement("div");
   show_image_div.id = "extension-show-image-div";
   show_image_div.className = "dJcyOc";
   var show_image_span = document.createElement("span");
   show_image_span.id = "extension-show-image-span";
   var language = document.querySelector('html').lang;
   show_image_span.textContent = data.translations[language] || "Show image";
   show_image_span.className = "pM4Snf";
   show_image_div.appendChild(show_image_span);
   anchor.appendChild(show_image_div);
   document.querySelector("a.eHAdSb").href = image.src;
   document.querySelector("#extension-show-image-div").addEventListener("click", (event) => {
     var image_url = image.src;
     browser.runtime.sendMessage({
       url: image_url
     });
   })
  }
}
}, 100);
