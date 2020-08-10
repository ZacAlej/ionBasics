import { Injectable } from '@angular/core';
import { placeInterface } from './place.module'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: placeInterface[] = [
    {
      id: '1', 
      title: "Torre Eifel", 
      imageURL: "https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg", 
      comments: ["Increible lugar", "Esta bonito"]
    }, 
    {
    id: '2', 
    title: "Estatua de la Libertad", 
    imageURL: "https://static.anuevayork.com/wp-content/uploads/2019/07/11084916/Como-visitar-la-Estatua-de-la-Libertad-en-Nueva-York-1500-2.jpg", 
    comments: ["Increible dos 3", "Esta bonito"]
    }, 
    {
    id: '3', 
    title: "Awesome Place", 
    imageURL: "https://static.anuevayork.com/wp-content/uploads/2019/07/11084916/Como-visitar-la-Estatua-de-la-Libertad-en-Nueva-York-1500-2.jpg", 
    comments: []
    }
    
  ]
  constructor() { }

  getPlaces() {
    return [...this.places]
  }

  getPlace(placeId: String) {
    return {
      ...this.places.find( place =>{
        return place.id === placeId
      })
    }
  }

  addPlace(title: String, imageURL: String) {
    this.places.push({
      title, 
      imageURL, 
      comments:[], 
      id: this.places.length + 1 + ""
    })
  }

  deletePlace(placeId) {
    this.places = this.places.filter( place =>{
      return place.id !== placeId
    })
  }
}
