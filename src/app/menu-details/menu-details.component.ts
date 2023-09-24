import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { MenuProducts } from '../menu-products';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css'],
})
export class MenuDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  menuService = inject(MenuService);
  menuProduct: MenuProducts | undefined;

  constructor(private router: Router) {
    const menuId = Number(this.route.snapshot.params['id']);
    this.menuProduct = this.menuService.getMenuItemById(menuId);
  }

  goBack() {
    this.router.navigate(['/full_menu']);
  }
}
