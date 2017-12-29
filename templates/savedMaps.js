function savedMaps (item) {
  return `
    <li class="nav-item">
      <a href="#/maps/${item.id}" class="nav-link" id=${item.id}>
        ${item.name}
      </a>
    </li>
  `
}
