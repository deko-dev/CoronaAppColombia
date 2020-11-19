import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public usuario: any={};


  constructor(
    private auth: AngularFireAuth
  ) { 
    this.auth.authState
        .subscribe( (user) => {

          if( !user ){
            return;
          }

          this.usuario.name = user.displayName;
          this.usuario.uid = user.uid;

          
        })
  }


  login( proveedor:string ) {

    if( proveedor === 'google' ) {
      this.auth.signInWithPopup( new auth.GoogleAuthProvider() );
    }else if( proveedor === "twitter" ){ 
      this.auth.signInWithPopup(new auth.TwitterAuthProvider()); 
    }


  }


  logout() {
    this.usuario = {};
    this.auth.signOut();
  }


}
