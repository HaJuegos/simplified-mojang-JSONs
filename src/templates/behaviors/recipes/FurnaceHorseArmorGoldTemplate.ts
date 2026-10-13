import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const FurnaceHorseArmorGoldTemplate = createBPRecipe({
    idRecipe: "minecraft:furnace_horse_armor_gold",
    typeRecipe: TypeRecipesVanillaEnums.RecipeFurnace,
    furnace: {
        unlock: [
            {
                item: "minecraft:horsearmorgold"
            }
        ],
        targetBlocks: [
            "furnace",
            "blast_furnace"
        ],
        input: "minecraft:horsearmorgold",
        output: "minecraft:gold_nugget",
        // TODO: La propiedad 'priority' no existe en el tipado de 'furnace'.
        priority: 130
    }
});
