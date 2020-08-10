import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  // private places = [
  //   {
  //     id: 1, 
  //     title: "Torre Eifel", 
  //     imageURL: "https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg", 
  //     comments: ["Increible lugar", "Esta bonito"]
  //   }, 
  //   {
  //   id: 2, 
  //   title: "Estatua de la Libertad", 
  //   imageURL: "https://static.anuevayork.com/wp-content/uploads/2019/07/11084916/Como-visitar-la-Estatua-de-la-Libertad-en-Nueva-York-1500-2.jpg", 
  //   comments: ["Increible dos 3", "Esta bonito"]
  //   }
  // ]
  
  public places = []
  constructor( private placeService: PlacesService, private Router: Router) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces();
  }

  ionViewWillEnter(){
    this.places = this.placeService.getPlaces();
  }

  addNewPlace(){
    this.Router.navigate(['/agregarLugares'])
  }
  goToHome(){
    this.Router.navigate(['/home'])
  }

}
