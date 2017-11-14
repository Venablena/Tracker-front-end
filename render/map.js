var map

function initMap(array, zoom) {
  const center = {lat: averageLat(array), lng: averageLong(array)}
  map = new google.maps.Map(document.getElementById("map"), {
    center, zoom
  })

  // return array.forEach(loc => {
  //   var item = new google.maps.Marker({
  //     position: {lat: loc.lat, lng: loc.long},
  //     map:map
  //   })
  //   return item
  // })

  markers(array)
  //setMapOnAll(map)
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
    item = new google.maps.Marker({
        position: {lat: item.lat, lng:item.long},
        map: map
      })
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
