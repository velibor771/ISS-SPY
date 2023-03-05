let id_display = document.getElementById('id_display')
let velocity_display = document.getElementById('velocity_display')
let latitude_display = document.getElementById('latitude_display')
let longitude_display = document.getElementById('longitude_display')
setInterval(function call() {

   let api = 'https://api.wheretheiss.at/v1/satellites/25544'
   fetch(api).then(response => response.json()).then(data => {
      let longitude = data.longitude;
      let latitude = data.latitude;
      let id = data.id;
      let velocity = data.velocity;
      id_display.innerText = `ID: ${id}`
      velocity_display.innerText = `VELOCITY: ${velocity.toFixed(3)}`
      latitude_display.innerText = `LATITUDE: ${latitude.toFixed(4)}`
      longitude_display.innerText = `LONGITUDE: ${longitude.toFixed(4)}`

   })
   var map = L.map('map').setView([51.505, -0.09], 13);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(map);
   var marker = L.marker([51.5, -0.09]).addTo(map);

}, 1000)
