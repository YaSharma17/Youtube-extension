chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    if (tab.url.includes('youtube.com/watch')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: playVideo
      });
    } else {
      chrome.tabs.query({}, (tabs) => {
        for (let t of tabs) {
          if (t.url.includes('youtube.com/watch')) {
            chrome.scripting.executeScript({
              target: { tabId: t.id },
              func: pauseVideo
            });
          }
        }
      });
    }
  });
  
  chrome.windows.onFocusChanged.addListener((windowId) => {
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
      chrome.tabs.query({ url: "*://*.youtube.com/watch*" }, (tabs) => {
        for (let tab of tabs) {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: pauseVideo
          });
        }
      });
    } else {
      chrome.windows.get(windowId, { populate: true }, (window) => {
        for (let tab of window.tabs) {
          if (tab.url.includes('youtube.com/watch')) {
            chrome.scripting.executeScript({
              target: { tabId: tab.id },
              func: playVideo
            });
            break;
          }
        }
      });
    }
  });
  
  function playVideo() {
    const video = document.querySelector('video');
    if (video) video.play();
  }
  
  function pauseVideo() {
    const video = document.querySelector('video');
    if (video) video.pause();
  }
  