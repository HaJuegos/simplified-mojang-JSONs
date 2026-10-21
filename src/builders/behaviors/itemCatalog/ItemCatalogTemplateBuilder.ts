import { BPItemCatalogDefinition, BPItemCatalogOverride, BPItemCatalogTemplateInstance, CategoryParams } from "../../../types/behaviors/itemCatalog/ItemCatalogTemplate";
import { BehaviorItemCatalogBuilder } from "./ItemCatalogBuilder";

/**
 * Clase definitiva de creacion y exportacion final de un item catalog para el formato JSON.
 * @class FinalItemCatalogTemplateBuilder
 * @extends {BehaviorItemCatalogBuilder}
 * @author HaJuegos - 21-10-2026
 * @export
 */
export class FinalItemCatalogTemplateBuilder extends BehaviorItemCatalogBuilder {
    /**
     * Parametros iniciales y eventos para la definicion de la plantilla base del item catalog y su posterior ediciones post-edicion de la plantilla base.
     * @param {BPItemCatalogDefinition} def Definiciones base de la plantilla principal a crear.
     * @param {BPItemCatalogOverride} over Definiciones post-edicion a añadir a la plantilla base.
     * @author HaJuegos - 21-10-2026
     * @constructor
     */
    constructor (def: BPItemCatalogDefinition, over: BPItemCatalogOverride) {
        super();

        let finalCategories: CategoryParams[] | undefined;

        if (over.clearAllData) {
            finalCategories = over.add?.categories ? [...over.add.categories] : undefined;
        } else {
            finalCategories = def.categories ? def.categories.map((cat, i) => {
                const change = (over.modifiedCategories as any)?.[i];

                return change ? this.deepMerge(cat, change) : cat;
            }) : [];

            if (over.add?.categories) {
                finalCategories.push(...over.add.categories);
            }
        }

        if (finalCategories && finalCategories.length > 0) {
            this.setCategory(finalCategories);
        }
    }

    /**
     * Metodo principal final que convierte toda la plantilla definitiva en JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura final.
     * @author HaJuegos - 20-10-2026 
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }

    /**
     * Metodo auxiliar que realiza una fusion profunda recursiva entre los datos base y los cambios aplicados.
     * @template T Tipo de objecto base a fusionar.
     * @param {T} base Objecto o valor original de la plantilla base.
     * @param {*} patch Objecto parcial o cambios a aplicar sobre la base.
     * @returns {T} Resultado final combinado con los cambios aplicados profundamente.
     * @author HaJuegos - 20-10-2026 
     * @private
     */
    private deepMerge<T>(base: T, patch: any): T {
        if (Array.isArray(base) && Array.isArray(patch)) {
            return patch.map((p, i) => p == undefined ? base[i] : this.deepMerge(base[i], p)) as T;
        }

        if (base && patch && typeof base == "object" && typeof patch == "object") {
            const out: any = { ...base };

            for (const k of Object.keys(patch)) {
                out[k] = patch[k] == undefined ? out[k] : this.deepMerge(out[k], patch[k]);
            }

            return out;
        }

        return patch ?? base;
    }
}

/**
 * Funcion principal de fabrica para la construccion de un item catalog con los parametros base y post-edicion.
 * @param {Def} def Definciones base de la plantilla principal.
 * @template {BPItemCatalogDefinition} Def Definciones base a añadir a la plantilla base.
 * @returns {BPItemCatalogTemplateInstance<Def>} Devuelve finalmente la clase final para la exportacion final al formato JSON construido en su totalidad.
 * @author HaJuegos - 21-10-2026
 * @export
 */
export function createItemCatalogBP<
    const Def extends BPItemCatalogDefinition
>(def: Def): BPItemCatalogTemplateInstance<Def> {
    return (over = {}) => {
        return new FinalItemCatalogTemplateBuilder(def, over as unknown as BPItemCatalogOverride<any>);
    };
}