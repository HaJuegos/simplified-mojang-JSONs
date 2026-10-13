import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewAwkwardPhantomMembraneTemplate = createBPRecipe({
    idRecipe: "minecraft:brew_awkward_phantom_membrane",
    typeRecipe: TypeRecipesVanillaEnums.RecipeBrewingMix,
    brewingMix: {
        input: "minecraft:potion_type:awkward",
        reagent: "minecraft:phantom_membrane",
        output: "minecraft:potion_type:slow_falling"
    }
});
