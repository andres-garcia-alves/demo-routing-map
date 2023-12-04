import { defineComponent, ref, watch } from "vue";

import { useMapStore, usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { LngLat } from "@/store/map/actions";


export default defineComponent({
    name: 'SearchResults',

    setup() {

        const { isLoadingPlaces, places, userLocation } = usePlacesStore();
        const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore();
        
        const activePlace = ref('');
        
        watch(places, (newPLaces) => {
            activePlace.value = '';
            setPlaceMarkers(newPLaces);
        });

        return {
            activePlace,
            isLoadingPlaces,
            places,

            goToPlace: (place: Feature) => {
                activePlace.value = place.id;
                const [lng, lat] = place.center;

                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                });
            },
            traceRoute: (place: Feature) => {
                if (!userLocation.value) { return }

                const [startLng, startLat] = userLocation.value;
                const [endLng, endLat] = place.center;

                const start : LngLat = [startLng, startLat];
                const end   : LngLat = [endLng, endLat];

                getRouteBetweenPoints(start, end);
            }
        }
    }
});
