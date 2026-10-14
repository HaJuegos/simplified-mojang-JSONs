import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceIronNautilusArmorTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_iron_nautilus_armor",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:iron_nautilus_armor"
            }
        ],
        targetBlocks: [
            "furnace",
            "blast_furnace"
        ],
        input: "minecraft:iron_nautilus_armor",
        output: "minecraft:iron_nugget",
        priority: 110
    }
});
