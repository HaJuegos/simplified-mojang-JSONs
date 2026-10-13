import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceStainedHardenedClay12Template = createBPRecipe({
    idRecipe: "minecraft:furnace_stained_hardened_clay12",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:brown_terracotta"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:brown_terracotta",
        output: "minecraft:brown_glazed_terracotta",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 490
    }
});
