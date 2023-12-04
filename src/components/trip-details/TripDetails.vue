<template>
    <div v-if="distance && duration" class="container column bg-primary">
        <div class="col text-white">Distancia: <strong>{{ distance }} kms</strong></div>
        <div class="col text-white">Duración: <strong>{{ duration }} mins</strong></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useMapStore } from "@/composables";

export default defineComponent({
    name: 'TripDetails',

    setup() {
        const { distance, duration } = useMapStore();

        return { distance, duration }
    },
});
</script>

<style scoped>
.container {
    background-color: white;
    border-radius: 5px;
    bottom: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    left: 30px;
    padding: 10px;
    position: fixed;
    width: 250px;
    z-index: 99;
}
strong {
    /* color: #42b983; */
}
</style>