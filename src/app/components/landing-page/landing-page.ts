import { Component } from '@angular/core';
import { Account } from '../../shared/services/account/account';

@Component({
  selector: 'app-landing-page',
  standalone: false,
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {
  public restaurantData: any = [];
  public searchText: string = '';
  public filteredItems: any = [];

  constructor(private accountService: Account) {
    this.restaurantData = [
      {
        id: 1,
        name: 'Made in India',
        imageUrl:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/41/83/a1/royal-ambiance.jpg?w=800&h=800&s=1',
        rating: 4.8,
        cuisines: ['Indian'],
        veg: true,
        nonVeg: false,
        noOfReviews: 188,
      },
      {
        id: 2,
        name: 'The Crest Sky Terrace',
        imageUrl:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/26/48/56/caption.jpg?w=800&h=800&s=1',
        rating: 5.0,
        cuisines: ['Italian', 'American'],
        veg: true,
        nonVeg: true,
        noOfReviews: 101,
      },
      {
        id: 3,
        name: 'Say Fontina',
        imageUrl:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/d6/e8/d7/interior.jpg?w=800&h=800&s=1',
        rating: 5.0,
        cuisines: ['Italian', 'Pizza'],
        veg: true,
        nonVeg: true,
        noOfReviews: 49,
      },
      {
        id: 4,
        name: 'Desi Vibes',
        imageUrl:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/2e/34/e6/dv-noida.jpg?w=800&h=800&s=1',
        rating: 4.1,
        cuisines: ['Indian'],
        veg: true,
        nonVeg: false,
        noOfReviews: 649,
      },
      {
        id: 5,
        name: 'Citrus Cafe',
        imageUrl:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/5b/70/2f/img-20191215-211806-largejpg.jpg?w=800&h=800&s=1',
        rating: 4.9,
        cuisines: ['Indian', 'Cafe'],
        veg: true,
        nonVeg: false,
        noOfReviews: 173,
      },
      {
        id: 6,
        name: 'The Great Kabab Factory',
        imageUrl:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/76/de/e3/the-great-kabab-factory.jpg?w=800&h=800&s=1',
        rating: 4.6,
        cuisines: ['Indian', 'Barbecue'],
        veg: true,
        nonVeg: true,
        noOfReviews: 200,
      },
      {
        id: 7,
        name: 'Barbeque Nation',
        imageUrl:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/32/55/a8/screenshot-20201018-233459.jpg?w=800&h=800&s=1',
        rating: 4.3,
        cuisines: ['Indian', 'Italina'],
        veg: true,
        nonVeg: true,
        noOfReviews: 698,
      },
      {
        id: 8,
        name: 'Rare Eastern Dining',
        imageUrl:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a3/7e/77/r-e-d-rate-eastern-dining.jpg?w=800&h=800&s=1',
        rating: 4.6,
        cuisines: ['Chinese', 'Asian'],
        veg: true,
        nonVeg: false,
        noOfReviews: 175,
      },
      {
        id: 9,
        name: 'Radisson Noida',
        imageUrl:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/5c/2e/84/caption.jpg?w=800&h=800&s=1',
        rating: 4.2,
        cuisines: ['Indian', 'International'],
        veg: true,
        nonVeg: true,
        noOfReviews: 121,
      },
      {
        id: 10,
        name: 'Burma Burma Restaurant & Tea Room',
        imageUrl:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/30/f9/84/bb-cover.jpg?w=800&h=800&s=1',
        rating: 4.7,
        cuisines: ['Asian', 'Burmese'],
        veg: true,
        nonVeg: false,
        noOfReviews: 73,
      },
    ];

    this.filteredItems = this.restaurantData;

    this.getAllRestaurants();
  }

  ngOnInit() {}

  onSearch() {
    const searchedItems = this.restaurantData.filter((item: any) =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );

    this.filteredItems = searchedItems;
  }

  clearSearch() {
    this.searchText = '';
    this.filteredItems = this.restaurantData;
  }

  getAllRestaurants() {
    this.accountService.getRestaurants().subscribe((restaurants) => {
      this.filteredItems = restaurants;
    });
  }
}
