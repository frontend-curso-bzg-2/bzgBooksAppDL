import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Collection, ICollection } from "../../../collections/models/collections";
import { Observable } from 'rxjs';
import { CollectionService } from '../../../collections/services/collection.service';
import { ModalService } from '../../../modal/services';

@Component({
  selector: 'collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.styl']
})
export class CollectionListComponent implements OnInit {

  collection : ICollection;
  collectionList: Observable<Collection[]>;

  constructor(private collectionService: CollectionService, private modalService: ModalService) {
    this.initializeCollection();
   }

   private initializeCollection(){
    this.collection = new Collection();
   }

  ngOnInit() {
    this.collectionList = this.collectionService.getList();
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
    this.collectionService.addCollections(this.collection);
    this.initializeCollection();
  }

  removeCollection(collection:Collection){
    this.collectionService.removeCollection(collection);
  }
  
}
