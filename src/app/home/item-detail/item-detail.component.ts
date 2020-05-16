import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { TextField } from 'tns-core-modules/ui/text-field'; 
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";



import { DataService, DataItem } from "../../shared/data.service";
import {Score } from "../../shared/score";

const firebase = require("nativescript-plugin-firebase/app");


@Component({
    selector: "ItemDetail",
    templateUrl: "./item-detail.component.html",
    styles: ['.b { font:bold 20px italic Seriff ; }']
})
export class ItemDetailComponent implements OnInit {
    item: DataItem;
    ansForm: FormGroup;
    answer:string;
    r:number;
    w:number;
    total:number;
    n:number;
    score:Score;
    s:string;
    push:boolean=true;
    
    scoreCollection = firebase.firestore().collection("scores");
  


    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private formBuilder: FormBuilder
    ) {

        this.ansForm = this.formBuilder.group({
                answer:  ['', Validators.required] 
                
                });
           
     }

    ngOnInit(): void {
       this.r=0;
       this.w=0;
       this.total=0;
        const id = +this._route.snapshot.params.id;
        this.item = this._data.getItem(id);
        this.n= +this._route.snapshot.params.id;
        console.log(this.n);

        
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }


    onAnswerChange(args) { 
        let textField = <TextField>args.object;        
        this.ansForm.patchValue({ answer: textField.text }); 
        
    }


    onExecute(){
        this.pushMe();
        this.onLock();
        
    }


    onLock() {

            this.s=JSON.stringify({points:this.total});
            this.score = JSON.parse(this.s);
            console.log(this.score);
            this.scoreCollection.add(this.score);

             TNSFancyAlert.showSuccess(
             "Success!",
             "Your response has been submitted",
             "OK!"
             ).then(() => {
             /* user pressed the button */
             });

            /*
            
           //  TO RETRIEVE DATA FROM FIREBASE note that the options object is optional, but you can use it to specify the source of data ("server", "cache", "default").
            this.scoreCollection.get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            });
            }); */

     }

    pushMe() {
            this.push = false;
      }

    

    onSubmit() {
        this.answer = JSON.stringify(this.ansForm.value)
        console.log(this.answer);


   

    if (this.n==1) {
     
        if (this.answer == '{"answer":"5.2.P"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
   
    this.total=this.r*10-this.w*2;
    
    
    
    
 }

 if (this.n==2){

        if (this.answer == '{"answer":"9.8.S"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
    
   
    
}

if (this.n==3) {

        if (this.answer == '{"answer":"7.6.N"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==4) {

        if (this.answer == '{"answer":"8.4.H"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==5) {

        if (this.answer == '{"answer":"6.7.M"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==6) {

        if (this.answer == '{"answer":"7.2.T"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==7) {

        if (this.answer == '{"answer":"5.7.C"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==8) {

        if (this.answer == '{"answer":"9.6.S"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==9) {

        if (this.answer == '{"answer":"8.3.M"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==10) {

        if (this.answer == '{"answer":"9.5.A"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==11) {

        if (this.answer == '{"answer":"6.3.V"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==12) {

        if (this.answer == '{"answer":"6.8.M"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==13) {

        if (this.answer == '{"answer":"4.5.R"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==14) {

        if (this.answer == '{"answer":"6.8.B"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 if (this.n==15) {

        if (this.answer == '{"answer":"5.3.D"}')
            {  if(this.r == 0)
                {this.r++;}
            console.log(this.r);}
        else
            {this.w++;
            console.log(this.w);}
    
    this.total=this.r*10-this.w*2;
 }

 

}



}








