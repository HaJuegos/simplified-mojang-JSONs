import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceSpongeTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_sponge",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:sponge"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:wet_sponge",
        output: "minecraft:sponge",
        priority: 610
    }
});
