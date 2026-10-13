import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const CyanConcreteSlabTemplate = createBPRecipe({
    idRecipe: "minecraft:cyan_concrete_slab",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "###"
        ],
        key: {
            "#": {
                item: "minecraft:cyan_concrete"
            }
        },
        unlock: [
            {
                item: "minecraft:cyan_concrete"
            }
        ],
        result: {
            item: "minecraft:cyan_concrete_slab",
            count: 6
        }
    }
});
