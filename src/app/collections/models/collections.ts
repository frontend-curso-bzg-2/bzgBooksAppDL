export interface ICollection{
    name: string;
    key: string;
    items: any[];
}

export class Collection implements ICollection{
    name: string;
    key: string;
    items: any[];
    constructor(){}
}