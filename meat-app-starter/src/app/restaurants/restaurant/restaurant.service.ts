import { MenuItem } from './../../restaurant-detail/menu-item/menu-item.model';

import { ErrorHandler } from './../../app.error-handler';

import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import { MEAT_API } from './../../app.api';

import { Restaurant } from './restaurant.model';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'

import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantsService {

  constructor(private http: Http) { }
  /*
  *Método para busca restaurantes
  */
  restaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
  /*
  *Método para busca restaurantes tratar e buscar
  *para buscar o parametro de id de cada restaurante individialmente
  */
  restaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
  /*
  *Método para busca reviews de cada restaurante
  */
  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(resolve => resolve.json())
      .catch(ErrorHandler.handleError)
  }
   /*
  *Método para busca reviews de cada restaurante
  */
 menuOfRestaurant(id: string): Observable<MenuItem[]>{
   return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
   .map(resolve => resolve.json())
   .catch(ErrorHandler.handleError)
 }

}