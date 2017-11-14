var map
var bounds

function initMap(array, zoom) {
  const center = {lat: averageLat(array), lng: averageLong(array)}
  map = new google.maps.Map(document.getElementById("map"), {
    center, zoom
  })
  bounds = new google.maps.LatLngBounds()
  markers(array)
  map.fitBounds(bounds)
  map.panToBounds(bounds)
}

function findAverage(array){
  const sum = array.reduce((acc, curr) => acc + curr)
  return sum/array.length
}

function averageLat(array) {
  array = array.map(item => item.lat )
  return findAverage(array)
}

function averageLong(array) {
  array = array.map(item => item.long )
  return findAverage(array)
}

function markers(array) {
  return array.map(item => {
    let marker = new google.maps.Marker({
        position: {lat: item.lat, lng:item.long},
        map: map,
        animation: google.maps.Animation.DROP,
        label: item.tag,
        id: item.id
        // icon:
      })
    let loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng())
    bounds.extend(loc)
    let infoWindow = new google.maps.InfoWindow({
      id: item.id,
      content: `${item.tag} : ${item.time}<br>${item.description}`
    })
    marker.addListener('click', () => {
      infoWindow.open(map, marker)
    })
    //loc = new google.mapsLatLng(marker.position.lat(), marker.position.lng())
  })
}

// function makeMarkers(array) {
//   var markers = []
//   for (var i = 0; i < array.length; i++) {
//     var item =  new google.maps.Marker({
//       position: {lat: array[i].lat, lng:array[i].long},
//       map: map
//     })
//     markers.push(item)
//   }
//   for (var i = 0; i < markers.length; i++) {
//     markers[i].setMap(map);
//   }
// }

// function setMapOnAll(map) {
//   for (var i = 0; i < markers.length; i++) {
//     markers[i].setMap(map);
//   }
// }

// var latLng = new google.maps.LatLng(coords[1],coords[0]);
