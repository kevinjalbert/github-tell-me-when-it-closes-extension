import ext from "./utils/ext";

// For when page transitions occur
ext.webNavigation.onHistoryStateUpdated.addListener(
   function (event) {
      ext.tabs.executeScript(event.tabId, {
        file: "scripts/contentscript.js"
      });
   },
   { url: [{urlMatches: 'github\.com\/.*?\/.*?\/(issues|pull)'}] }
);

// For when the page first loads (refresh)
ext.webNavigation.onCompleted.addListener(
   function (event) {
      ext.tabs.executeScript(event.tabId, {
        file: "scripts/contentscript.js"
      });
   },
   { url: [{urlMatches: 'github\.com\/.*?\/.*?\/(issues|pull)'}] }
);
