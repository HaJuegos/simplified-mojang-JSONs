import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceIronChestplateTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_iron_chestplate",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:iron_chestplate"
            }
        ],
        targetBlocks: [
            "furnace",
            "blast_furnace"
        ],
        input: "minecraft:iron_chestplate",
        output: "minecraft:iron_nugget",
        priority: 110
    }
});
