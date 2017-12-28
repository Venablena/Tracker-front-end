const localhostURL = 'http://localhost:3000/'
const herokuURL = 'http://put-a-pin-on-it.herokuapp.com/'
const baseURL = window.location.href.includes('herokuapp') ? herokuURL : localhostURL

document.querySelector("#refresh").addEventListener('click', refreshDB)
allLogs()
createMap()

//get data from Google spreadsheets & send the spreadsheet data to the database
function refreshDB(){
  axios.all([
    Request.getSheets('1e1GkbibPFIxJEyuWQsZnudRE2q3rQmTppUXr7-wrP1w', 'sheet1'),
    Request.displayLogs()
  ])
    .then((result) => {
      const newLogs =  convertLog(result[0].data.values)
      const oldLogs = result[1].data
      //HOW TO FILTER AND SEE IF A RECORD ALREADY EXISTS?
      // const uniqueLogs = newLogs.filter(el => {
      //   isNew(el, oldLogs)
      // })
      const locations = newLogs.map(el => Request.getLocations(el.lat, el.long))
      console.log(locations);
      //Request.addLogs(newLogs)
    })

    //ATTEMPT TO CLEAR THE SPREADHSEET, DOESN'T WORK WITH MY CURRENT SETUP, ALTERNATIVE SOLUTION ABOVE (FILTER)
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

// function isNew(item, array){
// console.log(item.dateTime);
//   const match = array.find(el => {
//     el.dateTime === item.dateTime
//   })
//   if(match) return false
//   else return true
// }
