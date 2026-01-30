import { GetterTree } from 'vuex';

import { MapStateInterface } from './state';
import { StateInterface } from '../index';


const getters: GetterTree<MapStateInterface, StateInterface> = {
    getMapReady(state: MapStateInterface) {
        return !!state.map;
    }
}

export default getters;
