function createTable(item){
  return`
  <tr>
    <td></td>
    <td>${item.date}</td>
    <td>${item.time}</td>
    <td>${item.long} / ${item.lat}</td>
    <td>${item.tag}</td>
    <td><i class="fa fa-times fa-lg delete" id="delete-${item.id}"></i></td>
    <td>
      <span class="fa-stack fa-lg add-to-map add">
        <i class="fa fa-map-o fa-stack-2x"></i>
        <i class="fa fa-plus fa-stack-1x" id="add-${item.id}"></i>
      </span>
    <td>
  </tr>
  `
}




// <i class="fa fa-map-o fa-lg"></i>
// <i class="fa fa-plus"></i>
