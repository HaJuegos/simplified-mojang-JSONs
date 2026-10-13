import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const PaintingTemplate = createBPRecipe({
    idRecipe: "minecraft:painting",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA",
            "ABA",
            "AAA"
        ],
        key: {
            A: {
                item: "minecraft:stick"
            },
            B: {
                tag: "minecraft:wool"
            }
        },
        unlock: [
            {
                item: "minecraft:white_wool"
            },
            {
                item: "minecraft:orange_wool"
            },
            {
                item: "minecraft:magenta_wool"
            },
            {
                item: "minecraft:light_blue_wool"
            },
            {
                item: "minecraft:yellow_wool"
            },
            {
                item: "minecraft:lime_wool"
            },
            {
                item: "minecraft:pink_wool"
            },
            {
                item: "minecraft:gray_wool"
            },
            {
                item: "minecraft:light_gray_wool"
            },
            {
                item: "minecraft:cyan_wool"
            },
            {
                item: "minecraft:purple_wool"
            },
            {
                item: "minecraft:blue_wool"
            },
            {
                item: "minecraft:brown_wool"
            },
            {
                item: "minecraft:green_wool"
            },
            {
                item: "minecraft:red_wool"
            },
            {
                item: "minecraft:black_wool"
            }
        ],
        result: {
            item: "painting",
            count: 1
        }
    }
});
