// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([40.7, -94.5], 4);

//let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([37.6213, -122.3790], 5);
let map = L.map('mapid').setView([37.5, -122.5], 10);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//L.circle([34.0522, -118.2437], {
//    //color:"black",
//    //fillColor:"yellow",
//   radius: 100
//}).addTo(map);




// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

//L.circleMarker([34.0522, -118.2437],{
//    //color:"black",
//    //fillColor:"yellow",
//    radius:100
//}).addTo(map);
// Coordinates for each point to be used in the line.

// Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
//  color: "yellow"
//}).addTo(map);


// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
//    // We turn each feature into a marker on the map.
//    pointToLayer: function(feature, latlng) {
//      console.log(feature);
//      return L.marker(latlng)
//      .bindPopup("<h2>" + feature.properties.city + "</h2>");
//    }
//}).addTo(map);
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    onEachFeature: function(feature, layer) {
      console.log(layer);

      layer.bindPopup("<h2> Airport code:" + feature.properties.faa + "</h2><hr><h2>Airport name: " + feature.properties.name + "</h2>");
    }
}).addTo(map);


// Loop through the cities array and create one marker for each city.
//cityData.forEach(function(city) {
// L.circleMarker(city.location,{
//    color: "orange",
//    fillColor:"orange",
//    weight: 4,
//    radius: city.population/200000
// }).bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr><h3>Population: " + city.population.toLocaleString() + "</h3").addTo(map)
//});
//for (var i = 0; i < cities.length; i++){
// console.log(cities[i]);
//}
//// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery ?? <a href="https://www.mapbox.com/">Mapbox</a>',
//    maxZoom: 18,
//    id: 'mapbox/streets-v11',
//    tileSize: 512,
//    zoomOffset: -1,
//    accessToken: API_KEY
//});
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data ?? <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
