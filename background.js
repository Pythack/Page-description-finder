console.log("Connected");

function listener(message) {
  browser.tabs.create({
    url:message.url
  });
}

browser.runtime.onMessage.addListener(listener)
