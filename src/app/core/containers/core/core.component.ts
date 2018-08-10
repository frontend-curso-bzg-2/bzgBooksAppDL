import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../../alerts/services/messages.service';
import { Store, select } from "@ngrx/store";
import * as fromRoot from "../../../reducer/reducer";
import { Observable } from 'rxjs';

@Component({
  selector: 'core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.styl']
})
export class CoreComponent implements OnInit {

  stateAside$:Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav));

  constructor(private alertServices:MessagesService, private store: Store<fromRoot.State>) { }

  ngOnInit() {
    window.addEventListener("online", this.updateIndicator.bind(this));
    window.addEventListener("offline", this.updateIndicator.bind(this));
  }

  updateIndicator(event){
    if(event.type=="online"){
      this.alertServices.message("Se ha establecido la conexión.","success");
    }else if(event.type=="offline"){
      this.alertServices.message("Se ha perdido la conexión.","error");
    }
  }
}