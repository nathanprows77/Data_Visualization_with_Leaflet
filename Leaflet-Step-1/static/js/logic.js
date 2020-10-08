// Creating map object
var myMap = L.map("map", {
  center: [38.8850, -100.4444],
  zoom: 6
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

  // Use this link to get the geojson data.
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
  
  // Grabbing our GeoJSON data..
  d3.json(url, function(response) {
    // console.log(response);
  
    // Creating a geoJSON layer with the retrieved data
    function styleInfo(feature) {
      return {
        opacity: 1,
        fillOpacity: 1,
        fillColor: markerColor(feature.properties.mag),
        color: "#000000",
        radius: markerSize(feature.properties.mag),
        stroke: true,
        weight: 1
      };
    }
    function markerSize(mag) {
      if (mag === 0) {
        return 1;
      }
      return mag * 3.5;
    }
    
    function markerColor(mag) {
      switch (true) {
      case mag > 6: 
          return "#141452";
      case mag > 5:
          return "#24248f";
      case mag > 4:
          return "#3333cc";
      case mag > 3:
          return "#7070db";
      case mag > 2:
          return "#adadeb";
      case mag > 1:
          return "#ebebfa";
      default:
          return "white";
      };
    }
  
    L.geoJson(response, {
      pointToLayer: function(feature, latlng) {
        return L.circleMarker(latlng);
      },
      style: styleInfo,
      onEachFeature: function(feature, layer) {
        layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
      }
    }).addTo(myMap)

    var legend = L.control({position: "bottomright"});
  
    // details for the legend
    legend.onAdd = function(map) {
      var div = L.DomUtil.create("div", "info legend");
      var grades = [0,1,2,3,4,5,6];
      var colors = [
        "white",
        "#ebebfa",
        "#adadeb",
        "#7070db",
        "#3333cc",
        "#24248f",
        "#141452"
      ];
  
      // Looping through
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
          "<i style='background: " + colors[i] + "'>&nbsp&nbsp&nbsp&nbsp</i> " +
          grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
      }
      return div;
    };
  
    // Append legend to map.
    legend.addTo(myMap);
  });
