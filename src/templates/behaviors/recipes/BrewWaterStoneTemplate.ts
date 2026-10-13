import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewWaterStoneTemplate = createBPRecipe({
    idRecipe: "minecraft:brew_water_stone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeBrewingMix,
    brewingMix: {
        input: "minecraft:potion_type:water",
        reagent: "minecraft:stone",
        output: "minecraft:potion_type:mundane"
    }
});
