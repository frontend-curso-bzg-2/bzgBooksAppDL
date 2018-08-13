import { Action } from "@ngrx/store";

export enum AuthActionTypes {
    Login = '[Auth] Login',
    Logout = '[Auth] Logout',
    LoginSuccess = '[Auth] Login Success',
    LoginFailure = '[Auth] Login Failure',
    LoginRedirect = '[Auth] Login Redirect'
}

export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor() { }
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess;

    constructor(public payload: string) { }
}

export class LoginFailure implements Action {
    readonly type = AuthActionTypes.LoginFailure;

    constructor(public payload: any) { }
}

export class LoginRedirect implements Action {
    readonly type = AuthActionTypes.LoginRedirect;
}

export class Logout implements Action {
    readonly type = AuthActionTypes.Logout;
    constructor() { }
}

export type AuthActions = Login | LoginFailure
    | LoginRedirect | LoginSuccess | Logout;