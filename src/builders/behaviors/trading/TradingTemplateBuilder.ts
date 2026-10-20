import { BPTradingDefinition, BPTradingOverInstance, BPTradingOverride, TiersParams } from "../../../types/behaviors/trading/TradingTemplate";
import { BehaviorTradingBuilder } from "./TradingBuilder";

/**
 * Clase final de fabrica para la formacion de un nuevo trading en su formato final.
 * @class FinalTradingBuilderTemplate
 * @extends {BehaviorTradingBuilder}
 * @author HaJuegos - 20-10-2026
 * @export
 */
export class FinalTradingBuilderTemplate extends BehaviorTradingBuilder {
    /**
     * Parametros iniciales y eventos para la creacion de la definicion base de la plantilla a crear y los parametros post-edicion de esta misma plantilla.
     * @param {BPTradingDefinition} def Parametros iniciales de la plantilla base.
     * @param {BPTradingOverride<any>} [over={}] Parametros adiccionales de la ediccion post-edicion.
     * @author HaJuegos - 20-10-2026
     * @constructor
     */
    constructor (def: BPTradingDefinition, over: BPTradingOverride<any> = {}) {
        super();

        let tiers: TiersParams[] | undefined;

        if (over.clearAllData) {
            tiers = over.add?.tiers ? [...over.add.tiers] : undefined;
        } else {
            tiers = def.tiers.map((tier, i) => {
                const change = (over.changeTiers as any)?.[i];

                return change ? this.deepMerge(tier, change) : tier;
            });

            if (over.add?.tiers) {
                tiers.push(...over.add.tiers);
            };
        }

        if (tiers?.length) {
            this.setTiers(tiers);
        };
    }

    /**
     * Metodo principal final que convierte toda la plantilla definitiva en JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura final.
     * @author HaJuegos - 06-10-2026 
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
 * Funcion de fabrica principal que permite la construccion definitiva de la plantilla base para la creacion de un trading y sus valores post-edicion list para la exportacion a JSON.
 * @param {Def} def Tipados y definiciones base de la plantilla base.
 * @template {BPTradingDefinition} Def Tipado de la definicion de la base.
 * @returns {BPTradingOverInstance<Def>} Devuelve una funcion auxiliar para permitir las ediciones post-edicion de la plantilla base definida.
 * @author HaJuegos - 20-10-2026 
 * @export
 */
export function createBPTrading<
    const Def extends BPTradingDefinition
>(def: Def): BPTradingOverInstance<Def> {
    return (over = {}) => {
        return new FinalTradingBuilderTemplate(def, over as unknown as BPTradingOverride<any>);
    };
}