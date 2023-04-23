<script setup>
import { Loader } from "@googlemaps/js-api-loader";
const loader = new Loader({
 apiKey: "AIzaSyAerUmnzfrpKX11QvJia1A881TAw8qhPDI",
 version: "weekly",
});

onMounted(() => {
 navigator.geolocation.getCurrentPosition((pos) => {
  console.log("Latitude: " + pos.coords.latitude);
  console.log("Longitude: " + pos.coords.longitude);
  loader.load().then(async () => {
   const { Map } = await google.maps.importLibrary("maps");

   const myLatLng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
   const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    mapId: "ac6a04e615c0735c",
    center: myLatLng,
    disableDefaultUI: true,
    gestureHandling: "cooperative",
   });
   function placeMarkerAndPanTo(latLng, map) {
    new google.maps.Marker({
     position: latLng,
     map: map,
    });
    map.panTo(latLng);
   }
   map.addListener("click", (e) => {
    placeMarkerAndPanTo(e.latLng, map);
   });

   new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
   });
  });
 });
});
</script>

<template>
 <NuxtLayout>
  <div id="map" class="w-screen h-screen">hello</div>
 </NuxtLayout>
</template>
