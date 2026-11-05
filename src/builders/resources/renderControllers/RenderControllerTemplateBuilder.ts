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
            finalRenders = over.add ? this.fixAdd(over.add) : ([] as RenderControllerBaseParams[]);
        } else {
            if (over.remove) {
                const rm = over.remove as Record<string, unknown>;

                finalRenders = finalRenders.map((r) => (r.idRender in rm ? this.applyRemove(r, rm[r.idRender]) : r)).filter((r) => r !== undefined);
            }

            if (over.changeRender) {
                this.applyChange(finalRenders, over.changeRender);
            }

            if (over.add) {
                this.applyAdd(finalRenders, over.add);
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
    private deepMerge<T>(base: T, patch: unknown): T {
        if (Array.isArray(base) && Array.isArray(patch)) {
            return [...base, ...patch] as unknown as T;
        }

        if (!this.isObj(base) || !this.isObj(patch)) {
            return (patch ?? base) as T;
        };

        const out: Record<string, unknown> = { ...base };

        for (const [k, v] of Object.entries(patch)) {
            out[k] = (this.isObj(v) && this.isObj(out[k])) || (Array.isArray(out[k]) && Array.isArray(v)) ? this.deepMerge(out[k], v) : v;
        }

        return out as T;
    }

    /**
     * Metodo auxiliar que aplica las modificaciones post-edicion del render controller con las bases existentes.
     * @param {RenderControllerBaseParams[]} renders Lista de bases a modificar.
     * @param {Record<string, unknown>} patch Objecto con los cambios a aplicar para el render.
     * @returns {void}
     * @author HaJuegos - 05-11-2026 
     * @private
     */
    private applyChange(renders: RenderControllerBaseParams[], patch: Record<string, unknown>): void {
        for (const [idRender, changes] of Object.entries(patch)) {
            const target = renders.find((r) => r.idRender == idRender);

            if (target && this.isObj(changes)) {
                for (const [prop, val] of Object.entries(changes)) {
                    const targetValue = target[prop as keyof RenderControllerBaseParams];

                    if (Array.isArray(targetValue) && this.isObj(val)) {
                        const arr = targetValue as unknown as any[];

                        for (const [idxStr, itemVal] of Object.entries(val)) {
                            const idx = Number(idxStr);

                            if (!Number.isInteger(idx) || idx < 0 || idx >= arr.length) {
                                continue;
                            }

                            arr[idx] = this.deepMerge(arr[idx], itemVal);
                        }
                    } else if (this.isObj(targetValue) && this.isObj(val)) {
                        (target as unknown as Record<string, unknown>)[prop] = this.deepMerge(targetValue, val);
                    } else {
                        (target as unknown as Record<string, unknown>)[prop] = val;
                    }
                }
            }
        }
    }

    /**
     * Metodo auxiliar que procesa e integra elementos adicionales, ya sea añadeindo nuevos renders completos o extendiendo los que ya estan definidos.
     * @param {RenderControllerBaseParams[]} renders Lista de renders donde se integraran los elementos.
     * @param {Array<RenderControllerBaseParams | Record<string, unknown>>} addItems Lista de nuevos renders o ediciones a procesar.
     * @returns {void}
     * @author HaJuegos - 05-11-2026
     * @private
     */
    private applyAdd(renders: RenderControllerBaseParams[], addItems: Array<RenderControllerBaseParams | Record<string, unknown>>): void {
        for (const item of addItems) {
            if (!this.isObj(item)) continue;

            if ("idRender" in item && typeof item.idRender === "string") {
                renders.push(item as unknown as RenderControllerBaseParams);
            } else {
                for (const [idRender, changes] of Object.entries(item)) {
                    const target = renders.find(r => r.idRender == idRender);

                    if (target && this.isObj(changes)) {
                        for (const [prop, val] of Object.entries(changes)) {
                            const targetValue = target[prop as keyof RenderControllerBaseParams];

                            if (Array.isArray(targetValue) && Array.isArray(val)) {
                                const targetArr = targetValue as unknown as any[];

                                targetArr.push(...val);
                            } else if (this.isObj(targetValue) && this.isObj(val)) {
                                (target as unknown as Record<string, unknown>)[prop] = this.deepMerge(targetValue, val);
                            } else {
                                (target as unknown as Record<string, unknown>)[prop] = val;
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Metodo auxiliar que filtra y extrae unicamente los renders completos nuevos especificados en la seccion de adicion cuando se limpian todos los datos previos.
     * @param {Array<RenderControllerBaseParams | Record<string, unknown>>} addItems Lista de elementos mixtos de adicion.
     * @returns {RenderControllerBaseParams[]} Devuelve la lista filtrada conteniendo solo los ernder completos validos.
     * @author HaJuegos - 05-11-2026
     * @private
     */
    private fixAdd(addItems: Array<RenderControllerBaseParams | Record<string, unknown>>): RenderControllerBaseParams[] {
        const renders: RenderControllerBaseParams[] = [];

        for (const item of addItems) {
            if (this.isObj(item) && "idRender" in item && typeof item.idRender == "string") {
                renders.push(item as unknown as RenderControllerBaseParams);
            }
        }
        return renders;
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

        if (Array.isArray(base) && this.isObj(rm)) {
            const arr = [...base] as unknown as any[];
            const indices = Object.keys(rm).map(Number).filter(idx => Number.isInteger(idx) && idx >= 0 && idx < arr.length).sort((a, b) => b - a);

            for (const idx of indices) {
                const val = (rm as Record<number, unknown>)[idx];

                if (val === true) {
                    arr.splice(idx, 1);
                } else {
                    arr[idx] = this.applyRemove(arr[idx], val);
                }
            }

            return arr as unknown as T;
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