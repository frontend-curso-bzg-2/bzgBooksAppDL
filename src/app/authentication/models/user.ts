export interface User {
    name: string;
    lastName?: string;
    userName?: string;
    email?: string;
    urlImage?: string; 
}

export interface IAuth{
    email:string;
    password:string;
}

export class Auth implements IAuth{
    email:string;
    password:string;

    constructor(){}
}