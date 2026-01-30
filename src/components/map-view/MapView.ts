import { defineComponent, onMounted, ref, watch } from "vue";
import Mapboxgl from 'maplibre-gl';
import { mapConfig } from "@/config/mapConfig";

import { usePlacesStore, useMapStore } from "@/composables";

export default defineComponent({
    name: 'MapView',

    setup() {
        const { getUserLocationIsReady, userLocation } = usePlacesStore()
        const { setMap } = useMapStore()

        const mapElement = ref<HTMLDivElement>();

        const init = async () => {
            if (!mapElement.value) { throw new Error('No HTMLDivElement'); }
            if (!userLocation.value) { throw new Error('No UserLocation'); }
      
            await Promise.resolve();
      
            const map = new Mapboxgl.Map({
                container: mapElement.value,
                style: mapConfig.styleUrl,
                center: userLocation.value,
                zoom: 15
            });
      
            const locationPopup = new Mapboxgl.Popup()
            .setLngLat(userLocation.value).setHTML(`<h6>Estoy aquí</h6><p>CABA, Argentina</p>`);
      
            const locationMarker = new Mapboxgl.Marker()
            .setLngLat(userLocation.value).setPopup(locationPopup).addTo(map);
      
            // establecer el mapa en Vuex
            setMap(map);
        }

        onMounted(() => {
            // console.log(mapElement.value)
            if (getUserLocationIsReady.value) { init(); }
        })

        watch(
            getUserLocationIsReady, (value) => {
                if (getUserLocationIsReady.value) { init(); }
            }
        )

        return {
            getUserLocationIsReady,
            mapElement
        }
    }
})