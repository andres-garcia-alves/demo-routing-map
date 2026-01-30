<template>
    <div v-if="!getUserLocationIsReady" class="loading-map d-flex justify-content-center align-items-center">
        <div v-if="hasError" class="text-center">
            <h3>Sin geolocalización disponible</h3>
        </div>
        <div v-else class="text-center">
            <h3>Espere por favor</h3>
            <span>Localizando...</span>
        </div>
    </div>
    <div v-show="getUserLocationIsReady" ref="mapElement" class="map-container" />
</template>

<script lang="ts" src="./MapView.ts" />

<style scoped>
.loading-map {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    height: 100vh;
    left: 0px;
    position: fixed;
    top: 0px;
    width: 100vw;
    z-index: 999;
}
.map-container {
    position: fixed;
    height: 100vh;
    width: 100vw;
}
</style>