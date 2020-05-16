/*jshint esversion: 6*/

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
	if(request.message === "getSelection") {
		let selection = window.getSelection();
		let text = selection.toString();
		sendResponse({
			message: text,
			meta: selection,
			success: (text.length > 2)? true : false
		});
	}
});
