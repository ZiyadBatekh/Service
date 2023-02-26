import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';


import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService  {
  
  user$: Observable <firebase.User>;
  constructor(private afAuth:AngularFireAuth ) { 
    this.user$=this.afAuth.authState;
  }

  googleLogin() {                                          
    this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
 
}

