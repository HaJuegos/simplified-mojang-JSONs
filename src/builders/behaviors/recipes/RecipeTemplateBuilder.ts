import { BPRecipeDefinition, BPRecipeOverrideDefinition, TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";
import { BehaviorRecipeBuilder } from "./RecipeBuilder";

/**
 * Clase final de la plantilla final para la creacion base de un archivo y su edicion post-edicion del mismo.
 * @class FinalRecipeBuilderTemplate
 * @extends {BehaviorRecipeBuilder}
 * @author HaJuegos - 12-10-2026
 */
class FinalRecipeBuilderTemplate extends BehaviorRecipeBuilder {
    /**
     * Eventos iniciales cuando la clase es llamada o inicializada. Con sus respectivos parametros iniciales para la creacion de la plantilla final.
     * @param {BPRecipeDefinition<any>} def Datos base finales de la plantilla.
     * @param {BPRecipeOverrideDefinition<any>} [over] (Opcionales) Datos modificados de la plantilla base.
     * @author HaJuegos - 12-10-2026
     * @constructor
     * @public
     */
    public constructor (def: BPRecipeDefinition<any>, over: BPRecipeOverrideDefinition<any> = {}) {
        super(def.idRecipe, def.typeRecipe);

        const anyDef = def as any;
        let baseData: any = {};

        if (!over.clearAllData) {
            switch (def.typeRecipe) {
                case TypeRecipesVanillaEnums.RecipeBrewingContainer: {
                    baseData = anyDef.brewingContainer;
                } break;
                case TypeRecipesVanillaEnums.RecipeBrewingMix: {
                    baseData = anyDef.brewingMix;
                } break;
                case TypeRecipesVanillaEnums.RecipeFurnace: {
                    baseData = anyDef.furnace;
                } break;
                case TypeRecipesVanillaEnums.RecipeShaped: {
                    baseData = anyDef.shaped;
                } break;
                case TypeRecipesVanillaEnums.RecipeShapeless: {
                    baseData = anyDef.shapeless;
                } break;
                case TypeRecipesVanillaEnums.RecipeSmithingTransform: {
                    baseData = anyDef.smithing;
                } break;
            }
        }

        const anyOver = over as any;
        let modifiedData: any = {};
        let aditionalData: any = {};

        switch (def.typeRecipe) {
            case TypeRecipesVanillaEnums.RecipeBrewingContainer:
                modifiedData = anyOver.brewingContainer;
                aditionalData = anyOver.add?.brewingContainer;
                break;
            case TypeRecipesVanillaEnums.RecipeBrewingMix:
                modifiedData = anyOver.brewingMix;
                aditionalData = anyOver.add?.brewingMix;
                break;
            case TypeRecipesVanillaEnums.RecipeFurnace:
                modifiedData = anyOver.furnace;
                aditionalData = anyOver.add?.furnace;
                break;
            case TypeRecipesVanillaEnums.RecipeShaped:
                modifiedData = anyOver.shaped;
                aditionalData = anyOver.add?.shaped;
                break;
            case TypeRecipesVanillaEnums.RecipeShapeless:
                modifiedData = anyOver.shapeless;
                aditionalData = anyOver.add?.shapeless;
                break;
            case TypeRecipesVanillaEnums.RecipeSmithingTransform:
                modifiedData = anyOver.smithing;
                aditionalData = anyOver.add?.smithing;
                break;
        }

        const finalData = {
            ...baseData,
            ...modifiedData,
            ...aditionalData
        };

        switch (def.typeRecipe) {
            case TypeRecipesVanillaEnums.RecipeBrewingContainer: {
                this.createRecipeBrewing('container', finalData);
            } break;
            case TypeRecipesVanillaEnums.RecipeBrewingMix: {
                this.createRecipeBrewing('mix', finalData);
            } break;
            case TypeRecipesVanillaEnums.RecipeFurnace: {
                this.createRecipeFurnace(finalData);
            } break;
            case TypeRecipesVanillaEnums.RecipeShaped: {
                this.createRecipeShaped(finalData);
            } break;
            case TypeRecipesVanillaEnums.RecipeShapeless: {
                this.createRecipeShapeless(finalData);
            } break;
            case TypeRecipesVanillaEnums.RecipeSmithingTransform: {
                this.createRecipeSmithing(finalData);
            } break;
        }
    }

    /**
     * Metodo final principal que convierte toda la plantilla definitiva en un JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura definitiva.
     * @author HaJuegos - 30-09-2026
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un recipe a partir de una definicion fija.
 * @template {TypeRecipesVanillaEnums} T Datos de los tipados generales de los tipos de recetas.
 * @param {BPRecipeDefinition<T>} def Definicion base de los parametros para la plantilla fija.
 * @returns {(over?: any) => FinalRecipeBuilderTemplate} Devuelve el objecto mismo para las modificaciones finales en caso de requerrise, a base de la plantilla fija creada.
 * @author HaJuegos - 12-10-2026
 * @export
 */
export function createBPRecipe<
    const T extends TypeRecipesVanillaEnums
>(def: BPRecipeDefinition<T>) {
    return (over: BPRecipeOverrideDefinition<T> = {}): FinalRecipeBuilderTemplate => {
        return new FinalRecipeBuilderTemplate(def as unknown as BPRecipeDefinition<any>, over as unknown as BPRecipeOverrideDefinition<any>);
    };
}