export type MapProvider = 'geoapify' | 'mapbox';

const PROVIDER = (import.meta.env.VITE_MAP_PROVIDER as MapProvider) || 'geoapify';

interface Config {
    accessToken: string;
    baseUrl: string;
    styleUrl: string;
    provider: MapProvider;
}

const getGeoapifyConfig = (): Config => {
    try {
        const apiKey = import.meta.env.VITE_GEOAPIFY_API_KEY || '';
        return {
            provider: 'geoapify',
            accessToken: apiKey,
            baseUrl: 'https://api.geoapify.com/v1',
            styleUrl: `https://maps.geoapify.com/v1/styles/osm-liberty/style.json?apiKey=${apiKey}`
        };
    } catch (error) {
        console.error("Error loading Geoapify config", error);
        throw error;
    }
};

const mapConfig: Config = PROVIDER === 'geoapify' 
    ? getGeoapifyConfig()
    : {
        provider: 'mapbox',
        accessToken: import.meta.env.VITE_MAPBOX_TOKEN || '',
        baseUrl: 'https://api.mapbox.com',
        styleUrl: 'mapbox://styles/mapbox/streets-v11'
    };

export { mapConfig };
