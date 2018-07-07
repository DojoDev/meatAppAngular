import { Restaurant } from './restaurant.model';


export class RestaurantsService{
    rests: Restaurant[] = [
        {
         id: "bread-bakery",
         name: "Bread & Bakery",
         category: "Padaria",
         deliveryEstimate: "25m",
         rating: 4.9,
         imagePath: "assets/img/restaurants/breadbakery.png"
       },
       {
         id: "burger-house",
         name: "Burger House",
         category: "Hamburgers",
         deliveryEstimate: "100m",
         rating: 3.5,
         imagePath: "assets/img/restaurants/burgerhouse.png"
       }
       ]
   
    constructor(){}


   restaurants(): Restaurant[] {
     return this.rests;
   }

}