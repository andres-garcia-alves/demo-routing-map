import { GetterTree } from 'vuex';

import { PlacesStateInterface } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<PlacesStateInterface, StateInterface> = {
    getUserLocationIsReady(state: PlacesStateInterface) {
        return !!state.userLocation;
    }
}

export default getters;
