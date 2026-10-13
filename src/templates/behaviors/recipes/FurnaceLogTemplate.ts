import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceLogTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_log",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                // TODO: Falta la propiedad requerida 'item' segun el tipado.
                // TODO: La propiedad 'tag' no existe en el tipado.
                tag: "minecraft:logs_that_burn"
            }
        ],
        targetBlocks: [
            "furnace"
        ],
        // TODO: Se esperaba un texto y llego un objeto.
        input: {
            tag: "minecraft:logs_that_burn"
        },
        output: "minecraft:coal:1",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 90
    }
});
