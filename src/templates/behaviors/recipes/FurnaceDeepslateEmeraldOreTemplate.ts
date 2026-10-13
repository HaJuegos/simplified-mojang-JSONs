import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceDeepslateEmeraldOreTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_deepslate_emerald_ore",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:deepslate_emerald_ore"
            }
        ],
        targetBlocks: [
            "furnace",
            "blast_furnace"
        ],
        input: "minecraft:deepslate_emerald_ore",
        output: "minecraft:emerald",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 270
    }
});
