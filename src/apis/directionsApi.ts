import axios from 'axios';
import { mapConfig } from "../config/mapConfig";

const directionsApi = axios.create({
    baseURL: mapConfig.provider === 'mapbox' 
        ? 'https://api.mapbox.com/directions/v5/mapbox/driving'
        : 'https://api.geoapify.com/v1/routing',
    params: {
        access_token: mapConfig.provider === 'mapbox' ? mapConfig.accessToken : undefined,
        apiKey: mapConfig.provider === 'geoapify' ? mapConfig.accessToken : undefined,
        alternatives: mapConfig.provider === 'mapbox' ? false : undefined,
        geometries: mapConfig.provider === 'mapbox' ? 'geojson' : undefined,
        overview: mapConfig.provider === 'mapbox' ? 'simplified' : undefined,
        steps: mapConfig.provider === 'mapbox' ? false : undefined
    }
});

export default directionsApi;
