import axios from "axios";
import { mapConfig } from "../config/mapConfig";

const searchApi = axios.create({
    baseURL: mapConfig.provider === 'mapbox' 
        ? 'https://api.mapbox.com/geocoding/v5/mapbox.places'
        : 'https://api.geoapify.com/v1/geocode',
    params: {
        access_token: mapConfig.provider === 'mapbox' ? mapConfig.accessToken : undefined,
        apiKey: mapConfig.provider === 'geoapify' ? mapConfig.accessToken : undefined,
        language: 'es',
        limit: 5
    }
});

export default searchApi;
