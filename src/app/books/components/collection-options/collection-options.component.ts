import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Collection } from '../../../collections/models/collections';
import { CollectionService } from '../../../collections/services/collection.service';
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../../authentication/reducers/";

@Component({
  selector: 'collection-options',
  templateUrl: './collection-options.component.html',
  styleUrls: ['./collection-options.component.styl']
})
export class CollectionOptionsComponent implements OnInit {
  collectionList: Observable<Collection[]>;
  user$:Observable<string> = this.store.pipe(select(fromAuth.getUser));
  constructor(private collectionService: CollectionService, private store: Store<fromAuth.State>) { }

  ngOnInit() {
    this.user$.subscribe(user => {
      this.collectionList = this.collectionService.getList(user);
    });
  }

}
