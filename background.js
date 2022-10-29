function listener(message) { // Create new tab with image
  browser.tabs.create({
    url:message.url
  });
}

browser.runtime.onMessage.addListener(listener)
