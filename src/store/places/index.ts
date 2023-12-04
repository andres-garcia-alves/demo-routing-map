import { Module } from 'vuex';

import { StateInterface } from '../index';
import state, { PlacesStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';


const placesModule: Module<PlacesStateInterface, StateInterface> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
}

export default placesModule;
