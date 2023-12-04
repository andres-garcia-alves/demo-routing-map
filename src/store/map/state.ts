import Mapboxgl from "mapbox-gl";

export interface MapStateInterface {
    map?: Mapboxgl.Map;
    markers: Mapboxgl.Marker[];
    distance?: number;
    duration?: number;
}

function state(): MapStateInterface {
    return {
        map: undefined,
        markers: [],
        distance: undefined,
        duration: undefined
    }
}

export default state;
