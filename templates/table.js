function createTable(item){
  return`
  <tr>
    <td>${item.date}</td>
    <td>${item.time}</td>
    <td>${item.location}</td>
    <td>${item.tag}</td>
    <td>
      <span class="fa-stack fa-lg">
        <i class="fa fa-map-marker fa-stack-2x"></i>
        <i class="fa fa-times fa-stack-1x"></i>
      </span>
    <td>
  </tr>
  `
}
