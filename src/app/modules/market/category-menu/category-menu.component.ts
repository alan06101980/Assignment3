import { Component, Input } from '@angular/core';
import { Category } from '../../../model';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.css'
})
export class CategoryMenuComponent {

  @Input() categories: Category[] = [];

}
