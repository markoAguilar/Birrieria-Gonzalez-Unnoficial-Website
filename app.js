function initMap(){
    const birrieria = {lat: 34.018, lng: -118.151};
    const map = new google.maps.Map(document.getElementById("map"), {zoom:4, center: birrieria,});
    const marker = new google.maps.marker({position: birrieria, map: map,});
}

window.initMap = initMap;