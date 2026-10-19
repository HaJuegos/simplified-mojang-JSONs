import { MenuCategoryParams, PermutationsGroupsParams, StatesListTypes, TraitsListTypes } from "../../../types/behaviors/blocks/BlockTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";
import { BehaviorBlockComponentBuilder } from "./BlockCompBuilder";

/**
 * Clase principal que define la estructura fija de la creacion de un nuevo Bloque.
 * @class BehaviorBlockBuilder
 * @author HaJuegos - 18-10-2026
 * @export
 */
export class BehaviorBlockBuilder {
    /**
     * Version fija que tomara el format version del bloque.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly blockVersion: string = "1.26.50";

    /**
     * ID del bloque a crear en cuestion.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly idBlock: string = "ha:test";

    /**
     * (Opcional) Datos de la categoria del menu de creativo donde ira el bloque a crear.
     * @type {(MenuCategoryParams | undefined)}
     * @private
     */
    private menuCategoryData: MenuCategoryParams | undefined;

    /**
     * (Opcional) Datos de los estados que tiene el bloque a crear en cuestion.
     * @type {(StatesListTypes | undefined)}
     * @private
     */
    private statesData: StatesListTypes | undefined;

    /**
     * (Opcional) Datos de los rasgos o estados vanilla que tomara el bloque a crear en cuestion.
     * @type {(TraitsListTypes | undefined)}
     * @private
     */
    private traitsData: TraitsListTypes | undefined;

    /**
     * (Opcional) Lista de grupos de componentes a añadir al bloque y que se ejecutan por condicion.
     * @type {(PermutationsGroupsParams[] | undefined)}
     * @private
     */
    private permutationsData: PermutationsGroupsParams[] | undefined;

    /**
     * (Opcional) Lista de componentes fijos a añadir al bloque.
     * @type {(BehaviorBlockComponentBuilder<any>[] | undefined)}
     * @private
     */
    private components: BehaviorBlockComponentBuilder<any>[] | undefined;

    /**
     * Parametros iniciales y eventos de la clase cuando es llamada o inicializada. Para definir los datos iniciales de la creacion de un bloque. 
     * @param {string} idBlock ID del bloque a crear.
     * @author HaJuegos - 18-10-2026 
     * @constructor
     */
    constructor (idBlock: string) {
        this.idBlock = idBlock;
    }

    /**
     * Metodo auxiliar que define los parametros y datos sobre donde ira el bloque en el menu del inventario.
     * @param {MenuCategoryParams} params Parametros en cuestion.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 18-10-2026
     * @protected
     */
    protected setMenuCategory(params: MenuCategoryParams): this {
        this.menuCategoryData = params;

        return this;
    }

    /**
     * Metodo auxiliar que define los estados que tendra el bloque a crear.
     * @param {StatesListTypes} params Parametros en cuestion.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 18-10-2026
     * @protected
     */
    protected setStatesBlock(params: StatesListTypes): this {
        this.statesData = params;

        return this;
    }

    /**
     * Metodo auxiliar que define los rasgos o estados vanillas pre-creados que tomara el bloque en cuestion.
     * @param {TraitsListTypes} params Parametros en cuestion.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 18-10-2026
     * @protected
     */
    protected setTraitsBlock(params: TraitsListTypes): this {
        this.traitsData = params;

        return this;
    }

    /**
     * Metodo auxiliar que define los grupos de componentes a añadir con una condicion en el bloque en cuestion.
     * @param {PermutationsGroupsParams[]} params Parametros en cuestion.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 18-10-2026
     * @protected
     */
    protected setComponentsGroup(params: PermutationsGroupsParams[]): this {
        this.permutationsData = params;

        return this;
    }

    /**
     * Metodo auxiliar que define los componentes fijos del bloque en cuestion.
     * @param {BehaviorBlockComponentBuilder<any>[]} params Parametros en cuestion.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 18-10-2026
     * @protected
     */
    protected setComponents(params: BehaviorBlockComponentBuilder<any>[]): this {
        this.components = params;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del block.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el block listo en sus versiones respectivas.
     * 
     * @throws {Error} Puede marcar error si, no se establece un ID fijo al bloque.
     * 
     * @author HaJuegos - 18-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.idBlock) {
            throw new Error("[CATLOG] Error: El bloque no tiene un ID definido. Define uno primero.");
        }

        const description: Record<string, unknown> = {
            identifier: this.idBlock
        };

        if (this.menuCategoryData) {
            description.menu_category = SnakeCase.deepSnakeCase(this.menuCategoryData);
        }

        if (this.statesData) {
            description.states = SnakeCase.deepSnakeCase(this.statesData);
        }

        if (this.traitsData) {
            description.traits = SnakeCase.deepSnakeCase(this.traitsData);
        }

        const permutationsList: Record<string, unknown>[] = [];

        if (this.permutationsData && Array.isArray(this.permutationsData)) {
            for (const perm of this.permutationsData) {
                const permComps: Record<string, unknown> = {};

                if (perm.components && Array.isArray(perm.components)) {
                    for (const comp of perm.components) {
                        Object.assign(permComps, comp.build());
                    }
                }

                permutationsList.push({
                    condition: perm.condition,
                    components: permComps
                });
            }
        }

        const componentsObjs: Record<string, unknown> = {};

        if (this.components && Array.isArray(this.components)) {
            for (const comp of this.components) {
                Object.assign(componentsObjs, comp.build());
            }
        }

        const preItem: Record<string, unknown> = {
            format_version: this.blockVersion,
            "minecraft:block": {
                description,
                ...(permutationsList.length > 0 ? { permutations: permutationsList } : {}),
                ...(Object.keys(componentsObjs).length > 0 ? { components: componentsObjs } : {})
            }
        };

        const finalObj = Object.freeze(preItem);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}