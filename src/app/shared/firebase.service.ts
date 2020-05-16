const firebase = require("nativescript-plugin-firebase/app");
import {Injectable, NgZone} from "@angular/core";
import {User} from './user';
@Injectable()
export class FirebaseService {
  constructor(
    private ngZone: NgZone,
  ){

  }

  register(user: User) {
      return firebase.createUser({
        email: user.email,
        password: user.password
      }).then(
            function (result:any) {
              return JSON.stringify(result);
            },
            function (errorMessage:any) {
              alert(errorMessage);
            }
        )
    }

  login(user: User) {
    return firebase.login({
      type: firebase.LoginType.PASSWORD,
      passwordOptions: {
        email: user.email,
        password: user.password
      }
    }).then((result: any) => {
          return JSON.stringify(result);
      }, (errorMessage: any) => {
        alert(errorMessage);
      });
  }
  
}