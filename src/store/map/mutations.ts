import { MutationTree } from 'vuex';
import Mapboxgl from 'maplibre-gl';

import { MapStateInterface } from './state';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<MapStateInterface> = {

    setMap(state: MapStateInterface, map: Mapboxgl.Map) {
        
        state.map = map;
    },

    setDistanceDuration(state: MapStateInterface, { distance, duration }: { distance: number, duration: number }) {

        state.distance = Math.round((distance / 1000) * 100) / 100; // Mts -> Kms
        state.duration = Math.floor(duration / 60); // Segs -> Mins
    },

    setPlaceMarkers(state: MapStateInterface, places: Feature[]) {
        
        // eliminar marcadores existentes
        state.markers.forEach(marker => marker.remove());
        state.markers = [];

        if (!state.map) { return; }

        // crear los nuevos marcadores
        for (const place of places) {

            const [lng, lat] = place.center;

            const locationPopup = new Mapboxgl.Popup()
            .setLngLat([lng, lat]).setHTML(`<h6>${ place.text }</h6><p>${ place.place_name }</p>`);
      
            const locationMarker = new Mapboxgl.Marker()
            .setLngLat([lng, lat]).setPopup(locationPopup).addTo(state.map);

            state.markers.push(locationMarker);
        }

        if (state.map.getLayer('RouteString')) {
            state.map.removeLayer('RouteString');
            state.map.removeSource('RouteString');
            state.distance = undefined;
            state.duration = undefined;
        }
    },

    setRoutePolyline(state: MapStateInterface, coords: number[][]) {
        
        if (coords.length === 0 ) return;

        const start = coords[0];
        if (!start || start.length < 2) return;

        // definir los bounds
        const bounds = new Mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [start[0], start[1]],
        );

        // agregar cada punto a los bounds
        for (const coord of coords) {
            bounds.extend([coord[0], coord[1]]);
        }

        state.map?.fitBounds(bounds, {
            padding: 200
        });

        // polyline
        const sourceData: Mapboxgl.SourceSpecification = {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: { },
                        geometry: {
                            type: 'LineString',
                            coordinates: coords
                        }
                    }
                ]
            }
        }

        if (state.map?.getLayer('RouteString')) {
            state.map?.removeLayer('RouteString');
            state.map?.removeSource('RouteString');
        }

        state.map?.addSource('RouteString', sourceData);

        state.map?.addLayer({
            id: 'RouteString',
            type: 'line',
            source: 'RouteString',
            layout: {
                'line-cap': 'round',
                'line-join': 'round'
            },
            paint: {
                'line-color': 'black',
                'line-width': 3
            }
        })
    }
}

export default mutation;
