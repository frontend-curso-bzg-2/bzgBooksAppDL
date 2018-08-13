import * as fromRoot from "../../reducer/reducer";
import * as fromAuth from "./auth";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State extends fromRoot.State{
    auth: fromAuth.State;
}

export const reducers = fromRoot.reducers;

export const selectAuthState= createFeatureSelector<fromAuth.State>("auth");

export const getLoggedIn= createSelector(
    selectAuthState,
    fromAuth.getLoggedIn
);

export const getUser = createSelector(
    selectAuthState,
    fromAuth.getUserId
);

export const getError = createSelector(
    selectAuthState,
    fromAuth.getError
);

export const getPendding = createSelector(
    selectAuthState,
    fromAuth.getPending
);