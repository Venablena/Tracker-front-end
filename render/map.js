var map
var bounds

function initMap(array, zoom) {
  const center = {lat: averageLat(array), lng: averageLong(array)}
  map = new google.maps.Map(document.getElementById("map"), {
    center, zoom
  })
  // auto-size the map to display all markers
  bounds = new google.maps.LatLngBounds()
  markers(array)
  map.fitBounds(bounds)
  map.panToBounds(bounds)
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
    // sets the map borders to fit the new marker
    mapBounds(marker)
    //adds info overlay on the marker
    let infoWindow = addInfo(item)
    marker.addListener('click', () => {
      infoWindow.open(map, marker)
    })
  })
}

function mapBounds(marker){
  let loc = new google.maps.LatLng(marker.position.lat(), marker.position.lng())
  return bounds.extend(loc)
}

function addInfo(item){
  return new google.maps.InfoWindow({
    id: item.id,
    content: `${item.tag} : ${item.time}<br>${item.description}`
  })
}

//Helper functions used to initialize the map before it gets scaled to the boundaries of the markers

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
