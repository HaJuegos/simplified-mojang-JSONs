import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceNetherrackTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_netherrack",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:netherrack"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        input: "minecraft:netherrack",
        output: "minecraft:netherbrick",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 170
    }
});
