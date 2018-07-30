import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../alerts/services/messages.service';

@Component({
  selector: 'core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.styl']
})
export class CoreComponent implements OnInit {

  stateAside: string;

  constructor(private alertServices:MessagesService) { }

  ngOnInit() {
    window.addEventListener("online", this.updateIndicator.bind(this));
    window.addEventListener("offline", this.updateIndicator.bind(this));
  }

  closeAside(state){
    this.stateAside = state;
  }

  updateIndicator(event){
    if(event.type=="online"){
      this.alertServices.message("Se ha establecido la conexión.","success");
    }else if(event.type=="offline"){
      this.alertServices.message("Se ha perdido la conexión.","error");
    }
  }
}