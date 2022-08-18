import { RecipeModel } from "./recipe.model"

export class RecipeService{

    private recipes: RecipeModel[] = [
        new RecipeModel('A Test Recipe', 'This is simply a test', 
          'https://www.vegrecipesofindia.com/wp-content/uploads/2018/06/murukku-recipe-1a.jpg'),
          new RecipeModel('Another Test Recipe', 'This is simply a test', 
          'https://www.vegrecipesofindia.com/wp-content/uploads/2018/06/murukku-recipe-1a.jpg')
      ]

      getRecipes(){
        return this.recipes.slice();
      }

}