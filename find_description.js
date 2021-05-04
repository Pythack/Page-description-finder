
if (document.querySelector('meta[name="description"]')) {
  var description = document.querySelector('meta[name="description"]').content;
} else {
  var description = "No description on this page... ";
}

browser.storage.sync.set({
    description: description
});

function actualize() {
  if (document.querySelector('meta[name="description"]')) {
    var description = document.querySelector('meta[name="description"]').content;
  } else {
    var description = "No description on this page... ";
  }
  browser.storage.sync.set({
      description: description
  });
};

document.addEventListener("visibilitychange", function () {
  if (!document.hidden) {
    actualize();
  }
}, false);
