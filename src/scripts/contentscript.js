import ext from "./utils/ext";

const ID = "github-tellmewhenitcloses-button"

ext.runtime.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      const button = document.getElementById(ID)

      // Exit early if button already exists
      if (button !== null) { return }

      // Grab notification element on page
      const threadSubscriptionStatus = document.getElementsByClassName("thread-subscription-status")[0];

      const openLink = function() {
        window.open("https://tellmewhenitcloses.com?url=" + location.href);
      };

      const tellMeWhenButton = document.createElement("button");
      tellMeWhenButton.className = "btn btn-sm";
      tellMeWhenButton.id = ID;
      tellMeWhenButton.style.width = '100%';
      tellMeWhenButton.style.marginBottom = '10px';
      tellMeWhenButton.onclick = openLink;
      tellMeWhenButton.innerText = "Tell Me When It Closes";

      // Stick button in-front of all child elements of notifications
      threadSubscriptionStatus.parentNode.insertBefore(tellMeWhenButton, threadSubscriptionStatus.previousSibling);
    }
  }, 10);
});
