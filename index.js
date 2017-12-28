const localhostURL = 'http://localhost:3000/'
const herokuURL = 'http://put-a-pin-on-it.herokuapp.com/'
const baseURL = window.location.href.includes('herokuapp') ? herokuURL : localhostURL

document.querySelector("#refresh").addEventListener('click', refreshDB)
allLogs()
createMap()

//get data from Google spreadsheets & send the spreadsheet data to the database
function refreshDB(){
  Request.getSheets('1e1GkbibPFIxJEyuWQsZnudRE2q3rQmTppUXr7-wrP1w', 'sheet1')
    .then((result) => {
      const values =  convertLog(result.data.values)
      Request.addLogs(values)
    })
    //  Doesn't work without OAuth2:
    // .then(() => {
    //   Request.clearLogs('1e1GkbibPFIxJEyuWQsZnudRE2q3rQmTppUXr7-wrP1w', 'sheet1')
    // })
}

function convertLog(valuesArr){
  return valuesArr.map(array => {
  return {tag: array[0], dateTime: array[1], long: array[2], lat: array[3]}
  })
}
