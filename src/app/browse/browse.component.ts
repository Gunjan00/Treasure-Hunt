import { Component, OnInit } from "@angular/core";
import { registerElement } from 'nativescript-angular/element-registry';
import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';


registerElement('MapView', () => MapView);



@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Use the "ngOnInit" handler to initialize data for the view.
    }


onMapReady = (event) => {
        let mapView = event.object as MapView;
        const NA_CENTER_LATITUDE = 19.076090;
        const NA_CENTER_LONGITUDE = 72.877426;

        mapView.latitude = NA_CENTER_LATITUDE;
        mapView.longitude = NA_CENTER_LONGITUDE;
        mapView.zoom = 5;


        let delhiCoordinates = {
            latitude: 	28.610001,
            longitude: 77.230003
        };

        let delhiMarker = new Marker();
        delhiMarker.position = Position.positionFromLatLng(delhiCoordinates.latitude, delhiCoordinates.longitude);
        delhiMarker.title = "Delhi";
        delhiMarker.snippet = "Id-5.3.D";
        delhiMarker.color = "#6B8E23";
        mapView.addMarker(delhiMarker);
	
    
    


   






 let parisCoordinates = {latitude:48.8566,longitude:2.3522};let parisMarker = new Marker();parisMarker.position = Position.positionFromLatLng(parisCoordinates.latitude, parisCoordinates.longitude);parisMarker.title = "paris";parisMarker.snippet ="Id-5.2.P";parisMarker.color = "#6B8E23";mapView.addMarker(parisMarker);
let singaporeCoordinates = {latitude:1.3521,longitude:103.8198};let singaporeMarker = new Marker();singaporeMarker.position = Position.positionFromLatLng(singaporeCoordinates.latitude, singaporeCoordinates.longitude);singaporeMarker.title = "singapore";singaporeMarker.snippet ="Id-9.8.S";singaporeMarker.color = "#6B8E23";mapView.addMarker(singaporeMarker);
let new_yorkCoordinates = {latitude:40.6976701,longitude:-74.2598679};let new_yorkMarker = new Marker();new_yorkMarker.position = Position.positionFromLatLng(new_yorkCoordinates.latitude, new_yorkCoordinates.longitude);new_yorkMarker.title = "new_york";new_yorkMarker.snippet ="Id-7.6.N";new_yorkMarker.color = "#6B8E23";mapView.addMarker(new_yorkMarker);
let hong_kongCoordinates = {latitude:22.3193,longitude:114.1694};let hong_kongMarker = new Marker();hong_kongMarker.position = Position.positionFromLatLng(hong_kongCoordinates.latitude, hong_kongCoordinates.longitude);hong_kongMarker.title = "hong_kong";hong_kongMarker.snippet ="Id-8.4.H";hong_kongMarker.color = "#6B8E23";mapView.addMarker(hong_kongMarker);
let mumbaiCoordinates = {latitude:19.076,longitude:72.8777};let mumbaiMarker = new Marker();mumbaiMarker.position = Position.positionFromLatLng(mumbaiCoordinates.latitude, mumbaiCoordinates.longitude);mumbaiMarker.title = "mumbai";mumbaiMarker.snippet ="Id-6.7.M";mumbaiMarker.color = "#6B8E23";mapView.addMarker(mumbaiMarker);
let londonCoordinates = {latitude:51.5074,longitude:0.1278};let londonMarker = new Marker();londonMarker.position = Position.positionFromLatLng(londonCoordinates.latitude, londonCoordinates.longitude);londonMarker.title = "london";londonMarker.snippet ="Id-6.2.L";londonMarker.color = "#6B8E23";mapView.addMarker(londonMarker);
let cairoCoordinates = {latitude:30.0444,longitude:31.2357};let cairoMarker = new Marker();cairoMarker.position = Position.positionFromLatLng(cairoCoordinates.latitude, cairoCoordinates.longitude);cairoMarker.title = "cairo";cairoMarker.snippet ="Id-5.7.C";cairoMarker.color = "#6B8E23";mapView.addMarker(cairoMarker);
let stockholmCoordinates = {latitude:59.3293,longitude:18.0686};let stockholmMarker = new Marker();stockholmMarker.position = Position.positionFromLatLng(stockholmCoordinates.latitude, stockholmCoordinates.longitude);stockholmMarker.title = "stockholm";stockholmMarker.snippet ="Id-9.6.S";stockholmMarker.color = "#6B8E23";mapView.addMarker(stockholmMarker);
let montrealCoordinates = {latitude:45.5017,longitude:73.5673};let montrealMarker = new Marker();montrealMarker.position = Position.positionFromLatLng(montrealCoordinates.latitude, montrealCoordinates.longitude);montrealMarker.title = "montreal";montrealMarker.snippet ="Id-8.3.M";montrealMarker.color = "#6B8E23";mapView.addMarker(montrealMarker);
let amsterdamCoordinates = {latitude:52.3667,longitude:4.8945};let amsterdamMarker = new Marker();amsterdamMarker.position = Position.positionFromLatLng(amsterdamCoordinates.latitude, amsterdamCoordinates.longitude);amsterdamMarker.title = "amsterdam";amsterdamMarker.snippet ="Id-9.5.A";amsterdamMarker.color = "#6B8E23";mapView.addMarker(amsterdamMarker);
let viennaCoordinates = {latitude:48.2082,longitude:16.3783};let viennaMarker = new Marker();viennaMarker.position = Position.positionFromLatLng(viennaCoordinates.latitude, viennaCoordinates.longitude);viennaMarker.title = "vienna";viennaMarker.snippet ="Id-6.3.V";viennaMarker.color = "#6B8E23";mapView.addMarker(viennaMarker);
let mexicoCoordinates = {latitude:23.3138245,longitude:-103.6485721};let mexicoMarker = new Marker();mexicoMarker.position = Position.positionFromLatLng(mexicoCoordinates.latitude, mexicoCoordinates.longitude);mexicoMarker.title = "mexico";mexicoMarker.snippet ="Id-6.8.M";mexicoMarker.color = "#6B8E23";mapView.addMarker(mexicoMarker);
let romeCoordinates = {latitude:41.9028,longitude:12.4964};let romeMarker = new Marker();romeMarker.position = Position.positionFromLatLng(romeCoordinates.latitude, romeCoordinates.longitude);romeMarker.title = "rome";romeMarker.snippet ="Id-4.5.R";romeMarker.color = "#6B8E23";mapView.addMarker(romeMarker);
let berlinCoordinates = {latitude:52.52,longitude:13.405};let berlinMarker = new Marker();berlinMarker.position = Position.positionFromLatLng(berlinCoordinates.latitude, berlinCoordinates.longitude);berlinMarker.title = "berlin";berlinMarker.snippet ="Id-6.8.B";berlinMarker.color = "#6B8E23";mapView.addMarker(berlinMarker);
/*let delhiCoordinates = {latitude:28.610001,,longitude:77.230003};let delhiMarker = new Marker();delhiMarker.position = Position.positionFromLatLng(delhiCoordinates.latitude, delhiCoordinates.longitude);delhiMarker.title = "delhi";delhiMarker.snippet ="Id-5.3.D";delhiMarker.color = "#6B8E23";mapView.addMarker(delhiMarker);  */
    
    
           
    
    
    
    
    }

}










