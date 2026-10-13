import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewFireresistanceRedstoneTemplate = createBPRecipe({
    idRecipe: "minecraft:brew_fireresistance_redstone",
    typeRecipe: TypeRecipesVanillaEnums.RecipeBrewingMix,
    brewingMix: {
        input: "minecraft:potion_type:fire_resistance",
        reagent: "minecraft:redstone",
        output: "minecraft:potion_type:long_fire_resistance"
    }
});
