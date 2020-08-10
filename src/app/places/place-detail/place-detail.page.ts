import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../places.service';
import { placeInterface } from '../place.module';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: placeInterface;

  constructor(private ActivatedRoute: ActivatedRoute, private PlacesServices: PlacesService, private Router: Router, private alertController: AlertController) { }

  ngOnInit() {
    this.ActivatedRoute.paramMap.subscribe( paramMap => {
      // Redirect
      const recipeId = paramMap.get('placeId');
      console.log(recipeId);
      this.place = this.PlacesServices.getPlace(recipeId);
    })
  }

  async deletePlace(){
    console.log("Borrado");
    const alertElement = await this.alertController.create(
      {
      header: 'Estas seguro de eliminar?',
      message: 'Se cudadoso',
      buttons: [ 
        {
        text: 'Cancelar',
        role: 'cancel'
      },
      {
        text: 'Borrar',
        handler: () =>{
          this.PlacesServices.deletePlace(this.place.id);
          this.Router.navigate(['./places']);
        }
      } 
    ]
    });
    await alertElement.present()
  }

}
