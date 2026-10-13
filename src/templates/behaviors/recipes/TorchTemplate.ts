import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const TorchTemplate = createBPRecipe({
    idRecipe: "minecraft:torch",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "X",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:stick"
            },
            X: {
                tag: "minecraft:coals"
            }
        },
        unlock: [
            {
                // TODO: Falta la propiedad requerida 'item' segun el tipado.
                // TODO: La propiedad 'tag' no existe en el tipado.
                tag: "minecraft:coals"
            },
            {
                item: "minecraft:stick"
            },
            {
                // TODO: Falta la propiedad requerida 'item' segun el tipado.
                // TODO: La propiedad 'tag' no existe en el tipado.
                tag: "minecraft:is_pickaxe"
            }
        ],
        result: {
            item: "minecraft:torch",
            count: 4
        },
        priority: -1
    }
});
