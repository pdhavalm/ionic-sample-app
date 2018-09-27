import { Injectable } from '@angular/core';

import { Recipe } from '../models/recipe';
import { RECIPES } from '../mock/providers/mock-recipes';

@Injectable()
export class RecipesService {

  getRecipes(): Recipe[] {
      return RECIPES;
  } 

}