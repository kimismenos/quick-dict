/*jshint esversion: 6*/
// https://www.dict.cc/?s=gast+zugang

let queryField = document.getElementById('query-field');
let resultsDiv = document.getElementById('results');
let tempDiv = document.getElementById('temp');
let table = document.getElementById('table');

queryField.addEventListener("change", function () {
	lookUp(this.value);
});

chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, {message: "getSelection"}, function(response) {
		console.log(response);
		if(response.success === true) {
			queryField.value = response.message;
			lookUp(response.message);
		}
	});
});

function lookUp(query) {
	let url = 'https://www.dict.cc/?s=' + query.trim();
	console.log(url);
	httpGetAsync(url, parseData);
}

function httpGetAsync(url, callback) {
	var request = new XMLHttpRequest();
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200)
			callback(request.responseText);
	};
	request.open("GET", url, true); // true for asynchronous
	request.send(null);
}

function parseData(data) {
	tempDiv.innerHTML = data;
	tempDiv.innerHTML = document.getElementById('maincontent').innerHTML;
	console.log(tempDiv.getElementsByTagName('table')[2]);
	table.innerHTML = tempDiv.getElementsByTagName('table')[2].innerHTML;
	tempDiv.innerHTML = '';
	let columns = document.getElementsByClassName('td7nl');
	for(let col of columns) {
		col.colSpan = 2;
	}
	let children = table
		.children[0]	// tbody
		.children[1]	// 2. tr
		.children[0]	// 		+ td
		.children[0]	//			+ table
		.children[0]	//				+ tbody
		.children;		//					+ tbody.children

	for(let child of children) {
		child.children[0].innerHTML = '';
	}

}
