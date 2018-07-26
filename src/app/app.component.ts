import { Component } from '@angular/core';

@Component({
  selector: 'books-store',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  
  stateAside : string;

  closeAside(state){
    this.stateAside=state;
  }
}
