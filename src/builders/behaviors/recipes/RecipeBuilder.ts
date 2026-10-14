import { FurnaceBlockEnum, RecipeBrewingTypes, RecipeFurnaceTypes, RecipeShaped, RecipeShapeless, RecipeSmithing, RecipeSmithingTrim, TagsRecipesGlobalEnums, TypeRecipesVanillaEnums } from "../../../types/behaviors/recipes/RecipeTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal de base para la creacion de una receta a base de una plantilla fija y simplificada.
 * @class BehaviorRecipeBuilder
 * @author HaJuegos - 11-10-2026
 * @export
 */
export class BehaviorRecipeBuilder {
    /**
     * Format version mas reciente de la receta en cuestion.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly versionRecipe: string = "1.26.50";

    /**
     * ID de la receta que tendra en cuestion.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly idRecipe: string = "ha:test_recipe";

    /**
     * Tipo de receta en cuestion a crear.
     * @type {TypeRecipesVanillaEnums}
     * @readonly
     * @private
     */
    private readonly typeRecipe: TypeRecipesVanillaEnums;

    /**
     * Todos los datos para la creacion de una receta de un estandarte de pociones. Separado por tipos.
     * @type {(Record<string, RecipeBrewingTypes> | undefined)}
     * @private
     */
    private recipeBrewing: Record<string, RecipeBrewingTypes> | undefined;

    /**
     * Todos los datos para la creacion de una receta que requiere cocinarse.
     * @type {(RecipeFurnaceTypes | undefined)}
     * @private
     */
    private recipeFurnace: RecipeFurnaceTypes | undefined;

    /**
     * Todos los datos para la creacion de una receta con forma a crear.
     * @type {(RecipeShaped | undefined)}
     * @private
     */
    private recipeShaped: RecipeShaped | undefined;

    /**
     * Todos los datos para la creacion de una receta sin forma a crear.
     * @type {(RecipeShapeless | undefined)}
     * @private
     */
    private recipeShapeless: RecipeShapeless | undefined;

    /**
     * Todos los datos para la creacion de una receta de la smithing table a crear.
     * @type {(RecipeSmithing | undefined)}
     * @private
     */
    private recipeSmithing: RecipeSmithing | RecipeSmithingTrim | undefined;

    /**
     * Eventos y parametros iniciales al momento de inicializar o llamar la clase.
     * @param {string} idRecipe ID de la receta en cuestion a crear.
     * @param {TypeRecipesVanillaEnums} typeRecipe Tipo de receta a crear.
     * @author HaJuegos - 11-10-2026 
     * @constructor
     * @protected
     */
    protected constructor (idRecipe: string, typeRecipe: TypeRecipesVanillaEnums) {
        this.idRecipe = idRecipe;
        this.typeRecipe = typeRecipe;
    }

    /**
     * Metodo principal auxiliar que almacena y crea los datos para la receta de estandarte de pociones a crear en cuestion.
     * @param {('mix' | 'container')} type Tipo de receta a crear.
     * @param {RecipeBrewingTypes} data Datos de la receta a crear.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de asignacion de propiedades.
     * @author HaJuegos - 11-10-2026 
     * @protected
     */
    protected createRecipeBrewing(type: 'mix' | 'container', data: RecipeBrewingTypes): this {
        if (!this.recipeBrewing) {
            this.recipeBrewing = {};
        }

        this.recipeBrewing[type] = data;

        return this;
    }

    /**
     * Metodo principal auxiliar que almacena y crea los datos para una receta que requiere cocinarse en cuestion.
     * @param {RecipeFurnaceTypes} data Datos de la receta a crear.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de asignacion de propiedades.
     * @author HaJuegos - 11-10-2026 
     * @protected
     */
    protected createRecipeFurnace(data: RecipeFurnaceTypes): this {
        this.recipeFurnace = data;

        return this;
    };

    /**
     * Metodo principal auxiliar que almacena y crea los datos para una receta que requiere una forma para crearse en cuestion.
     * @param {RecipeShaped} data Datos de la receta a crear.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de asignacion de propiedades.
     * @author HaJuegos - 11-10-2026 
     * @protected
     */
    protected createRecipeShaped(data: RecipeShaped): this {
        this.recipeShaped = data;

        return this;
    }

    /**
     * Metodo principal auxiliar que almacena y crea los datos para una receta que no requiere una forma para crearse en cuestion.
     * @param {RecipeShapeless} data Datos de la receta a crear.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de asignacion de propiedades.
     * @author HaJuegos - 11-10-2026 
     * @protected
     */
    protected createRecipeShapeless(data: RecipeShapeless): this {
        this.recipeShapeless = data;

        return this;
    };

    /**
     * Metodo principal auxiliar que almacena y crea los datos para una receta de la smithing table a crearse en cuestion.
     * @param {RecipeSmithing | RecipeSmithingTrim} data Datos de la receta a crear.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de asignacion de propiedades.
     * @author HaJuegos - 11-10-2026 
     * @protected
     */
    protected createRecipeSmithing(data: RecipeSmithing | RecipeSmithingTrim): this {
        this.recipeSmithing = data;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del manifest.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el manifest listo en sus versiones respectivas.
     * 
     * @throws {Error} Puede marcar error si, no se establece un tipo de receta a crear.
     * @throws {Error} Puede marcar error si, los datos de la receta estan vacios.
     * 
     * @author HaJuegos - 06-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.typeRecipe) {
            throw new Error("[CATLOG] Error: No se ha asignado un tipo de receta a la base en cuestion. Asigna una antes de iniciar.");
        }

        if (!this.recipeBrewing && !this.recipeFurnace && !this.recipeShaped && !this.recipeShapeless && !this.recipeSmithing) {
            throw new Error("[CATLOG] Error: No se ha definido ninguna propiedad de receta. Debes registrar al menos una receta (brewing, furnace, shaped, shapeless o smithing).");
        }

        const allFurnaceStaticTags: FurnaceBlockEnum[] = [
            "blast_furnace",
            "campfire",
            "furnace",
            "smoker",
            "soul_campfire"
        ];

        const allAditionalTagsStatics: TagsRecipesGlobalEnums[] = [
            "crafting_table",
            "stonecutter"
        ];

        const preRecipe: Record<string, unknown> = {
            format_version: this.versionRecipe,
            [this.typeRecipe]: {
                description: {
                    identifier: this.idRecipe
                }
            }
        };

        const recipeBody: Record<string, unknown> = {
            description: {
                identifier: this.idRecipe
            }
        };

        switch (this.typeRecipe) {
            case TypeRecipesVanillaEnums.RecipeBrewingContainer: {
                if (this.recipeBrewing && this.recipeBrewing["container"]) {
                    const { ...allData } = this.recipeBrewing['container'];

                    Object.assign(recipeBody, { ...allData, tags: ["brewing_stand"] });
                }
            } break;
            case TypeRecipesVanillaEnums.RecipeBrewingMix: {
                if (this.recipeBrewing && this.recipeBrewing["mix"]) {
                    const { ...allData } = this.recipeBrewing['mix'];

                    Object.assign(recipeBody, { ...allData, tags: ["brewing_stand"] });
                }
            } break;
            case TypeRecipesVanillaEnums.RecipeFurnace: {
                if (this.recipeFurnace) {
                    const { targetBlocks, ...restData } = this.recipeFurnace;
                    const finalTags = (targetBlocks.length == 1 && targetBlocks[0] == 'all') ? allFurnaceStaticTags : targetBlocks;

                    Object.assign(recipeBody, { ...restData, tags: finalTags });
                }
            } break;
            case TypeRecipesVanillaEnums.RecipeShaped: {
                if (this.recipeShaped) {
                    const { tags, ...allData } = this.recipeShaped;
                    const finalTags = (tags.length == 1 && tags[0] == 'all') ? allAditionalTagsStatics : tags;

                    Object.assign(recipeBody, { ...allData, tags: finalTags });
                }
            } break;
            case TypeRecipesVanillaEnums.RecipeShapeless: {
                if (this.recipeShapeless) {
                    const { tags, ...allData } = this.recipeShapeless;
                    const finalTags = (tags.length == 1 && tags[0] == 'all') ? allAditionalTagsStatics : tags;

                    Object.assign(recipeBody, { ...allData, tags: finalTags });
                }
            } break;
            case TypeRecipesVanillaEnums.RecipeSmithingTransform:
            case TypeRecipesVanillaEnums.RecipeSmithingTrim: {
                if (this.recipeSmithing) {
                    const { ...allData } = this.recipeSmithing;

                    Object.assign(recipeBody, { ...allData, tags: ["smithing_table"] });
                }
            } break;
        }

        preRecipe[this.typeRecipe] = recipeBody;

        const finalObj = Object.freeze(SnakeCase.deepSnakeCase(preRecipe) as Record<string, unknown>);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}