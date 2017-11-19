const localhostURL = 'http://localhost:3000/'
const herokuURL = 'http://put-a-pin-on-it.herokuapp.com/'
const baseURL = window.location.href.includes('herokuapp') ? herokuURL : localhostURL

//refresh()
allLogs()
createMap()

//get data from Google spreadsheets & send the spreadsheet data to the database
function refresh(){
  Request.getSheets('1e1GkbibPFIxJEyuWQsZnudRE2q3rQmTppUXr7-wrP1w', 'sheet1')
  .then((result) => {
    return result.data.values.map(array => {
    return {tag: array[0], dateTime: array[1], long: array[2], lat: array[3]}
    })
  }).then((result) => {
    Request.addLogs(result);
  })
}

document.querySelector("#refresh").addEventListener('click', refresh)
