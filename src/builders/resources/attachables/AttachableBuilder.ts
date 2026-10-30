import { AttachableBaseParams, FormatVersionAttachList } from "../../../types/resources/attachables/AttachableTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase que estructura la creacion de un nuevo Attachable en un RP con una base fija.
 * @class ResourceAttachableBuilder
 * @author HaJuegos - 29-10-2026
 * @export
 */
export class ResourceAttachableBuilder {
    /**
     * Version del format version que tomara en concreto el Attachable. Por defecto siempre sera el "1.10.0".
     * @type {FormatVersionAttachList}
     * @private
     */
    private attachableVersion: FormatVersionAttachList = FormatVersionAttachList.MostRecent;

    /**
     * ID del Attachable en cuestion. Por defecto, siempre sera un placeholder.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly idAttach: string = "ha:test";

    /**
     * (Opcional) Los datos dentro del Attachable a crear en concreto.
     * @type {(AttachableBaseParams | undefined)}
     * @private
     */
    private attachableData: AttachableBaseParams | undefined;

    /**
     * Parametros iniciales y eventos de la clase para la iniciar la creacion de un nuevo Attachable.
     * @param {string} idAttach ID en concreto a crear.
     * @author HaJuegos - 29-10-2026 
     * @constructor
     * @protected
     */
    protected constructor (idAttach: string) {
        this.idAttach = idAttach;
    }

    /**
     * Metodo principal auxiliar que asigna la version del format version en concreto del Attachable.
     * @param {FormatVersionAttachList} newVersion La nueva version a tomar.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 29-10-2026 
     * @protected
     */
    protected setVersionAttachable(newVersion: FormatVersionAttachList): this {
        this.attachableVersion = newVersion;

        return this;
    }

    /**
     * Metodo principal auxiliar que asigna los datos o parametros asignados al Attachable en concreto.
     * @param {AttachableBaseParams} params Lista de parametros asignados en concreto.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 29-10-2026 
     * @protected
     */
    protected setDataAttachable(params: AttachableBaseParams): this {
        this.attachableData = params;

        return this;
    }

    /**
    * Metodo principal que construye la estructura del attachable.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
    * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
    * @returns {string | Record<string, unknown>} Devuelve el attachable listo en sus versiones respectivas. 
    * @author HaJuegos - 29-10-2026  
    * @protected
    */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        const { scripts, spawnEgg, ...rest } = this.attachableData ?? {};

        const preAttach = {
            format_version: this.attachableVersion,
            "minecraft:attachable": {
                description: {
                    identifier: this.idAttach,
                    ...SnakeCase.shallowSnakeCase(rest),
                    ...(scripts && { scripts: SnakeCase.shallowSnakeCase(scripts) }),
                    ...(spawnEgg && { spawn_egg: SnakeCase.shallowSnakeCase(spawnEgg) }),
                }
            }
        };

        const finalObj = Object.freeze(preAttach);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}