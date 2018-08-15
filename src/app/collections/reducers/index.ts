import * as fromRoot from "../../reducer/reducer";
import * as fromCollection from "./CollectionReduce";
import { createFeatureSelector, createSelector } from "../../../../node_modules/@ngrx/store";

export interface State extends fromRoot.State{
    coll: fromCollection.State;
}

export const reducers = fromRoot.reducers;

export const selectCollectionState = createFeatureSelector<fromCollection.State>("coll");

export const getUserId = createSelector(
    selectCollectionState,
    fromCollection.getUserId
);

export const getCollection = createSelector(
    selectCollectionState,
    fromCollection.getCollection
);