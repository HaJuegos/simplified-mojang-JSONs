import { BPLootTableFinalOverDefinition, BPLootTableTemplateDef, BPLootTableTemplateOver, PoolsParamsTypes } from "../../../types/behaviors/lootTables/LootTablesTemplate";
import { BehaviorLooTablesBuilder } from "./LootTablesBuilder";

/**
 * Clase principal que crea una plantilal definitiva para la creacion de un loot table.
 * @class FinalLootTableBuilderTemplate
 * @extends {BehaviorLooTablesBuilder}
 * @author HaJuegos - 08-10-2026
 */
export class FinalLootTableBuilderTemplate extends BehaviorLooTablesBuilder {
    /**
     * Símbolo interno para marcar nodos a eliminar por completo.
     * @type {symbol}
     * @readonly
     * @private
     */
    private readonly removedList: symbol = Symbol("removed");

    /**
     * Argumentos principales para la creacion de un Loot Table de una plantilla en concreto.
     * @param {BPLootTableTemplateDef} def Los valores a definir fijos en el loot table.
     * @param {BPLootTableTemplateOver} over Los valores a modificar post-edicion en el loot table.
     * @author HaJuegos - 11-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: BPLootTableTemplateDef<any>, over: BPLootTableFinalOverDefinition = {}) {
        super();

        let pools: PoolsParamsTypes[] = [];

        if (!over.clearAllData) {
            pools = [...(def.pools ?? [])];

            if (over.pools) {
                for (const [indexStr, patch] of Object.entries(over.pools)) {
                    const index = Number(indexStr);

                    if (!isNaN(index) && pools[index] && patch != null) {
                        pools[index] = { ...pools[index], ...patch } as PoolsParamsTypes;
                    }
                }
            }

            const removed = new Set<number>();

            for (const [indexStr, mask] of Object.entries(over.remove?.pools ?? {})) {
                const index = Number(indexStr);

                if (!Number.isInteger(index) || !pools[index]) {
                    throw new Error(`LootTable remove.pools: el pool "${indexStr}" no existe en la plantilla base.`);
                }

                let res: unknown = pools[index];

                if (this.hasRemoval(mask)) {
                    res = this.prune(pools[index], mask);
                } else if (this.matches(pools[index], mask)) {
                    res = this.removedList;
                }

                if (res === this.removedList || !(res as PoolsParamsTypes).entries?.length) {
                    removed.add(index);
                } else {
                    pools[index] = res as PoolsParamsTypes;
                }
            }

            pools = pools.filter((_, i) => !removed.has(i));
        }

        if (over.add?.pools) {
            pools.push(...over.add.pools);
        }

        this.setPools(pools);
    }

    /**
     * Comprueba de forma recursiva si un nodo contiene, como subconjunto, todo lo indicado en la máscara. `true` solo exige que la clave exista.
     * @param {unknown} node Nodo real a evaluar.
     * @param {unknown} mask Máscara a comparar.
     * @returns {boolean} Devuelve true si el nodo coincide con la máscara.
     * @author HaJuegos - 27-10-2026
     * @private
     */
    private matches(node: unknown, mask: unknown): boolean {
        if (mask === true) {
            return true;
        }

        if (Array.isArray(mask)) {
            return Array.isArray(node) && mask.every(m => node.some(n => this.matches(n, m)));
        }

        if (mask && typeof mask == "object") {
            return !!node && typeof node == "object" && !Array.isArray(node)
                && Object.entries(mask).every(([k, v]) => k in node && this.matches((node as Record<string, unknown>)[k], v));
        }

        return node === mask;
    }

    /**
     * Indica si una máscara contiene algo a eliminar (`true` o un array de selectores). Si no, solo funciona como selector.
     * @param {unknown} mask Máscara a evaluar.
     * @returns {boolean}
     * @author HaJuegos - 27-10-2026
     * @private
     */
    private hasRemoval(mask: unknown): boolean {
        if (mask === true || Array.isArray(mask)) {
            return true;
        }

        return !!mask && typeof mask == "object" && Object.values(mask).some(v => this.hasRemoval(v));
    }

    /**
     * Elimina de forma no mutante lo indicado en la máscara de un nodo.
     * @param {unknown} node Nodo real de la plantilla base.
     * @param {unknown} mask Máscara que describe lo que se elimina.
     * @returns {unknown} Devuelve el nodo resultante o removedList si el nodo debe eliminarse por completo.
     * @author HaJuegos - 27-10-2026
     * @private
     */
    private prune(node: unknown, mask: unknown): unknown {
        if (mask === true) {
            return this.removedList;
        }

        if (Array.isArray(node) && Array.isArray(mask)) {
            const out: unknown[] = [];

            for (const item of node) {
                let current: unknown = item;

                for (const m of mask) {
                    if (current === this.removedList) {
                        break;
                    }

                    if (!this.matches(current, m)) {
                        continue;
                    }

                    current = this.hasRemoval(m) ? this.prune(current, m) : this.removedList;
                }

                if (current !== this.removedList) {
                    out.push(current);
                }
            }

            return out.length ? out : this.removedList;
        }

        if (node && mask && typeof node == "object" && typeof mask == "object" && !Array.isArray(node) && !Array.isArray(mask)) {
            const out: Record<string, unknown> = { ...node };

            for (const [key, sub] of Object.entries(mask)) {
                if (!(key in out) || !this.hasRemoval(sub)) {
                    continue;
                }

                const res = this.prune(out[key], sub);

                if (res === this.removedList) {
                    delete out[key];
                } else {
                    out[key] = res;
                }
            }

            return Object.keys(out).length ? out : this.removedList;
        }

        return node;
    }

    /**
     * Metodo principal final que convierte toda la plantilla definitiva en JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura final.
     * @author HaJuegos - 08-10-2026 
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un Loot Table a patir de una definicion fija.
 * @param {BPLootTableTemplateDef<Pools>} def Definicion base de los parametros para la plantilla fija. 
 * @returns {<const AddPools extends readonly PoolsParamsTypes[] = []>(over?: BPLootTableTemplateOver<Pools, AddPools>) => FinalLootTableBuilderTemplate} Devuelve el objecto mismo para las modificaciones finales en caso de requerirse, a base de la plantilla fija creada.
 * @template {readonly PoolsParamsTypes[]} Pools Pools a validar para la plantilla a editar.
 * @author HaJuegos - 08-10-2026
 * @export
 */
export function createBPLootTable<
    const Pools extends readonly PoolsParamsTypes[]
>(def: BPLootTableTemplateDef<Pools>) {
    return <
        const AddPools extends readonly PoolsParamsTypes[] = []
    >(over: BPLootTableTemplateOver<Pools, AddPools> = {}): FinalLootTableBuilderTemplate => {
        return new FinalLootTableBuilderTemplate(def as unknown as BPLootTableTemplateDef<any>, over as unknown as BPLootTableFinalOverDefinition);
    };
}