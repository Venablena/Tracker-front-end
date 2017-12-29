function createTable(item){
const key = 'key=AIzaSyDMxY1rQgAG7PruMhTZDNHMXDZ3nT_mUNc'
  return`
  <tr class="log-row" id= row-${item.id}>
    <td></td>
    <td>${item.dateTime}</td>
    <td class=location>${item.lat}/${item.long}</td>
    <td>${defineTag(item.tag)}</td>
    <td><i class="fa fa-times fa-lg delete" id="delete-${item.id}"></i></td>
    <td>
      <span class="fa-stack add-to-map add">
        <i class="fa fa-map-o fa-stack-2x"></i>
        <i class="fa fa-plus fa-stack-1x" id="add-${item.id}"></i>
      </span>
    <td>
  </tr>
  `
}

function defineTag(item){
  let tag = ""
  if(item === "click") {
    tag = `<i class="fa fa-thumbs-o-up fa-2x" aria-hidden="true"></i>`}
  if(item === "double_click") {
    tag = `<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>`
  }
  if(item === "hold") {
    tag = `<i class="fa fa-thumbs-o-down fa-2x" aria-hidden="true"></i>`
  }
  return tag
}
