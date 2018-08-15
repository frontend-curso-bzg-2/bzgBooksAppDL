import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Collection, ICollection } from "../../../collections/models/collections";
import { Observable } from 'rxjs';
import { CollectionService } from '../../../collections/services/collection.service';
import { ModalService } from '../../../modal/services';
import { Store, select } from '@ngrx/store';
import * as fromAuth from "../../../authentication/reducers/";

@Component({
  selector: 'collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.styl']
})
export class CollectionListComponent implements OnInit {

  collection : ICollection;
  collectionList: Observable<Collection[]>;
  user$:Observable<string> = this.store.pipe(select(fromAuth.getUser));

  constructor(private collectionService: CollectionService, private modalService: ModalService, 
    private store: Store<fromAuth.State>) {
    this.initializeCollection();
   }

   private initializeCollection(){
    this.collection = new Collection();
   }

  ngOnInit() {
    this.user$.subscribe(user => {
      this.collectionList = this.collectionService.getList(user);
    });
    
  }

  openModal(event: any, id: string) {
    event.preventDefault();
    this.modalService.open(id, true);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  agregarCollection(id: string) {
    this.modalService.close(id);
    this.user$.subscribe(user => {
      this.collectionService.addCollections(user, this.collection);
    });
    
    this.initializeCollection();
  }

  removeCollection(collection:Collection){
    this.user$.subscribe(user => {
      this.collectionService.removeCollection(user, collection);
    });
    
  }
  
}
