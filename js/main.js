var request = new XMLHttpRequest();
request.open('GET', '../data/properties.json', true);

request.onreadystatechange = function() {
	if (this.readyState === 4) {
		var data = JSON.parse(this.responseText);
		for (i in data) {
			document.getElementById(i).innerHTML = data[i];
		}
	}
};

request.send();
request = null;