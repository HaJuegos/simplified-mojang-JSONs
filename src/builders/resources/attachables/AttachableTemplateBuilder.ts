import { AttachableBaseParams, RPAttachableDefinition, RPAttachableOverride } from "../../../types/resources/attachables/AttachableTemplate";
import { ResourceAttachableBuilder } from "./AttachableBuilder";

/**
 * Clase definitiva que controla los eventos para la creacion de un nuevo Attachable, considerando los parametros de la plantilla base y luego los parametros a sobreescribir en post-edicion. Para finalmente, permitir la exportacion del mismo en formato JSON.
 * @class FinalRPAttachableTemplateBuilder
 * @extends {ResourceAttachableBuilder}
 * @author HaJuegos - 29-10-2026
 * @export
 */
export class FinalRPAttachableTemplateBuilder extends ResourceAttachableBuilder {
    /**
     * Eventos y parametros principales de la clase en concreto para crear un nuevo Attachable.
     * @param {RPAttachableDefinition} def Definiciones principales para la creacion de la plantilla base.
     * @param {RPAttachableOverride} over Definiciones post-edicion de la plantilla base creada.
     * @author HaJuegos - 29-10-2026
     * @constructor
     * @public
     */
    public constructor (def: RPAttachableDefinition, over: RPAttachableOverride) {
        super(def.idAttach);

        if (def.formatVersion) {
            this.setVersionAttachable(def.formatVersion);
        }

        let finalData: AttachableBaseParams = structuredClone(def.attachable);

        if (over.clearAllData) {
            finalData = over.add?.attachable ? structuredClone(over.add.attachable) : ({} as AttachableBaseParams);
        } else {
            if (over.changeAttachable) {
                finalData = this.deepMerge(finalData, over.changeAttachable);
            }

            if (over.remove) {
                finalData = this.applyRemove(finalData, over.remove);
            }

            if (over.add?.attachable) {
                finalData = this.deepMerge(finalData, over.add.attachable);
            }
        }

        this.setDataAttachable(finalData);
    }

    /**
     * Metodo auxiliar que valida si un valor es un objecto a considerar con datos o no.
     * @param {unknown} v Valor a considerar en concreto.
     * @returns {v is Record<string, unknown>} Devuelve si es un objecto con datos en cuestion.
     * @author HaJuegos - 29-10-2026 
     * @private
     */
    private isObj(v: unknown): v is Record<string, unknown> {
        return v != null && typeof v === "object" && !Array.isArray(v);
    }

    /**
     * Metodo auxiliar que valida y hace limpieza general cuando el parametro es modificar de la plantilla post-edicion.
     * @template T Valores en concreto a considerar.
     * @param {T} base Bases de datos a considerar.
     * @param {unknown} patch Ruta en concreto a considerar o cambiar.
     * @returns {T} Devuelve el objecto modificado con los datos requeridos.
     * @author HaJuegos - 29-10-2026 
     * @private
     */
    private deepMerge<T>(base: T, patch: unknown) {
        if (!this.isObj(base) || !this.isObj(patch)) {
            return (patch ?? base) as T;
        };

        const out: Record<string, unknown> = { ...base };

        for (const [k, v] of Object.entries(patch)) {
            out[k] = this.isObj(v) && this.isObj(out[k]) ? this.deepMerge(out[k], v) : v;
        }

        return out as T;
    }

    /**
     * Metodo auxiliar que integra la eliminacion profunda de datos aplicados en remove en la post-edicion en caso de eliminarse uno o varios datos a la vez.
     * @template T Datos a considerar en cuestion.
     * @param {T} base Base principal de datos a considerar.
     * @param {unknown} rm Lista de datos a remover en concreto.
     * @returns {T} Devuelve el nuevo objecto formateado correcto para la plantilla definitiva.
     * @author HaJuegos - 29-10-2026 
     * @private
     */
    private applyRemove<T>(base: T, rm: unknown): T {
        if (rm === true) {
            return undefined as T;
        }

        if (Array.isArray(base) && Array.isArray(rm)) {
            return base.filter(item => !rm.includes(item)) as T;
        }

        if (!this.isObj(base) || !this.isObj(rm)) {
            return base;
        }

        const out: Record<string, unknown> = { ...base };

        for (const [k, v] of Object.entries(rm)) {
            if (v === true) {
                delete out[k];
            } else if (k in out) {
                out[k] = this.applyRemove(out[k], v);
            }
        }

        return out as T;
    }

    /**
     * Metodo final principal que convierte toda la plantilla definitiva en un JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura definitiva.
     * @author HaJuegos - 29-10-2026
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un nuevo Attachable en un RP. Permitiendo la creacion inicial de la plantilla base para luego, devolver una funcion auxiliar que permite la edicion de esta misma en post-edicion. Y finalmente, permitiendo exportar el archivo listo para su formato JSON.
 * @template {string} Params Lista de parametros principales a considerar.
 * @param {RPAttachableDefinition<Params>} def Parametros definidos en la plantilla base.
 * @returns {(over?: RPAttachableOverride<AttachableBaseParams<Params>>) => FinalRPAttachableTemplateBuilder} Devuelve la funcion auxiliar para permitir las ediciones de post-edicion de la plantilla base definida. Y tambien para la exportacion del mismo a JSON.
 * @author HaJuegos - 29-10-2026 
 * @export
 */
export function createRPAttachable<
    const Params extends string
>(def: RPAttachableDefinition<Params>) {
    return (over: RPAttachableOverride<AttachableBaseParams<Params>> = {}) => {
        return new FinalRPAttachableTemplateBuilder(def as RPAttachableDefinition, over as unknown as RPAttachableOverride);
    };
}