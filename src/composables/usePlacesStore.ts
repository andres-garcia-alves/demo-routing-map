import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import { StateInterface } from "@/store/index";


export const usePlacesStore: any = () => {

    const store = useStore<StateInterface>();

    onMounted(() => {
        if (!store.getters['places/getUserLocationIsReady']) {
            store.dispatch('places/getInitialLocation')
        }
    });

    return {
        // state
        isLoading: computed(() => store.state.places.isLoading),
        userLocation: computed(() => store.state.places.userLocation),
        isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),
        places: computed(() => store.state.places.places),
        hasError: computed(() => store.state.places.hasError),
        
        // getters
        getUserLocationIsReady: computed<boolean>(() => store.getters['places/getUserLocationIsReady']),

        // actions
        searchPlacesByTerm: (query = '') => store.dispatch('places/searchPlacesByTerm', query)
        // mutations
    }
}
