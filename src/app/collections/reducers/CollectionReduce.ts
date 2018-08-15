import { CollectionActions, CollectionActionTypes } from "../actions/CollectionAction";
import { Collection } from "../models/collections";

export interface State {
    userId:string | null;
    collection : Collection | null;
}

export const initialState : State = {
    userId: null,
    collection: null
}

export function reducer(state = initialState, action: CollectionActions): State{
    switch(action.type){
        case CollectionActionTypes.InitializeCollectionNode:{
            return{
                ...state,
                userId: action.payload
            }
        }
        case CollectionActionTypes.LoadCollectionList:{
            return{
                ...state,
                userId: action.payload
            }
        }
        case CollectionActionTypes.SaveCollection:{
            return{
                ...state,
                collection: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export const getUserId = (state : State) => state.userId;
export const getCollection = (state: State) => state.collection;