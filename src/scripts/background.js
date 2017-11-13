import ext from "./utils/ext";

const doublePageTracker = {};

ext.webNavigation.onHistoryStateUpdated.addListener(
   function (event) {
      if(doublePageTracker[event.url]) {
        ext.tabs.executeScript(event.tabId, {
          file: "scripts/contentscript.js"
        });
        delete doublePageTracker[event.url]
      } else {
        doublePageTracker[event.url] = true;
      }
   },
   { url:   [  {urlMatches: 'github\.com\/.*?\/.*?\/(issues|pull)'}   ] }
);

ext.webNavigation.onCompleted.addListener(
   function (event) {
      ext.tabs.executeScript(event.tabId, {
        file: "scripts/contentscript.js"
      });
   },
   { url:   [  {urlMatches: 'github\.com\/.*?\/.*?\/(issues|pull)'}   ] }
);
