import { ItemsFormatVersionList, MenuDescTypes } from "../../../types/behaviors/items/ItemsTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";
import { BehaviorItemsComponentsBuilder } from "./ItemsCompsBuilder";

/**
 * Clase principal que define la arquitectura fija de un archivo Item de un BP.
 * @class BehaviorItemsBuilder
 * @author HaJuegos - 14-10-2026
 * @export
 */
export class BehaviorItemsBuilder {
    /**
     * Format version fija del item.
     * @type {ItemsFormatVersionList}
     * @private
     */
    private versionItem: ItemsFormatVersionList = ItemsFormatVersionList.MostRecent;

    /**
     * Nombre del item en cuestion. Por defecto hay un texto de ejemplo.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly idItem: string = "ha:test";

    /**
     * Los parametros y datos principales para la categoria del inventario.
     * @type {(MenuDescTypes | undefined)}
     * @private
     */
    private menuData: MenuDescTypes | undefined;

    /**
     * Los componentes del item en concreto a crear.
     * @type {(BehaviorItemsComponentsBuilder<any>[] | undefined)}
     * @private
     */
    private comps: BehaviorItemsComponentsBuilder<any>[] | undefined;

    /**
     * Parametros iniciales cuando se crea el item.
     * @param {string} idItem ID del item a crear.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @protected
     */
    protected constructor (idItem: string) {
        this.idItem = idItem;
    }

    /**
     * Metodo principal auxiliar para fijar la version del item a crear.
     * @param {ItemsFormatVersionList} version ID de la version en concreto.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 14-10-2026 
     * @protected
     */
    protected setFormatVersion(version: ItemsFormatVersionList): this {
        this.versionItem = version;

        return this;
    }

    /**
     * Metodo principal auxiliar que asigna los datos principales para los parametros de la categoria del inventario.
     * @param {MenuDescTypes} params Datos en concreto.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 14-10-2026 
     * @protected
     */
    protected setMenuCategory(params: MenuDescTypes): this {
        this.menuData = params;

        return this;
    };

    /**
     * Metodo principal auxiliar que asigna los componentes al item a crear.
     * @param {BehaviorItemsComponentsBuilder<any>[]} comps Lista de componentes en concreto a asignar.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 14-10-2026
     * @protected
     */
    protected setComponents(comps: BehaviorItemsComponentsBuilder<any>[]): this {
        this.comps = comps;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del manifest.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el manifest listo en sus versiones respectivas.
     * 
     * @throws {Error} Puede marcar error si, no se establece un UUID fijo o random.
     * 
     * @author HaJuegos - 06-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.idItem) {
            throw new Error("[CATLOG] Error: El item no tiene un ID definido, ingresa un ID valido primero.");
        }

        const description: Record<string, unknown> = {
            identifier: this.idItem
        };

        if (this.menuData) {
            description.menu_category = SnakeCase.deepSnakeCase(this.menuData);
        }

        const componentsObjs: Record<string, unknown> = {};

        if (this.comps && Array.isArray(this.comps)) {
            for (const comp of this.comps) {
                Object.assign(componentsObjs, comp.build());
            }
        }

        const preItem: Record<string, unknown> = {
            format_version: this.versionItem,
            "minecraft:item": {
                description,
                ...(Object.keys(componentsObjs).length > 0 ? { components: componentsObjs } : {})
            }
        };

        const finalObj = Object.freeze(preItem);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}