import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../../authentication/reducers/";
import { Collection } from '../../models/collections';

@Component({
  selector: 'main-item-collections',
  templateUrl: './main-item-collections.component.html',
  styleUrls: ['./main-item-collections.component.styl']
})
export class MainItemCollectionsComponent implements OnInit {

  collection:Collection;
  user$:Observable<string> = this.store.pipe(select(fromAuth.getUser));
  
  constructor(private router: ActivatedRoute, private collectionsService:CollectionService,
    private store: Store<fromAuth.State>) { 
    this.collection = new Collection();
  }

  ngOnInit() {
    let id:string;
    this.router.params.subscribe( (params: Params) => { 
      id = params.id 
      this.user$.subscribe(user => {
        this.collectionsService.getCollection(user, id).then(val=>{
          this.collection = new Collection();
          let obj = val.val();
          this.collection = {
            key: obj.key,
            items: this.convert2ItemsArray(obj),
            name: obj.name
          };
        }).catch(error=>{
          console.log(error);
        });
      });
      });
  }


  private convert2ItemsArray(obj: any): any {
    if(obj.items){
      return Object.keys(obj.items).map(function (personNamedIndex) {
        let person = obj.items[personNamedIndex];
        return person;
      });
    }
    else
      return null;
  }
}
