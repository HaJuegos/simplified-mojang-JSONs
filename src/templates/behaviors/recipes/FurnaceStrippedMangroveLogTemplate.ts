import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceStrippedMangroveLogTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_stripped_mangrove_log",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:stripped_mangrove_log"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:stripped_mangrove_log",
        output: "minecraft:coal:1",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 90
    }
});
