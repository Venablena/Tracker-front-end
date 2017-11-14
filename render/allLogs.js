function allLogs() {
    Request.displayAll()
      .then(({ data: logsArray }) => {
        //console.log(logsArray[0].lat);
        initList(logsArray)
        initMap()
        // let content = logsArray.map(item => {
        //   return createTable(item)
        // })
        // content = content.join(' ')
        // document.querySelector('#list-view').innerHTML = content
    })
  }

function initList(array) {
  let content = array.map(item => {
    return createTable(item)
  })
  content = content.join(' ')
  return document.querySelector('#list-view').innerHTML = content
}

function initMap() {
  //console.log(array);
  let spot = {lat: 47.5604485, lng: -122.2990989}
  let map = new google.maps.Map(document.getElementById("map"), {
    center: spot,
    zoom: 14
  });
    //array.forEach(loc => {
      let marker = new google.maps.Marker({
        position: spot,
        map: map
    //})
  })
  return map
}

// function initMap(array) {
//   //console.log(array);
//   let map = new google.maps.Map(document.getElementById("map"), {
//     center: {lat: array[0].lat, lng: array[0].long},
//     zoom: 8
//   });
//     array.forEach(loc => {
//       let marker = new google.maps.Marker({
//         position: {lat: loc.lat, lng: loc.long},
//         map: map
//     })
//   })
//   return map
// }
