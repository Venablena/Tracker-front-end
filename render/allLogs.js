function allLogs() {
    Request.displayLogs()
      .then(({ data: logsArray }) => {
        document.querySelector('#list-view').innerHTML = init(logsArray, createTable)
        removeLogs('.delete')
        initMap(logsArray)
    })
    loadMaps()
  }

function init(array, callback) {
  let content = array.map(item => {
    return callback(item)
  })
  return content.join(' ')
}

function loadMaps() {
  Request.displayMaps()
    .then(({data}) => {
      document.querySelector('#saved-maps').innerHTML = init(data, savedMaps)
      addMapEvents(".list-group-item-action")
    })
}

function addMapEvents(selector){
  document.querySelectorAll(selector).forEach(link => {
    link.addEventListener('click', (event) => {
      document.querySelector("#map-title").innerHTML = event.target.textContent
      Request.showMap(event.target.id)
        .then((result) => {
          initMap(result.data);
        })
    })
  })
}

function removeLogs(selector){
  document.querySelectorAll(selector).forEach(link => {
    link.addEventListener('click', (event) => {
      const id = event.target.id.replace("delete-", "")
      Request.destroy(id)
        .then(() => {
          Request.displayLogs()
            .then(({ data: logsArray }) => {
              document.querySelector('#list-view').innerHTML = init(logsArray, createTable)
         })
      })
    })
  })
}
