import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const NameTagTemplate = createBPRecipe({
    idRecipe: "minecraft:name_tag",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            " X",
            "# "
        ],
        key: {
            "#": {
                item: "minecraft:paper"
            },
            X: {
                tag: "minecraft:metal_nuggets"
            }
        },
        unlock: [
            {
                item: "minecraft:name_tag"
            },
            {
                // TODO: Falta la propiedad requerida 'item' segun el tipado.
                // TODO: La propiedad 'tag' no existe en el tipado.
                tag: "minecraft:metal_nuggets"
            },
            {
                item: "minecraft:paper"
            }
        ],
        result: {
            item: "minecraft:name_tag"
        }
    }
});
