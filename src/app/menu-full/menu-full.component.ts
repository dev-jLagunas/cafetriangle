import { Component, Input, inject } from '@angular/core';
import { MenuProducts } from '../menu-products';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-full',
  templateUrl: './menu-full.component.html',
  styleUrls: ['./menu-full.component.css'],
})
export class MenuFullComponent {
  menuItems: MenuProducts[] = [];
  filtereditems: MenuProducts[] = [];

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.getAllMenuItems();
    this.filteredItems = this.menuItems.slice(); // Initialize filteredItems here
  }

  filteredItems: MenuProducts[] = this.menuItems.slice();

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
