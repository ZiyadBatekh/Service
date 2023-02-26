import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ResturantsService {
  
  constructor(private db:AngularFireDatabase) { 
  }

  getResturants(){
   return this.db.list('/resturant');
   }

}
