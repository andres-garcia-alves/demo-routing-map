
export type MapProvider = 'mapbox' | 'geoapify';

const PROVIDER = (process.env.VUE_APP_MAP_PROVIDER as MapProvider) || 'mapbox';

interface MapConfig {
    provider: MapProvider;
    accessToken: string;
    baseUrl: string;
    styleUrl: string;
}

const getMapConfig = (): MapConfig => {
    if (PROVIDER === 'geoapify') {
        const apiKey = process.env.VUE_APP_GEOAPIFY_API_KEY || '';
        return {
            provider: 'geoapify',
            accessToken: apiKey,
            baseUrl: 'https://api.geoapify.com/v1',
            styleUrl: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${apiKey}`
        };
    }

    // Default to Mapbox
    return {
        provider: 'mapbox',
        accessToken: process.env.VUE_APP_MAPBOX_TOKEN || '',
        baseUrl: 'https://api.mapbox.com',
        styleUrl: 'mapbox://styles/mapbox/streets-v11'
    };
};

export const mapConfig = getMapConfig();
