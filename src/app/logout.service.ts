import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LogoutService {

  constructor(private afAuth: AngularFireAuth) { }

  logout(){
    this.afAuth.auth.signOut();
  }

}
