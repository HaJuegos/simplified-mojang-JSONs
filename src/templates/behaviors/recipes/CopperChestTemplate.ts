import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CopperChestTemplate = createBPRecipe({
    idRecipe: "minecraft:copper_chest",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "XXX",
            "X#X",
            "XXX"
        ],
        key: {
            "#": {
                item: "minecraft:chest"
            },
            X: {
                item: "minecraft:copper_ingot"
            }
        },
        unlock: [
            {
                item: "minecraft:copper_chest"
            },
            {
                item: "minecraft:exposed_copper_chest"
            },
            {
                item: "minecraft:weathered_copper_chest"
            },
            {
                item: "minecraft:oxidized_copper_chest"
            },
            {
                item: "minecraft:waxed_copper_chest"
            },
            {
                item: "minecraft:waxed_exposed_copper_chest"
            },
            {
                item: "minecraft:waxed_weathered_copper_chest"
            },
            {
                item: "minecraft:waxed_oxidized_copper_chest"
            }
        ],
        result: {
            item: "minecraft:copper_chest"
        }
    }
});
