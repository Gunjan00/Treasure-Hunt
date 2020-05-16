import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

    
  

import * as ApplicationSettings from "tns-core-modules/application-settings";

const firebase = require("nativescript-plugin-firebase/app");

const auth= firebase.auth(); 

import {User} from '../shared/user';
@Component({
    moduleId: module.id,
    selector: "rr-login",
    templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
    isAuthenticating = false;
    public user: User;

    public constructor(private router: RouterExtensions) {
        this.user = {
          "email":"",
          "password":""
        }
    }

    public ngOnInit() {
        if(ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/tabs"], { clearHistory: true });
        }
    }

    public login() {
      


     this.router.navigate(["/tabs"], { clearHistory: true });
     
     /**********firebase.login(
       {type: firebase.LoginType.PASSWORD,
        passwordOptions: {
         email: email,
         password:password
        }
       })
      .then(() => {
        this.isAuthenticating = true;
        ApplicationSettings.setBoolean("authenticated", true);
        this.router.navigate(["/home"], { clearHistory: true } );

      })
      .catch((message:any) => {
        this.isAuthenticating = false;
      });**********/
  }

}