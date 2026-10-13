import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BambooChestRaftTemplate = createBPRecipe({
    idRecipe: "minecraft:bamboo_chest_raft",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:chest"
            },
            {
                item: "minecraft:boat",
                data: 7
            }
        ],
        unlock: [
            {
                item: "minecraft:boat",
                data: 7
            }
        ],
        result: {
            item: "minecraft:chest_boat",
            data: 7
        }
    }
});
