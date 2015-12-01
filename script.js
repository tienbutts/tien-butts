var map = L.map('map').setView([40.683505, -73.948776], 13); 

var circleIcon = L.icon ({
    iconUrl:'/assets/circle-pointer.png',

    iconSize:     [40, 40],
    iconAnchor:   [20, 20],
})


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', { 
        maxZoom: 18, 
        id: 'mapbox.streets' 
    }).addTo(map); 

L.marker([40.683505, -73.948776], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Home</b>").openPopup(); 

L.marker([40.716484, -73.988723], {icon: circleIcon}).addTo(map)
.bindPopup("<b>Doughnut Plant</b>").openPopup(); 

L.marker([40.726430, -73.984101], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Big Gay Ice Cream</b>").openPopup(); 

L.marker([40.722514, -73.985741], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Double Down Saloon</b>").openPopup(); 

L.marker([40.795429, -73.930289], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Costco: Harlem</b>").openPopup();

L.marker([40.767276, -73.937568], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Costco: Astoria</b>").openPopup(); 

L.marker([40.655620, -74.009233], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Costco: Brooklyn</b>").openPopup(); 

L.marker([40.645556,-74.011944], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Sunset Park</b>").openPopup();  

L.marker([40.765830, -73.833084], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Flushing</b>").openPopup(); 

L.marker([40.714722,-73.997222], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Chinatown</b>").openPopup(); 

L.marker([40.805187, -73.966378], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>The Heights</b>").openPopup(); 

L.marker([40.723833, -74.004279], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Black Tap</b>").openPopup(); 

L.marker([40.714176, -73.986960], {icon: circleIcon}).addTo(map) 
.bindPopup("<b>Ice & Vice</b>").openPopup(); 