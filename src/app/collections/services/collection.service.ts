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
  
  collectionsRef: AngularFireList<Collection>;
  user: firebase.User;

  constructor(private authFire: AngularFireAuth, private rdb: AngularFireDatabase, 
    private alertService: MessagesService) {
    authFire.authState
      .subscribe(        
        user => {
          if(user){
            this.user = user;
            this.collectionsRef = rdb.list('collections/' + user.uid);
          }
        }
      );
   }

  addCollections(collection: Collection) {
    let key = this.rdb.database.ref().child('collections/' + this.user.uid).push().key;
    collection.key=key;
    var updates = {};
    updates['/collections/' + this.user.uid+'/' + key] = collection;
    return this.rdb.database.ref().update(updates).then(_ => this.alertService.message("Agregado a Colleciones", "success"));
  }

  removeCollection(collection: any){
    var updates = {};
    updates['/collections/' + this.user.uid+'/' + collection.key] = collection;
    this.rdb.database.ref('/collections/' + this.user.uid+'/' + collection.key).remove().then(_ => this.alertService.message("Se ha removido la Collecion", "success") );
  }

  getList() : Observable<Collection[]>{
    if(this.collectionsRef)
      return this.collectionsRef.valueChanges();
    return new Observable<Collection[]>();
  }
}
