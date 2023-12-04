<template>
    <MapView />
    <MyLocationBtn />
    <SearchBar />
    <TripDetails />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { usePlacesStore } from '@/composables';
import MapView from "@/components/map-view/MapView.vue";
import MyLocationBtn from "@/components/my-location-btn/MyLocationBtn.vue";
import SearchBar from "@/components/search-bar/SearchBar.vue";
import TripDetails from "@/components/trip-details/TripDetails.vue";

export default defineComponent({
    name: 'HomeView',
    components: { MapView, MyLocationBtn, SearchBar, TripDetails },

    setup() {
        usePlacesStore();
    }
});
</script>
