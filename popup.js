function onError(error) {
 console.log(`Error: ${error}`);
}

function onGot(item) {
   var description = item.description || "Problem loading description";
   document.getElementById("description").innerHTML = description;
 }


let getting = browser.storage.sync.get();
getting.then(onGot, onError);

/*function actualize() {
  let getting = browser.storage.sync.get();
  getting.then(onGot, onError);
};

var t=setInterval(actualize,100);*/
