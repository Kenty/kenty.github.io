var map,
    marker,
    infoWindow,
    _canvas = document.getElementById('map-canvas'),
    _place = {
      lat: 35.743084,
      lng: 139.992502
    };

  function initMap() {
    var mapOptions = {
      center: _place,
      zoom: 17
    };
    map = new google.maps.Map(_canvas, mapOptions);

    marker = new google.maps.Marker({
      map: map,
      // draggable: true,
      animataion: google.maps.Animation.DROP,
      position: _place,
      title: 'Seventh Heaven (セブンス ヘブン)'
    });
    marker.addListener('click', function() {
      toggleBounce();
      infoWindow.open(map, marker);
    });

    infoWindow = new google.maps.InfoWindow({
      content: marker.title
        // disableAutoPan: true
    });
  }

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  function resizeMap() {
    if (_canvas) {
      map.panTo(_place);
    } else {
      return false;
    };
    // map.panTo(_place);
  }
  console.log(google);
  google.maps.event.addDomListener(window, 'load', initMap);
  google.maps.event.addDomListener(window, 'resize', resizeMap);
