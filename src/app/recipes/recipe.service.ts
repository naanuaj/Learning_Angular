import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeModel } from "./recipe.model"

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<RecipeModel>();

    private recipes: RecipeModel[] = [
        new RecipeModel(
          'Mysore Masala Dose', 
          'This is authentic Karnataka Masala Dose', 
          'https://live.staticflickr.com/65535/50012104981_b3f3cb9018_b.jpg',
          [
            new Ingredient('Tiffin Rice', 25),
            new Ingredient('Potato', 2),
            new Ingredient('Coconut', 1),
            new Ingredient('Potato', 2)
          ]),

          new RecipeModel('South Indian Meals', 
          'Karnataka Meals to Rejuvenate', 
          'https://i0.wp.com/buffyfish.com/wp-content/uploads/2015/10/food-scaled.jpg?fit=1920%2C2560&ssl=1',
          [
            new Ingredient('Rice', 10),
            new Ingredient('Pumkin', 1),
            new Ingredient('Toor Dal', 2),
            new Ingredient('Maida', 2)
          ])
      ];

      constructor(private slService: ShoppingListService) {}


      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);

      }

}