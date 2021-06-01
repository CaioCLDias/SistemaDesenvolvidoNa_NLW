//crrate map
const map = L.map('mapid').setView([-22.967529811928117,-49.85451898298949], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29, 69],
    popupAnchor: [170, 2]

})

const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth:240,
    minHeight:240
}).setContent('Caps <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

const popup2 = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth:240,
    minHeight:240
}).setContent('Ambulatório <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

//crate and add marker
L.marker([-22.967529811928117,-49.85451898298949], { icon })
.addTo(map)
.bindPopup(popup)

L.marker([-22.98188962773446,-49.86408725844422], { icon })
.addTo(map)
.bindPopup(popup2)


