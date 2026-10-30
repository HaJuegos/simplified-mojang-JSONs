import { EntityClientParams, FormatVersionListEntities } from "../../../types/resources/entity/EntityTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal para la estructuracion de una nueva client entity en un RP. 
 * @class ResourceEntityBuilder
 * @author HaJuegos - 30-10-2026
 * @export
 */
export class ResourceEntityBuilder {
    /**
     * Version del format version que tomara el entity en cuestion. Por defecto siempre sera la "1.10.0"
     * @type {FormatVersionListEntities}
     * @private
     */
    private entityVersion: FormatVersionListEntities = FormatVersionListEntities.MostRecent;

    /**
     * ID de la entity a crea en cuestion.
     * @type {string}
     * @private
     */
    private idEntity: string = "ha:test";

    /**
     * Datos asignados a la entidad en cuestion.
     * @type {?EntityClientParams}
     * @private
     */
    private entityData?: EntityClientParams;

    /**
     * Parametros principales y eventos para la definicion de un nuevo client entity.
     * @param {string} idEntity ID de la entidad en cuestion.
     * @author HaJuegos - 30-10-2026
     * @constructor
     * @protected
     */
    protected constructor (idEntity: string) {
        this.idEntity = idEntity;
    }

    /**
     * Metodo principal auxiliar que define el format version de la entidad en concreto a crear.
     * @param {FormatVersionListEntities} newVersion La nueva version a establecer.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 30-10-2026 
     * @protected
     */
    protected setVersionEntity(newVersion: FormatVersionListEntities): this {
        this.entityVersion = newVersion;

        return this;
    }

    /**
     * Metodo principal auxiliar que establece los parametros de la entidad en concreto.
     * @param {EntityClientParams} params Listado de parametros definidos en la plantilla base de la entidad.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 30-10-2026 
     * @protected
     */
    protected setEntityData(params: EntityClientParams): this {
        this.entityData = params;

        return this;
    }

    /**
    * Metodo principal que construye la estructura del entity.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
    * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
    * @returns {string | Record<string, unknown>} Devuelve el attachable listo en sus versiones respectivas. 
    * @author HaJuegos - 29-10-2026  
    * @protected
    */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        const { scripts, spawnEgg, ...rest } = this.entityData ?? {};

        const preEntity = {
            format_version: this.entityVersion,
            "minecraft:client_entity": {
                description: {
                    identifier: this.idEntity,
                    ...SnakeCase.shallowSnakeCase(rest),
                    ...(scripts && { scripts: SnakeCase.shallowSnakeCase(scripts) }),
                    ...(spawnEgg && { spawn_egg: SnakeCase.shallowSnakeCase(spawnEgg) }),
                }
            }
        };

        const finalObj = Object.freeze(preEntity);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}