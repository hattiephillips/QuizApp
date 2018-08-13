
//basic leaflet map
    var mymap = L.map('mapid').setView([51.505, -0.09], 13);
    // load the tiles
    L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets'
    }).addTo(mymap);


  
//Custom Icons
//Custom Icon Code- the following links incorporate the CSS required for custom icon creation -->
<link rel="stylesheet" href=" ionicons.min.css">
<link rel="stylesheet" href="leaflet.awesome-markers.css">
< src="leaflet.awesome-markers.js">
var testMarkerPink = L.AwesomeMarkers.icon({
icon: 'play',
markerColor: 'pink'
});

