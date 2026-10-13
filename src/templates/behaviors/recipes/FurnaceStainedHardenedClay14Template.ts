import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceStainedHardenedClay14Template = createBPRecipe({
    idRecipe: "minecraft:furnace_stained_hardened_clay14",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:red_terracotta"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:red_terracotta",
        output: "minecraft:red_glazed_terracotta",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 510
    }
});
