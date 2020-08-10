import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placesService: PlacesService, private Router: Router) { }

  ngOnInit() {
  }
  //Metodos
  saveNewPlace(title, imageURL){
    this.placesService.addPlace(title.value, imageURL.value)
    this.Router.navigate(['/places']);
    console.log(title.value, imageURL.value);
  }

}
