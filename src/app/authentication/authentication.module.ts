import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from './routes.authentication';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule } from "@angular/forms";
import { LoginFormComponent } from './components/login-form/login-form.component';
import { environment } from '../../environments/environment';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthenticationModule { }
