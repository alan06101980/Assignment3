import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit {

  categories : Category[]= [
    {name: 'Books'}, 
    {name: 'Electronics'}, 
    {name: 'Houses'}, 
    {name: 'Vehicles'}, 
    {name: 'Sports'},
  ];

  constructor() {

  }

  ngOnInit() {
    
  }
  
}
