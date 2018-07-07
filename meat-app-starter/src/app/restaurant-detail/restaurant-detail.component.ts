import { RestaurantsService } from './../restaurants/restaurant/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant

  constructor(private restaurantsService:RestaurantsService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.router.snapshot.params['id'])
    .subscribe(restaurant =>this.restaurant = restaurant)
  }

}
