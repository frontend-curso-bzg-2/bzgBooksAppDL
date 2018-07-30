import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertMessagesComponent } from './components/alert-messages/alert-messages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertMessagesComponent],
  exports: [AlertMessagesComponent]
})
export class AlertsModule { }
