chrome.extension.sendMessage({}, function(response) {

	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			var count = 0;

			while (document.getElementsByClassName("up").length > 0){
				var element = document.getElementsByClassName("up")[0];
				if (typeof(element) != "undefined") {
					element.click();
					count++;
				}
			}

			if (count > 0) {
				console.log(count + ' up votes for you!');
			}

		}
	}, 10);
});
