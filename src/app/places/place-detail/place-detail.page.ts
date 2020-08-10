import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { placeInterface } from '../place.module';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: placeInterface;

  constructor(private ActivatedRoute: ActivatedRoute, private PlacesServices: PlacesService) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe( paramMap => {
      // Redirect
      const recipeId = paramMap.get('placeId');
      console.log(recipeId);
      this.place = this.PlacesServices.getPlace(recipeId);
    })
  }

}
