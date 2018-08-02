import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { routes } from './routes.authentication';
import { LoginComponent } from './containers/login/login.component';
import { FormsModule } from "@angular/forms";
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), FormsModule
  ],
  declarations: [LoginComponent, LoginFormComponent]
})
export class AuthenticationModule { }
