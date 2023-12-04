<template>

    <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
        <h5>Cargando</h5>
        <span>Espere por favor...</span>
    </div>

    <ul v-else-if="places.length > 0" class="list-group mt-3">
        <li v-for="place in places" class="list-group-item list-group-item-action"
        @click="goToPlace(place)" :key="place.id" :class="{ 'active': place.id === activePlace }">
            <h5>{{ place.text }}</h5>
            <p>{{ place.place_name }}</p>
            <div align="right">
                <button class="btn btn-outline-primary btn-sm" @click.self="traceRoute(place)"
                :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'">Trazar Ruta</button>
            </div>
        </li>
    </ul>
</template>

<script lang="ts" src="./SearchResults.ts" />

<style scoped>
li {
    cursor: pointer;
}
h5 {
    font-size: 15px !important;
}
p {
    font-size: 10px !important;
}
</style>