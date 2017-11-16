function allLogs() {
    Request.displayLogs()
      .then(({ data: logsArray }) => {
        document.querySelector('#list-view').innerHTML = init(logsArray, createTable)
        initMap(logsArray)
    })
    Request.displayMaps()
      .then(({data}) => {
        document.querySelector('#saved-maps').innerHTML = init(data, savedMaps)
        addEvents(".list-group-item-action")
      })
  }

function init(array, callback) {
  let content = array.map(item => {
    return callback(item)
  })
  return content.join(' ')
}

function addEvents(selector){
  document.querySelectorAll(selector).forEach(link =>{
    link.addEventListener('click', (event) =>{
      document.querySelector("#map-title").innerHTML =event.target.textContent
      Request.showMap(event.target.id)
        .then((result) => {
          initMap(result.data);
        })
    })
  })
}
