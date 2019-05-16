import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe( 'A Test Recipe', 'Test Desc', 'https://live.staticflickr.com/5634/30169013305_71284ff495_b.jpg' ),
    new Recipe( 'A Test Recipe', 'Test Desc', 'https://live.staticflickr.com/5634/30169013305_71284ff495_b.jpg' ),


  ];
  constructor() { }

  ngOnInit() {
  }

}
