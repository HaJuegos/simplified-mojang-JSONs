import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BlueConcretePowderFromLapisLazuliTemplate = createBPRecipe({
    idRecipe: "minecraft:blue_concrete_powder_from_lapis_lazuli",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "concrete_powder",
        priority: 1,
        ingredients: [
            {
                item: "minecraft:lapis_lazuli"
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
                item: "minecraft:sand",
                data: 0
            },
            {
                item: "minecraft:gravel"
            }
        ],
        result: {
            item: "minecraft:blue_concrete_powder",
            count: 8
        }
    }
});
