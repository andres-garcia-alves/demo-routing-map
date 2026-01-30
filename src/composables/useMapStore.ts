import { computed } from "vue";
import { useStore } from "vuex";
import Mapboxgl from "maplibre-gl";

import { StateInterface } from "@/store";
import { Feature } from "@/interfaces/places";
import { LngLat } from "@/store/map/actions";

export const useMapStore: any = () => {

    const store = useStore<StateInterface>();

    return {
        // state
        map: computed(() => store.state.map.map),
        distance: computed(() => store.state.map.distance),
        duration: computed(() => store.state.map.duration),
       
        // getters
        getMapReady: computed(() => store.getters['map/getMapReady']),

        // actions
        getRouteBetweenPoints: (start: LngLat, end: LngLat) => store.dispatch('map/getRouteBetweenPoints', { start, end }),

        // mutations
        setMap: (map: Mapboxgl.Map) => store.commit('map/setMap', map),
        setPlaceMarkers: (places: Feature[]) => store.commit('map/setPlaceMarkers', places)
    }
}