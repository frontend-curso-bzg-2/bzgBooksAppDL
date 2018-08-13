import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from './routes.authentication';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";

import { LoginFormComponent } from './components/login-form/login-form.component';
import { environment } from '../../environments/environment';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { reducer } from "./reducers/auth";
import { AlertsModule } from "../alerts/alerts.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    StoreModule.forFeature('auth', reducer),
    AlertsModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthenticationModule { }
