import ext from "./utils/ext";

ext.runtime.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

      const threadSubscriptionStatus = document.getElementsByClassName("thread-subscription-status")[0];

			const openLink = function() {
        window.location = "https://tellmewhenitcloses.com?url=" + location.href;
			};

			const tellMeWhenButton = document.createElement("button");
      tellMeWhenButton.className = "btn btn-sm";
      tellMeWhenButton.style.width = '100%';
      tellMeWhenButton.style.marginBottom = '10px';
			tellMeWhenButton.onclick = openLink;
			tellMeWhenButton.innerText = "Tell Me When It Closes";

      threadSubscriptionStatus.parentNode.insertBefore(tellMeWhenButton, threadSubscriptionStatus.previousSibling);

		}
	}, 10);
});
