function initMap(array) {
  let map = new google.maps.Map(document.getElementById("map"), {
    center: {lat: 47.5604485, lng: -122.2990989},
    zoom: 16
  });
    array.forEach(loc => {
      let marker = new google.maps.Marker({
        position: {lat: loc.lat, lng: loc.long},
        map: map
    })
  })
  return map
}

// function renderMap(item){
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: {lat: item.lat, lng: item.long},
//     zoom: 8
//   });
// }
