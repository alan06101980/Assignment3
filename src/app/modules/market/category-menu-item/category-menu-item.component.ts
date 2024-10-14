import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrl: './category-menu-item.component.css'
})
export class CategoryMenuItemComponent {

  @Input() categoryName: string = "";

}
