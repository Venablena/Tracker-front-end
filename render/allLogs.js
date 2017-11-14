function allLogs() {
    Request.displayAll()
      .then(({ data: logsArray }) => {
        initList(logsArray)
        // const center = {lat: averageLat(logsArray), lng: averageLong(logsArray)}

        initMap(logsArray, 12)
    })
  }

function initList(array) {
  let content = array.map(item => {
    return createTable(item)
  })
  content = content.join(' ')
  return document.querySelector('#list-view').innerHTML = content
}

// function initMap(center, zoom) {
//   new google.maps.Map(document.getElementById("map"), {
//     center, zoom
//   })
// }
//
// function findAverage(array){
//   const sum = array.reduce((acc, curr) => acc + curr)
//   return sum/array.length
// }
//
// function averageLat(array) {
//   array = array.map(item => item.lat )
//   return findAverage(array)
// }
//
// function averageLong(array) {
//   array = array.map(item => item.long )
//   return findAverage(array)
// }


  // console.log(array);
  // let
  //
  // let markerOptions = {
  //   position: {lat: loc.lat, lng: loc.long},
  //   map:map
  // }
  //
  // let map =

// function initMap() {
//   let spot = {lat: 47.5604485, lng: -122.2990989}
//   let map = new google.maps.Map(document.getElementById("map"), {
//     center: spot,
//     zoom: 14
//   });
//       let marker = new google.maps.Marker({
//         position: spot,
//         map: map
//   })
//   return map
// }
