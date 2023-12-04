import { ActionTree } from 'vuex';

import { MapStateInterface } from './state';
import { StateInterface } from '../index';
import { DirectionsResponse } from '@/interfaces/directions';
import { directionsApi } from '@/apis';


export type LngLat = [number, number];

const actions: ActionTree<MapStateInterface, StateInterface> = {

    async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat, end: LngLat }) {

        const response = await directionsApi.get<DirectionsResponse>(`${ start.join(',') };${ end.join(',') }`);
        const { distance, duration, geometry } = response.data.routes[0];

        // console.log('distance', distance, 'duration', duration);
        // console.log('geometry', geometry);

        commit('setDistanceDuration', { distance, duration });
        commit('setRoutePolyline', geometry.coordinates);
    }
}

export default actions;
