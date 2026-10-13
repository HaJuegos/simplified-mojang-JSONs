import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const BrownConcretePowderFromCocoaBeansTemplate = createBPRecipe({
    idRecipe: "minecraft:brown_concrete_powder_from_cocoa_beans",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        group: "concrete_powder",
        priority: 1,
        ingredients: [
            {
                item: "minecraft:cocoa_beans"
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
            item: "minecraft:brown_concrete_powder",
            count: 8
        }
    }
});
