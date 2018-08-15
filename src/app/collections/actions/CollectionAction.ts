import { Action } from "@ngrx/store";
import { Collection } from "../models/collections";

export enum CollectionActionTypes {
    LoadCollectionList = "[Collection] LoadCollectionList",
    SaveCollection = "[Collection] SaveCollection",
    InitializeCollectionNode = "[Collection] InitializeCollectionNode"
}

export class LoadCollectionList implements Action{
    readonly type = CollectionActionTypes.LoadCollectionList;
    constructor(public payload:string){}
}

export class SaveCollection implements Action {
    readonly type = CollectionActionTypes.SaveCollection;
    constructor(public payload: Collection){}
}

export class InitializeCollectionNode implements Action{
    readonly type = CollectionActionTypes.InitializeCollectionNode;
    constructor(public payload: string){}
}

export type CollectionActions = LoadCollectionList | SaveCollection 
    | InitializeCollectionNode;