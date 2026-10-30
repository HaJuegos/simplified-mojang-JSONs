import { EntityClientParams, RPEntityClientDefinition, RPEntityClientOverride } from "../../../types/resources/entity/EntityTemplate";
import { ResourceEntityBuilder } from "./EntityBuilder";

/**
 * Clase final definitiva para la construccion de un nuevo client entity con sus parametros de la plantilla base y sus ediciones post-edicion.
 * @class FinalRPEntityTemplateBuilder
 * @extends {ResourceEntityBuilder}
 * @author HaJuegos - 30-10-2026
 * @export
 */
export class FinalRPEntityTemplateBuilder extends ResourceEntityBuilder {
    /**
     * Parametros y eventos iniciales para la construccion inicial del client entity, definiendo principalmente la base principal de la plantilla, despues devolviendo una funcion auxiliar que permite las ediciones post-edicion de la misma plantilla base y finalmente la exportacion final para el formato JSON.
     * @param {RPEntityClientDefinition} def Definiciones base en concreto a asignar.
     * @param {RPEntityClientOverride} over Definiciones post-edicion en concreto a modificar de la plantilla base.
     * @author HaJuegos - 30-10-2026
     * @constructor
     * @public
     */
    public constructor (def: RPEntityClientDefinition, over: RPEntityClientOverride) {
        super(def.idEntity);

        if (def.formatVersion) {
            this.setVersionEntity(def.formatVersion);
        }

        let finalData: EntityClientParams = structuredClone(def.params);

        if (over.clearAllData) {
            finalData = over.add ? structuredClone(over.add) : ({} as EntityClientParams);
        } else {
            if (over.changeEntity) {
                finalData = this.deepMerge(finalData, over.changeEntity);
            }

            if (over.remove) {
                finalData = this.applyRemove(finalData, over.remove);
            }

            if (over.add) {
                finalData = this.deepMerge(finalData, over.add);
            }
        }

        this.setEntityData(finalData);
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
 * Funcion principal de fabrica para la creacion defintiva de un nuevo client entity de un RP. Definiendo la plantilla base para luego, permitir las ediciones post-edicion de la misma y finalmente permitiendo exportarlo a JSON en su correcto formato.
 * @template {string} Params Parametros de la plantilla base a considerar.
 * @param {RPEntityClientDefinition<Params>} def Definiciones base en concreto para la plantilla base.
 * @returns {(over?: any) => FinalRPEntityTemplateBuilder} Devuelve la funcion auxiliar que permite la post-edicion de la plantilla base definida y despues, permite tambien la exportacion final a JSON.
 * @author HaJuegos - 30-10-2026
 * @export
 */
export function createRPEntityClient<
    const Params extends string
>(def: RPEntityClientDefinition<Params>) {
    return (over: RPEntityClientOverride<EntityClientParams<Params>> = {}) => {
        return new FinalRPEntityTemplateBuilder(def as RPEntityClientDefinition, over as unknown as RPEntityClientOverride);
    };
}