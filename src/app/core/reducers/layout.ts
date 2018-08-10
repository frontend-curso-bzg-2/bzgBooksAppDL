import { LayoutActions, LayoutActionTypes } from "../actions/layout";

export interface State {
    showSideNav: string
}

const initialState:State = {
    showSideNav: "open"
}

export function reducer (state: State = initialState, action: LayoutActions) : State {
    switch(action.type){
        case LayoutActionTypes.OpenSideNav:
            return {
                ...state,//hace una copia de los demas atributos
                showSideNav: "open"
            };
        case LayoutActionTypes.CloseSideNav:
            return {
                ...state,
                showSideNav: "close"
            };
        default: 
            return state;
    }
}

export const getShowSideNav= (state:State) => state.showSideNav;