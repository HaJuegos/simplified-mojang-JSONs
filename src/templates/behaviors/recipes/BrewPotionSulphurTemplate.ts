import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrewPotionSulphurTemplate = createBPRecipe({
    idRecipe: "minecraft:brew_potion_sulphur",
    typeRecipe: TypeRecipesVanillaEnums.RecipeBrewingContainer,
    brewingContainer: {
        input: "minecraft:potion",
        reagent: "minecraft:gunpowder",
        output: "minecraft:splash_potion"
    }
});
