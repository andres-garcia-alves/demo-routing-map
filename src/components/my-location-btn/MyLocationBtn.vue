<template>
    <button v-if="showButton" class="btn btn-primary" @click="goToMyLocation">Mi Ubicación</button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useMapStore, usePlacesStore } from "@/composables";

export default defineComponent({
    name: 'MyLocationBtn',

    setup() {

        const { map, getMapReady } = useMapStore();
        const { userLocation, getUserLocationIsReady } = usePlacesStore();

        return {
            showButton: computed<boolean>(() => { return getUserLocationIsReady.value && getMapReady.value }),

            goToMyLocation: () => {
                map.value?.flyTo({
                    center: userLocation.value!,
                    zoom: 14
                });
            }
        }
    }
});
</script>

<style scoped>
button {
    position: fixed;
    right: 30px;
    top: 30px;
}
</style>