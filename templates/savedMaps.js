function savedMaps (item) {
  return `
    <a href="#/logs/${item.id}" class="list-group-item list-group-item-action">
      ${item.name}
    </a>
  `
}
