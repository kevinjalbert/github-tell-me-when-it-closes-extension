import ext from "./utils/ext";
import buildElement from "./utils/buildElement";

const TMWIC_BUTTON_ID = "github-tellmewhenitcloses-button";
const GITHUB_SUBSCRIPT_BUTTON_ID = "thread-subscription-status";
const BUTTON_STYLES = "width: 100%; margin-bottom: 10px; text-align: center;";

ext.runtime.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      const button = document.getElementById(TMWIC_BUTTON_ID);

      // Exit early if button already exists
      if (button !== null) { return }

      // Grab notification element on page
      const threadSubscriptionStatus =
        document.getElementsByClassName(GITHUB_SUBSCRIPT_BUTTON_ID)[0];

      const twmicUrl = "https://tellmewhenitcloses.com?url=" + location.href;

      const tellMeWhenButton = buildElement(`
        <a
          id="${TMWIC_BUTTON_ID}"
          class="btn btn-sm"
          href="${twmicUrl}"
          style="${BUTTON_STYLES}"
        >
          Tell Me When It Closes
        </a>
      `)

      // Stick button in-front of all child elements of notifications
      threadSubscriptionStatus.parentNode.insertBefore(
        tellMeWhenButton,
        threadSubscriptionStatus.previousSibling
      );
    }
  }, 10);
});
