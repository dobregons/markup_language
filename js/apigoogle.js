var map;

function initialize() {
  var bogota = new google.maps.LatLng(4.661420, -74.097425);
  var mapOptions = {
    zoom: 13,
    center: bogota
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  //Funcion para cargar archivo KML

  var ctaLayer = new google.maps.KmlLayer({
    url: 'http://sites.google.com/site/kmlfilesdavid/kmlfiles/KML_ProyectoFinal.kml'
  });
  ctaLayer.setMap(map);

  var i;


  for(i=0; i<coords.length; i++){
    var points = coords[i].split(",");
    var lon = parseFloat(points[0].trim());
    var lat = parseFloat(points[1].trim());
    var myLatLng = new google.maps.LatLng(lat, lon);
    var infowindow = new google.maps.InfoWindow();
    var beachMarker = new google.maps.Marker({
          map: map,
          draggable:false,
          position: myLatLng,
    });
          google.maps.event.addListener(beachMarker, 'click', (function(beachMarker, i) {
        return function() {
          infowindow.setContent("<b>" + title[i] +"</b>"+ "<br>" + description[i]);
          infowindow.open(map, beachMarker);
        }
      })(beachMarker, i));
  }
}



google.maps.event.addDomListener(window, 'load', initialize);