import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-full',
  templateUrl: './menu-full.component.html',
  styleUrls: ['./menu-full.component.css'],
})
export class MenuFullComponent {
  menuItems: MenuItem[] = [
    {
      id: 1,
      title: 'Chicken Burrito',
      category: 'Category 1',
      price: 10.99,
      img: 'assets/store-photos/chicken-burrito.jpg',
      description: 'Description of Item 1',
    },
    {
      id: 2,
      title: 'Flan (pudding)',
      category: 'Category 2',
      price: 12.99,
      img: 'assets/food/flan-niceshot.jpg',
      description: 'Description of Item 2',
    },
    {
      id: 3,
      title: 'Blueberry New York Cheesecake',
      category: 'Category 2',
      price: 12.99,
      img: 'assets/food/cheesecake.jpg',
      description: 'Description of Item 2',
    },
    {
      id: 4,
      title: 'Vegan Choco Chip Cookies',
      category: 'Category 2',
      price: 12.99,
      img: 'assets/store-photos/vegan-cookies.jpg',
      description: 'Description of Item 2',
    },
    {
      id: 5,
      title: 'Vegan Red Velvet',
      category: 'Category 2',
      price: 12.99,
      img: 'assets/store-photos/red-velvet.jpg',
      description: 'Description of Item 2',
    },
    {
      id: 4,
      title: 'Lemon Coconut Poundcake',
      category: 'Category 2',
      price: 12.99,
      img: 'assets/food/lemon-poundcake.jpg',
      description: 'Description of Item 2',
    },

    // Add more items here as needed
  ];
}

// Define a TypeScript interface for the menu item objects
interface MenuItem {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  description: string;
}
