import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../../authentication/reducers/";

@Component({
  selector: 'main-item-collections',
  templateUrl: './main-item-collections.component.html',
  styleUrls: ['./main-item-collections.component.styl']
})
export class MainItemCollectionsComponent implements OnInit {

  collection:any;
  user$:Observable<string> = this.store.pipe(select(fromAuth.getUser));
  
  constructor(private router: ActivatedRoute, private collectionsService:CollectionService,
    private store: Store<fromAuth.State>) { 
    
  }

  ngOnInit() {
    let id:string;
    this.router.params.subscribe( (params: Params) => { 
      id = params.id 
      this.user$.subscribe(user => {
        this.collectionsService.getCollection(user, id).then(val=>{
          this.collection = val.val();
        }).catch(error=>{
          console.log(error);
        });
      });
      });
  }

}
