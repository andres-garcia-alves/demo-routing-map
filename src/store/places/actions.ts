import type { ActionTree } from 'vuex';

import { PlacesStateInterface } from './state';
import { StateInterface } from '../index';

import { Feature, PlacesResponse } from '@/interfaces/places';
import { searchApi } from "@/apis/index";
import { mapConfig } from "@/config/mapConfig";


const actions: ActionTree<PlacesStateInterface, StateInterface> = {

    getInitialLocation({ commit }) {
        navigator.geolocation.getCurrentPosition(
            (position) => { commit('setCurrentPosition', position.coords) },
            (err) => { 
                commit('setHasError', true);
                console.error(err); 
                throw new Error('No geolocation.'); 
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    },

    async searchPlacesByTerm({ commit, state }, query: string): Promise<Feature[]> {

        if (query.length === 0) { commit('setPlaces', []); return []; }
        if (!state.userLocation) { throw new Error('No hay ubicación del usuario.'); }

        commit('setIsLoadingPlaces', true);

        // console.log(query);
        let response;
        if (mapConfig.provider === 'mapbox') {
            response = await searchApi.get<PlacesResponse>(`/${ query }.json`, {
                params: {
                    proximity: state.userLocation?.join(',')
                }
            });
        } else {
             // Geoapify
             response = await searchApi.get<PlacesResponse>('/autocomplete', {
                 params: {
                     text: query,
                     bias: state.userLocation ? `proximity:${state.userLocation.join(',')}` : undefined
                 }
             });

             // Normalize to Mapbox format
             response.data.features = response.data.features.map((feature: any) => ({
                 id: feature.properties.place_id,
                 text: feature.properties.name || feature.properties.formatted,
                 place_name: feature.properties.formatted,
                 center: feature.geometry.coordinates,
                 geometry: feature.geometry,
                 properties: feature.properties
             })) as Feature[];
        }

        // console.log("response", response.data.features);       
        commit('setPlaces', response.data.features);

        return response.data.features;
    }
}

export default actions;
