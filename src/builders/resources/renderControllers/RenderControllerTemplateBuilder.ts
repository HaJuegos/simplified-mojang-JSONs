import { RenderControllerBaseParams, RPRenderControllerDefinition, RPRenderControllerOverride } from "../../../types/resources/renderControllers/RenderControllerTemplate";
import { ResourceRenderControllerBuilder } from "./RenderControllerBuilder";

/**
 * Clase principal final para la construccion de un nuevo render controller definiendo principalmente la base principal para despues la edicion de este mismo en post-edicion en una funcion auxiliar.
 * @class FinalRPRenderControllerTemplateBuilder
 * @extends {ResourceRenderControllerBuilder}
 * @author HaJuegos - 31-10-2026
 * @export
 */
export class FinalRPRenderControllerTemplateBuilder extends ResourceRenderControllerBuilder {
    /**
     * Parametros y eventos principales para la creacion de un nuevo render controller definiendo inicialmente las plantilla base y luego las ediciones post-edicion de este mismo.
     * @param {RPRenderControllerDefinition} def Definiciones iniciales de la plantilla base.
     * @param {RPRenderControllerOverride} over Definiciones de edicion post-edicion de la plantilla base.
     * @author HaJuegos - 31-10-2026
     * @constructor
     * @public
     */
    public constructor (def: RPRenderControllerDefinition, over: RPRenderControllerOverride) {
        super();

        let finalRenders: RenderControllerBaseParams[] = structuredClone(def.renderControllers);

        if (over.clearAllData) {
            finalRenders = over.add ? structuredClone(over.add) : ([] as RenderControllerBaseParams[]);
        } else {
            if (over.changeRender) {
                this.deepMerge(finalRenders, over.changeRender);
            }

            if (over.remove) {
                this.applyRemove(finalRenders, over.remove);
            }

            if (over.add) {
                this.deepMerge(finalRenders, over.add);
            }
        }

        this.setDataRender(finalRenders);
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
 * Funcion principal de fabrica para la creacion de un nuevo render controller con su lista de datos definidos. Devolviendo despues una funcion auxiliar para las ediciones post-edicion de esta misma para luego permitir la exportacion a JSON.
 * @template {RPRenderControllerDefinition} TBase Parametros definidos en la plantilla base.
 * @param {TBase} def Definiciones en la plantilla base.
 * @returns {(over?: any) => FinalRPRenderControllerTemplateBuilder} Devuelve las ediciones post-edicion de esta misma para permitir las ediciones y la exportacion final del JSON.
 * @author HaJuegos - 31-10-2026 
 * @export
 */
export function createRPRenderController<
    const TBase extends RPRenderControllerDefinition
>(def: TBase) {
    return (over: RPRenderControllerOverride<TBase> = {}) => {
        return new FinalRPRenderControllerTemplateBuilder(def, over);
    };
}