function loadMap(address) {
	var zoom = 9;
	/*if (document.getElementById("currentLocation").checked) {
		zoom = 9;
	}*/
	var size = "200x200";
	var maptype = "roadmap";
	var markers = "color:green|" + proccessAddress(address);
	var sensor = "false";
	var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + proccessAddress(address);
	
	if (zoom > 0) {
		url += "&zoom=" + zoom;
	}
	if (size) {
		url += "&size=" + size;
	}
	if (maptype) {
		url += "&maptype=" + maptype;
	}
	if (markers) {
		url += "&markers=" + markers;
	}
	
	url += "&sensor=" + sensor;
			
	document.getElementById("map").innerHTML = "<img src='" + url + "'></img>";
	
}

function proccessAddress(address) {
	address = encodeURIComponent(address);
	return address;
}