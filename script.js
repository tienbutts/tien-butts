var map = L.map('map').setView([40.683505, -73.948776], 13); 

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', { 
        maxZoom: 18, 
        id: 'mapbox.streets' 
    }).addTo(map); 

L.marker([40.683505, -73.948776]).addTo(map) 

.bindPopup("<b>This is where I live!</b>").openPopup(); 

L.marker([40.716484, -73.988723]).addTo(map) 

.bindPopup("<b>Best Doughnuts</b>").openPopup(); 

var popup = L.popup(); 

function onMapClick(e) { 
    popup
        .setLatLng(e.latlng) 
        .setContent("You clicked the map at " + e.latlng.toString()) 
        .openOn(map); 
    }

map.on('click', onMapClick); 
