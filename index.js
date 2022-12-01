const map = L.map('map').setView([43.66275, -7.5976], 5);
const puenteMisericordia = L.marker([43.66275, -7.5976]).addTo(map)
const salcedaDeCaselas = L.marker([42.1019, -8.5579]).addTo(map)
const playaBlanca = L.marker([28.8591, -13.8138]).addTo(map)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

