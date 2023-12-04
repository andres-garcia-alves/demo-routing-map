import { Feature } from "@/interfaces/places";

export interface PlacesStateInterface {
    isLoading: boolean;
    userLocation?: [number, number]; // lng, lat
    isLoadingPlaces: boolean;
    places: Feature[];
}

function state(): PlacesStateInterface {
    return {
        isLoading: true,
        userLocation: undefined,
        isLoadingPlaces: false,
        places: []
    }
}

export default state;
