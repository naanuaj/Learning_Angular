import { Ingredient } from "../shared/ingredient.model";

export class RecipeModel{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(name: string, desc: string, imgpath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = imgpath;
        this.ingredients = ingredients;
    }

}