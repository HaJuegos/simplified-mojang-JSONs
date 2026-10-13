import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const StoneHoeTemplate = createBPRecipe({
    idRecipe: "minecraft:stone_hoe",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "XX",
            " #",
            " #"
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            X: {
                tag: "minecraft:stone_tool_materials"
            }
        },
        unlock: [
            {
                // TODO: Falta la propiedad requerida 'item' segun el tipado.
                // TODO: La propiedad 'tag' no existe en el tipado.
                tag: "minecraft:stone_tool_materials"
            }
        ],
        result: {
            item: "minecraft:stone_hoe"
        },
        priority: -1
    }
});
