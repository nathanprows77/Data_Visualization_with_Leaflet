// Creating map object
var myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

// Adding tile layer to the map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

//   // Use this link to get the geojson data.
//   var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson"
  

//   // Grabbing our GeoJSON data..
// d3.json(url, function(response) {
//     console.log(response);
//   // Creating a geoJSON layer with the retrieved data
//     var heatArray = [];
  
//     for (var i = 0; i < response.length; i++) {
//       var geometry = response[i].features.geometry;
  
//       if (geometry) {
//         heatArray.push([geometry.coordinates[1], geometry.coordinates[0]]);
//       }
//     }
  
//     var heat = L.heatLayer(heatArray, {
//       radius: 20,
//       blur: 35
//     }).addTo(myMap);
  
//   });
  //   // Called on each feature
  //   onEachFeature: function(feature, layer) {
  //     // Set mouse events to change map styling
  //     layer.on({
  //       // When a user's mouse touches a map feature, the mouseover event calls this function, that feature's opacity changes to 90% so that it stands out
  //       mouseover: function(event) {
  //         layer = event.target;
  //         layer.setStyle({
  //           fillOpacity: 0.9
  //         });
  //       },
  //       // When the cursor no longer hovers over a map feature - when the mouseout event occurs - the feature's opacity reverts back to 50%
  //       mouseout: function(event) {
  //         layer = event.target;
  //         layer.setStyle({
  //           fillOpacity: 0.5
  //         });
  //       },
  //       // When a feature (neighborhood) is clicked, it is enlarged to fit the screen
  //       click: function(event) {
  //         myMap.fitBounds(event.target.getBounds());
  //       }
  //     });
  //     // Giving each feature a pop-up with information pertinent to it
  //     layer.bindPopup("<h1>" + feature.properties.neighborhood + "</h1> <hr> <h2>" + feature.properties.borough + "</h2>");

  //   }
  // }).addTo(myMap);
// });
