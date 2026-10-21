import { CategoryParams } from "../../../types/behaviors/itemCatalog/ItemCatalogTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase fija de estructuracion para la creacion de un nuevo item catalog en un BP.
 * @class BehaviorItemCatalogBuilder
 * @author HaJuegos - 21-10-2026
 * @export
 */
export class BehaviorItemCatalogBuilder {
    /**
     * Version fija del format version que tomara este item catalog.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly versionCatalog: string = "1.21.60";

    /**
     * (Opcional) Lista de categorias a añadir al item catalog.
     * @type {(CategoryParams[] | undefined)}
     * @private
     */
    private categoriesList: CategoryParams[] | undefined;

    protected constructor () { }

    /**
     * Metodo auxiliar principal que asigna la lista de categorias creadas al item catalog.
     * @param {CategoryParams[]} params Lista de categorias a añadir.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 21-10-2026
     * @protected
     */
    protected setCategory(params: CategoryParams[]): this {
        this.categoriesList = params;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del item_catalog.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el item catalog listo en sus versiones respectivas. 
     * @author HaJuegos - 20-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        const preCatalog = {
            format_version: this.versionCatalog,
            "minecraft:crafting_items_catalog": {
                categories: this.categoriesList
            }
        };

        const finalObj = Object.freeze(SnakeCase.deepSnakeCase(preCatalog) as Record<string, unknown>);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}