import { MinecraftItemTypes } from "@minecraft/vanilla-data";
import { FunctionsEntries } from "../lootTables/LootTablesTemplate";
import { FinalTradingBuilderTemplate } from "../../../builders/behaviors/trading/TradingTemplateBuilder";
import { EntityFilter } from "../../EntityFilters";

export {
    TiersParams,

    BPTradingDefinition,
    BPTradingOverride,
    BPTradingOverInstance,
};

/**
 * Tipado general para la definicion base de la plantilla para la cracion de un trading.
 * @interface BPTradingDefinition
 * @author HaJuegos - 20-10-2026
 */
interface BPTradingDefinition {
    /**
     * Lista de tiers que pueden salir en el trading.
     * @type {TiersParams[]}
     */
    tiers: TiersParams[];
}

/**
 * Tipado auxiliar para compartir los tipados y datos en concreto para la funcion auxiliar de la edicion post-edicion de la plantilla base.
 * @interface BPTradingOverInstance
 * @template {BPTradingDefinition} Def Definiciones de la plantilla base. 
 * @author HaJuegos - 20-10-2026
 */
interface BPTradingOverInstance<
    Def extends BPTradingDefinition = BPTradingDefinition
> {
    /**
     * Funcion auxiliar que permite la post-edicion de la plantilla base definida.
     * @param {?BPTradingOverride<Def>} [over] (Opcional) Datos para la post-edicion de la plantilla base.
     * @returns {FinalTradingBuilderTemplate} Devuelve la misma clase para la exportacion final a formato JSON final.
     */
    (over?: BPTradingOverride<Def>): FinalTradingBuilderTemplate;
}

/**
 * Tipado auxiliar para ampliar los tipos literales a sus tipos primitivos base para facilitar la edicion.
 * @template T Tipado general.
 * @author HaJuegos - 20-10-2026
 */
type Widen<T> =
    T extends string ? string :
    T extends number ? number :
    T extends boolean ? boolean :
    T;

/**
 * Tipado auxiliar que transforma recursivamente todas las propiedades de un tipo en opcionales.
 * @template T Tipado a transformar.
 * @author HaJuegos - 20-10-2026
 */
type DeepPartial<T> =
    T extends Function ? T :
    T extends readonly (infer U)[] ? readonly DeepPartial<U>[] :
    T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } :
    Widen<T>;

/**
 * Tipado auxiliar que mapoea un array de la base permitiendo modificaciones parciales en cada una de sus posiciones por indice.
 * @template {readonly unknown[]} T Array a considerar en concreto.
 * @author HaJuegos - 20-10-2026
 */
type ExistingArrayOverrides<T extends readonly unknown[]> = {
    [K in keyof T]?: DeepPartial<T[K]>;
};

/**
 * Tipado general para los valores y parametros post-edicion de la plantilla base.
 * @template {BPTradingDefinition} Def Definiciones de la plantilla base en concreto. 
 * @typedef {BPTradingOverride}
 */
type BPTradingOverride<
    Def extends BPTradingDefinition = BPTradingDefinition
> = {
    /**
     * Si se establece, se limpia completamente la plantilla base para dejar el archivo completamente vacio.
     * @type {true}
     */
    clearAllData: true;

    /**
     * (Opcional) Tiers adiccionales a añadir a la plantilla base.
     * @type {?{tiers?: readonly TiersParams[];}}
     */
    add?: {
        tiers?: readonly TiersParams[];
    };
} | {
    /**
     * (Opcional) Si se establece, se limpia completamente la plantilla base para dejar el archivo completamente vacio.
     * @type {true}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Tiers definidos en la plantilla base para poder editar en post-edicion.
     * @type {?ExistingArrayOverrides<Def["tiers"]>}
     */
    changeTiers?: ExistingArrayOverrides<Def["tiers"]>;

    /**
     * (Opcional) Tiers adiccionales a añadir a la plantilla base.
     * @type {?{tiers?: readonly TiersParams[];}}
     */
    add?: {
        tiers?: readonly TiersParams[];
    };
};

interface TiersParams {
    totalExpRequired?: number;
    groups?: GroupsTradesParams[];
    trades?: TradesParams[];
}

interface GroupsTradesParams {
    numToSelect?: number;
    trades: TradesParams[];
}

interface TradesParams {
    gives: ItemBaseToTradeParams[];
    wants: WantsItemsToTrade[];
    maxUses?: number;
    rewardExp?: boolean;
    traderExp?: number;
    weight?: number;
}

interface ItemBaseToTradeParams {
    item?: string | MinecraftItemTypes;
    quantity?: number | {
        min?: number;
        max?: number;
    };
    functions?: FunctionsEntries[];
    choice?: ChoiceListToTradeParams[];
    filters?: EntityFilter | EntityFilter[];
}

interface WantsItemsToTrade extends ItemBaseToTradeParams {
    priceMultiplier?: number;
}

interface ChoiceListToTradeParams {
    item: string | MinecraftItemTypes;
    quantity?: number | {
        min?: number;
        max?: number;
    };
    functions?: FunctionsEntries[];
    priceMultiplier?: number;
    filters?: EntityFilter | EntityFilter[];
}