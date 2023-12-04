import { createStore } from 'vuex';

import { MapStateInterface } from './map/state';
import { PlacesStateInterface } from './places/state';
import mapModule from './map';
import placesModule from './places';


export interface StateInterface {
    map: MapStateInterface,
    places: PlacesStateInterface
}

export default createStore<StateInterface>({
    modules: {
        map: mapModule,
        places: placesModule
    }
})
