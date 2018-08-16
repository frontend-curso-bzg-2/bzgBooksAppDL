import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../services/collection.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  
  constructor(private activatedRouter: ActivatedRoute, private router: Router, private collectionsService:CollectionService,
    private store: Store<fromAuth.State>, private collectionService: CollectionService) { 
    this.collection = new Collection();
  }

  ngOnInit() {
    let id:string;
    this.activatedRouter.params.subscribe( (params: Params) => { 
      id = params.id 
      this.user$.subscribe(user => {
        this.collectionsService.getCollection(user, id).subscribe(val=>{
          this.collection = new Collection();
          let obj = val;
          if(obj.length === 2){
            this.collection = {
              key: obj[0],
              items: null,              
              name: obj[1]
            };
          }else{
            this.collection = {
              key: obj[1],
              items: this.convert2ItemsArray(obj[0]),
              name: obj[2]
            };
          }
        });
      });
      });
  }

  removeBook2Collection(key:string, book:any){
    this.user$.subscribe(user => {
      this.collectionService.removeBook2Collection(user, key, book);
      this.router.navigate(['./main/collections/'+this.collection.key]);
    });
  }

  private convert2ItemsArray(obj: any): any {
    if(obj){
      return Object.keys(obj).map(function (personNamedIndex) {
        let person = obj[personNamedIndex];
        return person;
      });
    }
    else
      return null;
  }
}
