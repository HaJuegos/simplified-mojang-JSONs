import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CakeTemplate = createBPRecipe({
    idRecipe: "minecraft:cake",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "AAA",
            "BEB",
            "CCC"
        ],
        key: {
            A: {
                item: "minecraft:bucket",
                data: 1
            },
            B: {
                item: "minecraft:sugar"
            },
            C: {
                item: "minecraft:wheat"
            },
            E: {
                tag: "minecraft:egg"
            }
        },
        unlock: [
            {
                // TODO: Falta la propiedad requerida 'item' segun el tipado.
                // TODO: La propiedad 'tag' no existe en el tipado.
                tag: "minecraft:egg"
            }
        ],
        // TODO: Se esperaba un texto y llego una lista.
        result: [
            {
                item: "minecraft:cake"
            },
            {
                item: "minecraft:bucket",
                count: 3,
                data: 0
            }
        ]
    }
});
