import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewTurtleMasterGlowstoneDustTemplate = createBPRecipe({
    idRecipe: "minecraft:brew_turtleMaster_glowstone_dust",
    typeRecipe: TypeRecipesVanillaEnums.RecipeBrewingMix,
    brewingMix: {
        input: "minecraft:potion_type:turtle_master",
        reagent: "minecraft:glowstone_dust",
        output: "minecraft:potion_type:strong_turtle_master"
    }
});
