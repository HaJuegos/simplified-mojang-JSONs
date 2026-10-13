import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewAwkwardTurtleHelmetTemplate = createBPRecipe({
    idRecipe: "minecraft:brew_awkward_turtle_helmet",
    typeRecipe: TypeRecipesVanillaEnums.RecipeBrewingMix,
    brewingMix: {
        input: "minecraft:potion_type:awkward",
        reagent: "minecraft:turtle_helmet",
        output: "minecraft:potion_type:turtle_master"
    }
});
