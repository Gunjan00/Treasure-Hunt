import { Component, OnInit } from "@angular/core";


const firebase = require("nativescript-plugin-firebase/app");

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit {

    scoreCollection = firebase.firestore().collection("scores");

    constructor() {
        // Use the constructor to inject services.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }



    getData() {
        this.scoreCollection.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
                
            });
            });

      

    }
}
