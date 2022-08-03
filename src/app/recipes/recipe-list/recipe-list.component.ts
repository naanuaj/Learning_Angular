import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<RecipeModel>();
  recipes: RecipeModel[] = [
    new RecipeModel('A Test Recipe', 'This is simply a test', 
      'https://www.vegrecipesofindia.com/wp-content/uploads/2018/06/murukku-recipe-1a.jpg'),
      new RecipeModel('Another Test Recipe', 'This is simply a test', 
      'https://www.vegrecipesofindia.com/wp-content/uploads/2018/06/murukku-recipe-1a.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: RecipeModel) {
    this.recipeWasSelected.emit(recipe);
  }

}
