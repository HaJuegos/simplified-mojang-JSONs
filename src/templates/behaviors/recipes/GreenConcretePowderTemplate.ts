import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const GreenConcretePowderTemplate = createBPRecipe({
    idRecipe: "minecraft:green_concrete_powder",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "concrete_powder",
        ingredients: [
            {
                item: "minecraft:green_dye"
            },
            {
                item: "minecraft:sand",
                data: 0
            },
            {
                item: "minecraft:sand",
                data: 0
            },
            {
                item: "minecraft:sand",
                data: 0
            },
            {
                item: "minecraft:sand",
                data: 0
            },
            {
                item: "minecraft:gravel"
            },
            {
                item: "minecraft:gravel"
            },
            {
                item: "minecraft:gravel"
            },
            {
                item: "minecraft:gravel"
            }
        ],
        unlock: [
            {
                item: "minecraft:gravel"
            },
            {
                item: "minecraft:sand",
                data: 0
            }
        ],
        result: {
            item: "minecraft:green_concrete_powder",
            count: 8
        }
    }
});
