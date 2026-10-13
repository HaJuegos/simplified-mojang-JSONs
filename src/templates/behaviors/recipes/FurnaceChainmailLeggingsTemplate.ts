import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceChainmailLeggingsTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_chainmail_leggings",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:chainmail_leggings"
            }
        ],
        targetBlocks: [
            "furnace",
            "blast_furnace"
        ],
        input: "minecraft:chainmail_leggings",
        output: "minecraft:iron_nugget",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 110
    }
});
