const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollwheel: false,
    zoomControl: false
}
//crrate map
const map = L.map('mapid', options).setView([-22.980979,-49.8722171], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg", 
    iconSize: [58, 68],
    iconAnchor: [29, 69],
    popupAnchor: [170, 2]

})


//crate and add marker
L.marker([-22.980979,-49.8722171], { icon })
.addTo(map)

//image gallery 

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
            button.classList.remove("active")
    })

    //selecionar imagem clicada
    const img = button.children[0]
    const imageConstainer = document.querySelector(".orphanage-details > img")


    //atualizar o container de image
    imageConstainer.src = img.src

    // adiconar a classe .active para o botao
    button.classList.add("active")

}