import { MutationTree } from 'vuex';

import { PlacesStateInterface } from './state';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<PlacesStateInterface> = {

    setCurrentPosition(state: PlacesStateInterface, coords: GeolocationCoordinates) {
        state.userLocation = [coords.longitude, coords.latitude];
        state.isLoading = false;
    },

    setIsLoadingPlaces(state: PlacesStateInterface, status: boolean) {
        state.isLoadingPlaces = status;
    },

    setPlaces(state: PlacesStateInterface, places: Feature[]) {
        state.places = places;
        state.isLoadingPlaces = false;
    }
}

export default mutation;
