const map = L.map('map').setView([-7.5, 110], 6);
document.getElementById('toggle-sidebar').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('collapsed');
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

fetch('data/kavling.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      onEachFeature: function (feature, layer) {
        layer.bindPopup(`
          <strong>${feature.properties.nama}</strong><br/>
          NIM: ${feature.properties.nim}<br/>
          Wisuda: ${feature.properties.wisuda}
        `);
      },
      style: {
        color: "#0077b6",
        weight: 2,
        fillOpacity: 0.4
      }
    }).addTo(map);
  });
