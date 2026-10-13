import { createBPRecipe } from "../../../builders/behaviors/recipes/RecipeTemplateBuilder";
import { TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";

/**
 * Plantilla vanilla de la receta para la sobreescritura de la misma. Sus datos base ya estan definidos.
 * @type {FinalRecipeBuilderTemplate}
 * @author HaJuegos - 13-10-2026
 */
export const QuartzPillarTemplate = createBPRecipe({
    idRecipe: "minecraft:pillar_quartz_block",
    typeRecipe: TypeRecipesVanillaEnums.RecipeShaped,
    shaped: {
        tags: [
            "crafting_table"
        ],
        pattern: [
            "#",
            "#"
        ],
        key: {
            "#": {
                item: "minecraft:quartz_block",
                data: 0
            }
        },
        unlock: [
            {
                item: "minecraft:quartz_block",
                data: 0
            }
        ],
        result: {
            item: "minecraft:quartz_pillar",
            count: 2
        }
    }
});
