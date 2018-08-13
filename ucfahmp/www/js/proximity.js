function proximity (){
qProximity(app_array);
}

function qProximity(any_array) {
	myPos=current_position.getLatLng();
	for (var i=0, i<any_array.length; i++) {
		qPos=any_array[i].getLatLng();
		var proximity=getDistanceFromLatLngInM(qPos.lat,qPos.lng,myPos.lat,myPos.lng);
		if (proimity <=40) {
			any_array[i].setIcon(testMarkerGreen);
		} else {
			any_array[i].setIcon(testMarkerRed);
		}
	}
}
