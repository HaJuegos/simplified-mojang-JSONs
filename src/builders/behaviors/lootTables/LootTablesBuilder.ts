import { PoolsParamsTypes } from "../../../types/behaviors/lootTables/LootTablesTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal de base para la creacion de un loot table para Behavior Packs.
 * @class BehaviorLooTablesBuilder
 * @author HaJuegos - 08-10-2026
 * @export
 */
export class BehaviorLooTablesBuilder {
    /**
     * Lista de pools a asignar en el loot table en cuestion.
     * @type {PoolsParamsTypes[]}
     * @private
     */
    private pools: PoolsParamsTypes[] = [];

    protected constructor () { }

    /**
     * Metodo principal que asigna los pools requeridos a soltar en este loot table.
     * @param {PoolsParamsTypes[]} pools Lista de pools a registrar en el loot table.
     * @returns {this} Devuelve el mismo objecto por ser un metodo de propiedades.
     * @author HaJuegos - 08-10-2026
     * @protected
     */
    protected setPools(pools: PoolsParamsTypes[]): this {
        this.pools = pools;

        return this;
    }

    /**
     * Metodo principal que convierte toda la plantilla general a una JSON con estructura fija lista para su exportacion.
     * @param {boolean} stringify Si se establece en true, devuelve el objecto en formato de TXT listo para un JSON. 
     * @returns {string | Record<string, unknown>} Devuelve un string o un objecto readonly dependiendo el argumento asignado.
     * 
     * @throws {Error} Puede pasar error si, no se establece un ID al controllador de la animacion.
     * 
     * @author HaJuegos - 07-10-2026 
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        const preLootTable = {
            pools: this.pools
        };

        const finalObj = Object.freeze(SnakeCase.deepSnakeCase(preLootTable) as Record<string, unknown>);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}