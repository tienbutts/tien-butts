var map = L.map('map').setView([40.683505, -73.948776], 13); 

var circleIcon = L.icon ({
    iconUrl:'./assets/circle-pointer.png',

    iconSize:     [40, 40],
    iconAnchor:   [20, 20],
})


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', { 
        maxZoom: 18, 
        id: 'mapbox.streets' 
    }).addTo(map); 


var doughnutPlant = L.marker([40.716484, -73.988723], {icon: circleIcon});
doughnutPlant.bindPopup("<b>Doughnut Plant</b>");
doughnutPlant.addTo(map);

var bigGay = L.marker([40.726430, -73.984101], {icon: circleIcon});
bigGay.bindPopup("<b>Big Gay Ice Cream</b>"); 
bigGay.addTo(map);

var doubleDown = L.marker([40.722514, -73.985741], {icon: circleIcon});
doubleDown.bindPopup("<b>Double Down Saloon</b>"); 
doubleDown.addTo(map);

var costcoHarlem = L.marker([40.795429, -73.930289], {icon: circleIcon});
costcoHarlem.bindPopup("<b>Costco: Harlem</b>");
costcoHarlem.addTo(map);

var costcoAstoria = L.marker([40.767276, -73.937568], {icon: circleIcon});
costcoAstoria.bindPopup("<b>Costco: Astoria</b>"); 
costcoAstoria.addTo(map);

var costcoBrooklyn = L.marker([40.655620, -74.009233], {icon: circleIcon});
costcoBrooklyn.bindPopup("<b>Costco: Brooklyn</b>"); 
costcoBrooklyn.addTo(map);

var sunsetPark = L.marker([40.645556,-74.011944], {icon: circleIcon});
sunsetPark.bindPopup("<b>Sunset Park</b>");  
sunsetPark.addTo(map);

var flushing = L.marker([40.765830, -73.833084], {icon: circleIcon});
flushing.bindPopup("<b>Flushing</b>"); 
flushing.addTo(map);

var chinatown = L.marker([40.714722,-73.997222], {icon: circleIcon});
chinatown.bindPopup("<b>Chinatown</b>"); 
chinatown.addTo(map);

var theHeights = L.marker([40.805187, -73.966378], {icon: circleIcon});
theHeights.bindPopup("<b>The Heights</b>"); 
theHeights.addTo(map);

var blackTap = L.marker([40.723833, -74.004279], {icon: circleIcon});
blackTap.bindPopup("<b>Black Tap</b>");
blackTap.addTo(map);

var iceVice = L.marker([40.714176, -73.986960], {icon: circleIcon});
iceVice.bindPopup("<b>Ice & Vice</b>");
iceVice.addTo(map);