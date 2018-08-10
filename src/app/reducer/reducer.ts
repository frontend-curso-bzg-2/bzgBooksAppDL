import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer
} from "@ngrx/store";
import { storeFreeze } from "ngrx-store-freeze";
import { environment } from "../../environments/environment";
import * as fromCoreLayout from "../core/reducers/layout";

export interface State{
    layout: fromCoreLayout.State;
    router: null;
}

export const reducers : ActionReducerMap<State> = {
    layout: fromCoreLayout.reducer,
    router: null
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any):State {
        console.info('state', state);
        console.info('action', action);

        return reducer(state, action);
    }
}

export const metaReducer: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : [];
export const getLayoutState = createFeatureSelector<fromCoreLayout.State>("layout");
export const getShowSideNav = createSelector(
    getLayoutState,
    fromCoreLayout.getShowSideNav
);
