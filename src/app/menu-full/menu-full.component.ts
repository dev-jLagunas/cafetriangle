import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-full',
  templateUrl: './menu-full.component.html',
  styleUrls: ['./menu-full.component.css'],
})
export class MenuFullComponent {
  constructor(private router: Router) {}

  menuItems: MenuItem[] = [
    {
      id: 1,
      title: 'Chicken Burrito',
      category: 'Lunch',
      price: 1200,
      img: 'assets/store-photos/chicken-burrito.jpg',
      description:
        'Tender chicken drenched in a tomato based red sauce filled with spices',
    },
    {
      id: 2,
      title: 'Flan (pudding)',
      category: 'Dessert',
      price: 550,
      img: 'assets/food/flan-niceshot.jpg',
      description:
        'Rich Mexican style pudding with a dark caramel sauce and raspberry topping.',
    },
    {
      id: 3,
      title: 'Matcha Crumble Cake',
      category: 'Dessert',
      price: 450,
      img: 'assets/food/matcha-crumble.jpg',
      description: 'Match crumble cake topped with a raspberry homemade jam.',
    },
    {
      id: 4,
      title: 'Vegan Choco Chip Cookies',
      category: 'Dessert',
      price: 300,
      img: 'assets/store-photos/vegan-cookies.jpg',
      description:
        'Simple but delicious vegan chocolate chip cookies for your soul.',
    },
    {
      id: 5,
      title: 'Carnitas Burrito',
      category: 'Lunch',
      price: 1200,
      img: 'assets/food/carnitas-burrito.jpg',
      description:
        '3 hours simmered pork infused with various spices and juices. Very tender!',
    },
    {
      id: 6,
      title: 'Quesadilla',
      category: 'Lunch',
      price: 800,
      img: 'assets/food/quesadillas.jpg',
      description:
        'Chicken or regular quesadilla available. Sides options also available.',
    },
    {
      id: 7,
      title: 'Tres Leches Cake',
      category: 'Dessert',
      price: 600,
      img: 'assets/food/tres-cake.jpg',
      description:
        'Our most popular dessert. A traditional Mexican spongecake soaked in milks.',
    },
    {
      id: 8,
      title: 'Banana Bread',
      category: 'Dessert',
      price: 550,
      img: 'assets/food/banana-bread.jpg',
      description:
        'Simple vegan banana bread with earl grey. A la mode available.',
    },
    {
      id: 9,
      title: 'Carrot Cupcake',
      category: 'Dessert',
      price: 500,
      img: 'assets/food/carrot-cupcake.jpg',
      description:
        'Perfectly spiced and sweetened with vegan buttercream frosting cupcake.',
    },
    {
      id: 10,
      title: 'Jamaica Soda',
      category: 'Drinks',
      price: 550,
      img: 'assets/drinks/Hibiscus.jpg',
      description:
        'A refreshing drink made with hibiscus syrup mixed with soda water',
    },
    {
      id: 10,
      title: 'Mexican Hot Chocolate',
      category: 'Drinks',
      price: 600,
      img: 'assets/drinks/hot-choco.jpg',
      description:
        'Authentic Mexican hot chocolate. Not too sweet with a hint of spices.',
    },
    {
      id: 11,
      title: 'Cafe Latte',
      category: 'Drinks',
      price: 600,
      img: 'assets/drinks/cafe-latte.jpg',
      description:
        'Made with custom bean blend. Short/Tall/Hot/Iced and Soy available.',
    },
    {
      id: 12,
      title: 'Matcha Latte',
      category: 'Drinks',
      price: 600,
      img: 'assets/drinks/matcha-latte.jpg',
      description:
        'Vibrant green tea latte. Short/Tall/Hot/Iced and Soy available.',
    },
    {
      id: 12,
      title: 'Black Sesame Latte',
      category: 'Drinks',
      price: 600,
      img: 'assets/drinks/black-latte.jpg',
      description:
        'Unique black sesame latte. Short/Tall/Hot/Iced and Soy available.',
    },
    {
      id: 13,
      title: 'Chai Latte',
      category: 'Drinks',
      price: 600,
      img: 'assets/drinks/chai-drip.jpg',
      description:
        'Made with our special blend of spices. Great sweet & spicy balance.',
    },
    {
      id: 14,
      title: 'Earl Grey Tea',
      category: 'Drinks',
      price: 600,
      img: 'assets/drinks/earl-tea.jpg',
      description:
        'A soft but vibrant flavor and smell. Short/Tall/Hot/Iced all available.',
    },
    {
      id: 15,
      title: 'Americano/Blend Coffee',
      category: 'Drinks',
      price: 600,
      img: 'assets/drinks/americano.jpg',
      description:
        'Made with locally roasted beans. Dark roast with 3 countries beans.',
    },
    {
      id: 16,
      title: 'Espresso Shot',
      category: 'Drinks',
      price: 600,
      img: 'assets/drinks/espresso.jpg',
      description:
        'Made with locally roasted beans. Dark roast with 3 countries beans.',
    },
  ];

  filteredItems: MenuItem[] = this.menuItems.slice();

  filterItems(category: string) {
    if (category === 'all') {
      this.filteredItems = this.menuItems.slice();
    } else {
      this.filteredItems = this.menuItems.filter(
        (item) => item.category === category
      );
    }
  }
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
