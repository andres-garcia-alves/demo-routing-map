import { ActionTree } from 'vuex';

import { MapStateInterface } from './state';
import { StateInterface } from '../index';
import { DirectionsResponse } from '@/interfaces/directions';
import { directionsApi } from '@/apis';
import { mapConfig } from '@/config/mapConfig';


export type LngLat = [number, number];

const actions: ActionTree<MapStateInterface, StateInterface> = {

    async getRouteBetweenPoints({ commit }, { start, end }: { start: LngLat, end: LngLat }) {

        let distance, duration, geometry;

        if (mapConfig.provider === 'mapbox') {
            const response = await directionsApi.get<DirectionsResponse>(`${ start.join(',') };${ end.join(',') }`);
            distance = response.data.routes[0].distance;
            duration = response.data.routes[0].duration;
            geometry = response.data.routes[0].geometry;
        } else {
            // Geoapify: waypoints=lat1,lon1|lat2,lon2
            const waypoints = `${start[1]},${start[0]}|${end[1]},${end[0]}`;
            const response = await directionsApi.get('', {
                params: {
                    waypoints,
                    mode: 'drive'
                }
            });
            
            // Geoapify returns FeatureCollection
            const feature = response.data.features[0];
            distance = feature.properties.distance;
            duration = feature.properties.time;
            geometry = feature.geometry; // GeoJSON geometry (LineString or MultiLineString)
        }

        // console.log('distance', distance, 'duration', duration);
        // console.log('geometry', geometry);

        let coords = geometry.coordinates;
        if (geometry.type === 'MultiLineString') {
            coords = (geometry.coordinates as any).flat();
        }

        commit('setDistanceDuration', { distance, duration });
        commit('setRoutePolyline', coords);
    }
}

export default actions;
