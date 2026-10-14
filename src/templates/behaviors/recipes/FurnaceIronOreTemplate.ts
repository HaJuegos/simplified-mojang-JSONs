import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceIronOreTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_iron_ore",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:iron_ore"
            }
        ],
        targetBlocks: [
            "furnace",
            "blast_furnace"
        ],
        input: "minecraft:iron_ore",
        output: "minecraft:iron_ingot",
        priority: 100
    }
});
