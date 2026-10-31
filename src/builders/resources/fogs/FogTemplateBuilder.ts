import { DistanceFogParams, RPFogDefinition, RPFogOverride, VolumetricFogParams } from "../../../types/resources/fogs/FogTemplate";
import { ResourceFogBuilder } from "./FogBuilder";

/**
 * Clase final para la construccion definitiva de un nuevo archivo fog. Definiendo los parametros fijos principales para la plantilla base y despues la construccion post-edicion de las ediciones de la plantilla base.
 * @class FinalRPFogTemplateBuilder
 * @extends {ResourceFogBuilder}
 * @author HaJuegos - 30-10-2026
 * @export
 */
export class FinalRPFogTemplateBuilder extends ResourceFogBuilder {
    /**
     * Parametros y eventos principales para la creacion de un nuevo fog. Creando inicialmente la plantilla base para luego permitir sus parametros a editar en la post-edicion de la misma.
     * @param {RPFogDefinition} def Definiciones de la plantilla base a crear.
     * @param {RPFogOverride} over Definiciones y ediciones de la plantilla base.
     * @author HaJuegos - 30-10-2026
     * @constructor
     * @public
     */
    public constructor (def: RPFogDefinition, over: RPFogOverride) {
        super(def.idFog);

        if (def.formatVersion) {
            this.setVersionFog(def.formatVersion);
        }

        let finalDataDistance: DistanceFogParams = structuredClone(def.distance);
        let finalDataVolumetric: VolumetricFogParams = structuredClone(def.volumetric);

        if (over.clearAllData) {
            finalDataDistance = over.add?.distance ? structuredClone(over.add.distance) : ({} as DistanceFogParams);
            finalDataVolumetric = over.add?.volumetric ? structuredClone(over.add.volumetric) : ({} as VolumetricFogParams);
        } else {
            if (over.changeFog) {
                if (over.changeFog.changeFormatVersion) {
                    this.setVersionFog(over.changeFog.changeFormatVersion);
                }

                if (over.changeFog.distance) {
                    this.deepMerge(finalDataDistance, over.changeFog.distance);
                }

                if (over.changeFog.volumetric) {
                    this.deepMerge(finalDataVolumetric, over.changeFog.volumetric);
                }
            }

            if (over.remove) {
                if (over.remove.distance) {
                    finalDataDistance = this.applyRemove(finalDataDistance, over.remove.distance);
                }

                if (over.remove.volumetric) {
                    finalDataVolumetric = this.applyRemove(finalDataVolumetric, over.remove.volumetric);
                }
            }

            if (over.add) {
                if (over.add.distance) {
                    finalDataDistance = this.deepMerge(finalDataDistance, over.add.distance);
                }

                if (over.add.volumetric) {
                    finalDataVolumetric = this.deepMerge(finalDataVolumetric, over.add.volumetric);
                }
            }
        };

        this.setDistanceData(finalDataDistance);
        this.setVolumetricData(finalDataVolumetric);
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
 * Funcion principal de fabrica para la creacion de un nuevo archivo Fog definiendo inicialmente la plantilla base del mismo, para luego, devolver una funcion auxiliar para las edicion post-edicion de la plantilla base misma.
 * @template {RPFogDefinition} TBase Parametros definidos en la plantilla base.
 * @param {TBase} def Las definiciones de la plantilla base en concreto.
 * @returns {(over: RPFogOverride<TBase>) => FinalRPFogTemplateBuilder} Devuelve la funcion auxiliar que permite la funcion post-edicion de esta misma plantilla para luego permitir su exportacion final en formato JSON.
 * @author HaJuegos - 30-10-2026
 * @export
 */
export function createRPFog<
    TBase extends RPFogDefinition
>(def: TBase) {
    return (over: RPFogOverride<TBase>) => {
        return new FinalRPFogTemplateBuilder(def, over);
    };
}