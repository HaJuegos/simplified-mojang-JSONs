import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const WaxingOxidizedCutCopperSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:waxing_oxidized_cut_copper_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShapeless,
    shapeless: {
        tags: [
            "crafting_table"
        ],
        ingredients: [
            {
                item: "minecraft:oxidized_cut_copper_slab"
            },
            {
                item: "minecraft:honeycomb"
            }
        ],
        unlock: [
            {
                item: "minecraft:oxidized_cut_copper_slab"
            }
        ],
        result: {
            item: "minecraft:waxed_oxidized_cut_copper_slab",
            count: 1
        },
        priority: 1
    }
});
