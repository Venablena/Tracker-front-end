function createTable(item){
  return`
  <tr>
    <td></td>
    <td>${item.date}</td>
    <td>${item.time}</td>
    <td>${item.long} / ${item.lat}</td>
    <td>${item.tag}</td>
    <td><i class="fa fa-times fa-lg"></i></td>
    <td>
        <i class="fa fa-map-marker fa-lg"></i>
        <i class="fa fa-plus"></i>
    <td>
  </tr>
  `
}


// <span class="fa-stack fa-lg">
//   <i class="fa fa-map-marker fa-stack-2x"></i>
//   <i class="fa fa-plus-circle fa-stack-1x fa-inverse"></i>
// </span>
