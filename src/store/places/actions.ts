import { ActionTree } from 'vuex';

import { PlacesStateInterface } from './state';
import { StateInterface } from '../index';

import { Feature, PlacesResponse } from '@/interfaces/places';
import { searchApi } from "@/apis/index";


const actions: ActionTree<PlacesStateInterface, StateInterface> = {

    getInitialLocation({ commit }) {
        // todo: loading
        navigator.geolocation.getCurrentPosition(
            (position) => { commit('setCurrentPosition', position.coords) },
            (err) => { console.error(err); throw new Error('No geolocation.'); }
        );
    },

    async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]> {

        if (query.length === 0) { commit('setPlaces', []); return []; }
        if (!state.userLocation) { throw new Error('No hay ubicación del usuario.'); }

        commit('setIsLoadingPlaces', true);

        // console.log(query);
        const response = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        });

        // console.log("response", response.data.features);       
        commit('setPlaces', response.data.features);

        return response.data.features;
    }
}

export default actions;
