import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { MessagesService } from "../../alerts/services/messages.service";
import { Collection } from '../models/collections';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase, 
    private alertService: MessagesService) {
   }

  addCollections(userUID:string, collection: Collection) {
    let key = this.rdb.database.ref().child('collections/' + userUID).push().key;
    collection.key=key;
    var updates = {};
    updates['/collections/' + userUID+'/' + key] = collection;
    return this.rdb.database.ref().update(updates).then(_ => this.alertService.message("Agregado a Colleciones", "success"));
  }

  removeCollection(userUID:string, collection: any){
    var updates = {};
    updates['/collections/' + userUID+'/' + collection.key] = collection;
    this.rdb.database.ref('/collections/' + userUID+'/' + collection.key).remove().then(_ => this.alertService.message("Se ha removido la Collecion", "success") );
  }

  getList(userUID:string) : Observable<Collection[]>{
    let collectionsRef: AngularFireList<Collection> = this.rdb.list('collections/' + userUID);
    if(collectionsRef)
      return collectionsRef.valueChanges();
    return new Observable<Collection[]>();
  }

  getCollection(userUID:string, collectionId:string):Promise<any>{
    return this.rdb.database.ref('collections/' + userUID+'/'+collectionId).once("value");
  }
}
