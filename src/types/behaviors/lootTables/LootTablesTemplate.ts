import { RawMessage } from "@minecraft/server";
import { MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";

export {
    PoolsParamsTypes,
    BPLootTableTemplateDef,
    BPLootTableTemplateOver,
    BPLootTableFinalOverDefinition,
};

/**
 * Lista de encantamientos base para asignar a la funcion.
 * @author HaJuegos - 11-10-2026
 */
type EnchantmentsEnum = | "protection" | "fire_protection" | "feather_falling" | "blast_protection" | "projectile_protection" | "thorns" | "respiration" | "depth_strider" | "aqua_affinity" | "sharpness" | "smite" | "bane_of_arthropods" | "knockback" | "fire_aspect" | "looting" | "efficiency" | "silk_touch" | "unbreaking" | "fortune" | "power" | "punch" | "flame" | "infinity" | "luck_of_the_sea" | "lure" | "frost_walker" | "mending" | "binding" | "vanishing" | "impaling" | "riptide" | "loyalty" | "channeling" | "multishot" | "piercing" | "quick_charge" | "soul_speed" | "swift_sneak" | "wind_burst" | "density" | "breach" | (string & {});

/**
 * Simbolo unico usado como marca pra identificar los campos que requieren un float de 0 a 1.
 * @author HaJuegos - 13-10-2026
 */
declare const ratioBrand: unique symbol;

/**
 * Tipado general estricto para limitar un numero float de 0 a 1.
 * @author HaJuegos - 11-10-2026
 */
type FloatRatio = number & { readonly [ratioBrand]?: never; };

/**
 * Tipado auxiliar que detecta si el tipo base declarado esta marccado como FloatRatio
 * @template S Tipo declarado en el tipado base de la propiedad a validar.
 * @author HaJuegos - 13-10-2026
 */
type HasRatioBrand<S> = true extends (S extends unknown ? (typeof ratioBrand extends keyof S ? true : false) : never) ? true : false;

/**
 * Tipado auxiliar que valida que un numero literal este entre 0 a 1.
 * @template {number} T Numero literal a validar.
 * @author HaJuegos - 13-10-2026
 */
type ValidRatio<T extends number> = number extends T ? T : `${T}` extends "0" | "1" | `0.${number}` ? T : never;

/**
 * Lista de funciones base sin parametros para funcionar
 * @author HaJuegos - 11-10-2026
 */
type FunctionsEntriesBasicEnums = "random_dye" | "set_data_from_color_index" | "trader_material_type" | "explosion_decay";

/**
 * Lista de mapas prehechos para la funcion general de crear un mapa localizador.
 * @author HaJuegos - 11-10-2026
 */
type ExplorationMapsEnums = "endcity" | "fortress" | "mineshaft" | "monument" | "ruins" | "stronghold" | "temple" | "village_desert" | "village_plains" | "village_savanna" | "village_snowy" | "village_taiga" | "village" | "mansion" | "shipwreck" | "buriedtreasure" | "pillageroutpost" | "jungle_temple" | "swamp_hut" | "trial_chambers" | (string & {});

/**
 * Lista de materiales disponibles para usarse en un trim.
 * @author HaJuegos - 11-10-2026
 */
type MaterialTrimEnums = "amethyst" | "copper" | "diamond" | "emerald" | "gold" | "iron" | "lapis" | "netherite" | "quartz" | "redstone" | "resin" | (string & {});

/**
 * Lista de patrones disponibles para usarse en un trim.
 * @author HaJuegos - 11-10-2026
 */
type PatternTrimEnums = "sentry" | "vex" | "wild" | "coast" | "dune" | "wayfinder" | "shaper" | "raiser" | "host" | "ward" | "silence" | "tide" | "snout" | "rib" | "eye" | "spire" | "flow" | "bolt" | (string & {});

/**
 * Lista de pociones vanillas disponibles para la funcion.
 * @author HaJuegos - 11-10-2026
 */
type PotionIdEnums = "water" | "mundane" | "long_mundane" | "thick" | "awkward" | "nightvision" | "long_nightvision" | "invisibility" | "long_invisibility" | "leaping" | "long_leaping" | "strong_leaping" | "fire_resistance" | "long_fire_resistance" | "swiftness" | "long_swiftness" | "strong_swiftness" | "slowness" | "long_slowness" | "strong_slowness" | "water_breathing" | "long_water_breathing" | "healing" | "strong_healing" | "harming" | "strong_harming" | "poison" | "long_poison" | "strong_poison" | "regeneration" | "long_regeneration" | "strong_regeneration" | "strength" | "long_strength" | "strong_strength" | "weakness" | "long_weakness" | "wither" | "turtle_master" | "long_turtle_master" | "strong_turtle_master" | "slow_falling" | "long_slow_falling" | "wind_charged" | "weaving" | "oozing" | "infested" | (string & {});

/**
 * Lista de encantamientos vanillas disponibles para la funcion.
 * @author HaJuegos - 11-10-2026
 */
type EnchantsIdEnums = "aqua_affinity" | "bane_of_arthropods" | "blast_protection" | "channeling" | "binding" | "curse_of_vanishing" | "depth_strider" | "efficiency" | "feather_falling" | "fire_aspect" | "fire_protection" | "flame" | "fortune" | "frost_walker" | "impaling" | "infinity" | "knockback" | "looting" | "loyalty" | "luck_of_the_sea" | "lure" | "mending" | "multishot" | "piercing" | "projectile_protection" | "protection" | "power" | "punch" | "quick_charge" | "respiration" | "riptide" | "sharpness" | "silk_touch" | "smite" | "soul_speed" | "thorns" | "unbreaking" | (string & {});

/**
 * Lista de parametros disponibles para un operador que valide algo.
 * @author HaJuegos - 13-10-2026
 */
type OperatorTypesEnums = "==" | "!=" | "not";

/**
 * Tipado auxiliar que extrae de forma segura el tipo de una propiedad a traves de uniones.
 * @template U Objecto o union de objectos.
 * @template {PropertyKey} K Clase de la propiedad a extraer.
 * @author HaJuegos - 13-10-2026
 */
type PropOf<U, K extends PropertyKey> = U extends unknown ? (K extends keyof U ? U[K] : never) : never;

/**
 * Tipado auxiliar para obtener todas las claves disponibles en una union de objectos.
 * @template U Union de tipos de objectos.
 * @author HaJuegos - 13-10-2026
 */
type KeysOfUnion<U> = U extends unknown ? keyof U : never;

/**
 * Tipado auxiliar para verificar y emparejar un tipo de su esquema base correspondiente.
 * @template T Tipo a evaluar.
 * @template S Esquema de referencia.
 * @author HaJuegos - 13-10-2026
 */
type Match<T, S> = S extends unknown ? (T extends S ? S : never) : never;


/**
 * Tipado estricto recursivo para validar profundamente que un objecto o array no contenga propiedades fantasma ajenas al esquema de referencia.
 * @template T Tipo de datos a validar.
 * @template S Esquema o forma de referencia estricta.
 * @author HaJuegos - 13-10-2026
 */
type DeepStrict<T, S> =
    T extends readonly unknown[]
    ? { [K in keyof T]: DeepStrict<T[K], S extends readonly (infer SU)[] ? SU : never> }
    : T extends object
    ? [Match<T, S>] extends [never]
    ? T
    : { [K in keyof T]: K extends KeysOfUnion<Match<T, S>>
        ? DeepStrict<T[K], PropOf<Match<T, S>, K>>
        : never }
    : T extends number ? (HasRatioBrand<S> extends true ? ValidRatio<T> : T)
    : T;

/**
 * Tipado final para la creacion de una plantilla base de un loot table fijo.
 * @template {readonly PoolsParamsTypes[]} Pools Lista de pools a validar del template.
 * @author HaJuegos - 11-10-2026
 */
type BPLootTableTemplateDef<
    Pools extends readonly PoolsParamsTypes[] = readonly PoolsParamsTypes[]
> = {
    pools: Pools & DeepStrict<Pools, readonly PoolsParamsTypes[]>;
};

/**
 * Tipado y plantilla final para la modificacion de una plantilla base en cuestion de un loot table.
 * @interface BPLootTableFinalOverDefinition
 * @author HaJuegos - 12-10-2026
 */
interface BPLootTableFinalOverDefinition {
    clearAllData?: boolean;
    pools?: PoolsParamsTypes[] | Record<number, Partial<PoolsParamsTypes>> | null;
    add?: {
        pools?: PoolsParamsTypes[];
    };
}

/**
 * Tipado auxiliar para validar tipos literales a sus primitivos base permitiendo su modificacion pero sin salirse de la base inicial.
 * @template T 
 * @author HaJuegos - 12-10-2026
 */
type Widen<T> = T extends string ? string
    : T extends number ? number
    : T extends boolean ? boolean
    : T extends Array<infer U> ? Array<Widen<U>>
    : T extends object ? { [K in keyof T]: Widen<T[K]> }
    : T;


/**
 * Tipado auxiliar para parchear la lista de entries de un pool para conversar la misma cantidad y estructura de la plantilla base.
 * @template E Lista de entries de la plantilla base.
 * @author HaJuegos - 13-10-2026
 */
type PatchEntry<E> = E extends readonly unknown[] ? { -readonly [I in keyof E]: Widen<E[I]> } : never;

/**
 * Tipado general para parchear un pool existente.
 * @template T Pool en cuestion.
 * @author HaJuegos - 11-10-2026
 */
type PatchPool<T> = {
    -readonly [K in keyof T]?: K extends "entries" ? PatchEntry<T[K]> : Widen<T[K]> | null;
};

/**
 * Tipado final para la modificacion de una plantilla base de un loot table ya creado.
 * @template {readonly PoolsParamsTypes[]} Pools Pools de la plantilla base.
 * @template {readonly PoolsParamsTypes[]} AddPools Pools adiccionales a añadir a la base.
 * @author HaJuegos - 11-10-2026
 */
type BPLootTableTemplateOver<
    Pools extends readonly PoolsParamsTypes[],
    AddPools extends readonly PoolsParamsTypes[] = readonly PoolsParamsTypes[]
> = {
    /**
     * (Opcional) Si está activo, limpia todos los pools de la plantilla base.
     * @type {?boolean}
     */
    clearAllData?: boolean;
} & (
        {
            clearAllData?: false | undefined;

            /**
             * (Opcional) Pools a modificar o reemplazar completamente.
             * @type {?({ [K in keyof Pools]?: PatchPool<Pools[K]> | null })}
             */
            pools?: { [K in keyof Pools]?: PatchPool<Pools[K]> | null };
        } |
        {
            clearAllData: true;
            pools?: never;
        }
    ) & {
        /**
         * (Opcional) Parámetro adicional que añade nuevos pools a la plantilla base o limpia.
         * @type {?{pools?: AddPools;}}
         */
        add?: {
            pools?: AddPools & DeepStrict<AddPools, readonly PoolsParamsTypes[]>;
        };
    };

/**
 * Parametros disponibles para la creacion de un nuevo pool u objecto en un loot table.
 * @interface PoolsParamsTypes
 * @author HaJuegos - 11-10-2026
 */
interface PoolsParamsTypes {
    /**
     * (Opcional) Parametros adiccionales para la modificacion del dropeo de la pool en cuestion.
     * @type {?TiersTypes}
     */
    tiers?: TiersTypes;

    /**
     * Total de elementos a considerar para soltar o seleccionar de la lista de loot disponible.
     * @type {number | {min: number; max: number;}}
     */
    rolls?: number | {
        min: number;
        max: number;
    };

    /**
     * (Opcional) Realmente no sabemos que hace esto. No esta documentado. Y parece contraproducente sabiendo que rolls tiene min y max. En fin, solo cosas de compabilidad.
     * @type {?number}
     */
    bonusRolls?: number;

    /**
     * (Opcional) Condiciones que se deben cumplir primero antes de soltar el pool del loot disponible.
     * @type {?ConditionsTypes[]}
     */
    conditions?: ConditionsTypes[];

    /**
     * Lista de elementos posibles a soltar y considerar de la loot table.
     * @type {EntriesTypes[]}
     */
    entries: EntriesTypes[];
}

interface TiersTypes {
    bonusChance?: number;
    bonusRolls?: number;
    initialRange?: number;
}

/**
 * Lista de parametros para definir una entrada de item al loot table. Para ser seleccionado por la pool aleatoria.
 * @interface EntriesTypes
 * @author HaJuegos - 11-10-2026
 */
interface EntriesBaseTypes {
    /**
     * Peso del pool entre todos los de la loot table. Es como la probabilidad vaya.
     * @type {number}
     */
    weight?: number;

    /**
     * (Opcional) Condiciones a cumplir antes de que el item sea añadido al loot table.
     * @type {?ConditionsTypes[]}
     */
    conditions?: ConditionsTypes[];

    /**
     * (Opcional) Orden de dropeo de la loot table a elejir en el juego internamente.
     * @type {?number}
     */
    quality?: number;
}

/**
 * Lista de parametros cuando se selecciona un tipo vacio en la pool.
 * @interface EmptyEntryTypes
 * @extends {EntriesBaseTypes}
 * @author HaJuegos - 11-10-2026
 */
interface EmptyEntryTypes extends EntriesBaseTypes {
    type: "empty";
}

/**
 * Lista de parametros cuando se selecciona un tipo item en la pool.
 * @interface EmptyEntryTypes
 * @extends {EntriesBaseTypes}
 * @author HaJuegos - 11-10-2026
 */
interface ItemEntryTypes extends EntriesBaseTypes {
    type: 'item';

    /**
     * ID del item a dropear o ruta del loot table a considerar.
     * @type {(string | MinecraftItemTypes)}
     */
    name: string | MinecraftItemTypes;

    /**
     * (Opcional) Funciones adiccionales a ejecutar sobre el item seleccionado de la pool.
     * @type {?FunctionsEntries[]}
     */
    functions?: FunctionsEntries[];

    /**
     * (Opcional) Lista de pools nuevos a dropear junto con el item seleccionado de la pool inicial.
     * @type {?PoolsParamsTypes[]}
     */
    pools?: PoolsParamsTypes[];

    /**
     * (Opcional) Total de elementos a dropear.
     * @type {?number}
     */
    count?: number;
}

/**
 * Lista de parametros cuando se selecciona un tipo loot table en la pool.
 * @interface EmptyEntryTypes
 * @extends {EntriesBaseTypes}
 * @author HaJuegos - 11-10-2026
 */
interface LootTableEntryTypes extends EntriesBaseTypes {
    type: "loot_table";

    /**
     * ID del item a dropear o ruta del loot table a considerar.
     * @type {(string | MinecraftItemTypes)}
     */
    name: string | MinecraftItemTypes;
}

type EntriesTypes = EmptyEntryTypes | ItemEntryTypes | LootTableEntryTypes;

interface FunctionsEntriesBaseTypes {
    function: FunctionsEntriesBasicEnums;
}

interface CarryOverBlockEntityDataFunctionEntrieTypes {
    function: "carry_over_block_entity_data";
    dynamicProperties?: boolean;
}

interface EnchanmentsTradingTypes {
    name: EnchantsIdEnums;
    min: number;
    max: number;
}

interface EnchantBookForTradingFunctionEntrieTypes {
    function: "enchant_book_for_trading";
    baseCost?: number;
    baseRandomCost?: number;
    perLevelCost?: number;
    perLevelRandomCost?: number;
    enchantments?: EnchanmentsTradingTypes[];
}

interface EnchantRandomGearFunctionEntrieTypes {
    function: "enchant_random_gear";
    chance: number;
}

interface EnchantRandomlyFunctionEntrieTypes {
    function: "enchant_randomly";
    treasure?: boolean;
}

interface EnchantWithLevelsFunctionEntrieTypes {
    function: "enchant_with_levels";
    levels: number | {
        min: number;
        max: number;
    };
    treasure?: boolean;
}

interface ExplorationMapFunctionEntrieTypes {
    function: "exploration_map",
    destination: ExplorationMapsEnums;
}

interface FillContainerFunctionEntrieTypes {
    function: "fill_container";
    loot_table: string;
}

interface ContidionsFurnaceTypes {
    condition: string;
    entity: string;
    properties: Record<string, string | boolean>;
}

interface FurnaceSmeltFunctionEntrieTypes {
    function: "furnace_smelt";
    conditions?: ContidionsFurnaceTypes[];
}

interface LootingEnchantFunctionEntrieTypes {
    function: "looting_enchant";
    count: {
        min: number;
        max: number;
    };
    limit?: number;
}

interface RandomAuxValueFunctionEntrieTypes {
    function: "random_aux_value";
    values: {
        min: number;
        max: number;
    };
}

interface RandomBlockStateFunctionEntrieTypes {
    function: "random_block_state";
    blockState?: string;
    values?: {
        min: number;
        max: number;
    };
}

interface SetActorIdFunctionEntrieTypes {
    function: "set_actor_id";
    id?: string;
}

interface SetArmorTrimFunctionEntrieTypes {
    function: "set_armor_trim";
    material: MaterialTrimEnums;
    pattern: PatternTrimEnums;
}

interface SetBannerDetailsFunctionEntrieTypes {
    function: "set_banner_details";
    type?: number;
}

interface SetBookContentsFunctionEntrieTypes {
    function: "set_book_contents";
    author: string;
    title: string;
    pages: (string | RawMessage)[];
}

interface SetCountFunctionEntrieTypes {
    function: "set_count";
    count: number | {
        min: number;
        max: number;
    };
}

interface SetDamageFunctionEntrieTypes {
    function: "set_damage";
    damage: number | {
        min: number;
        max: number;
    };
}

interface SetDataFunctionEntrieTypes {
    function: "set_data";
    data: number | {
        min: number;
        max: number;
    };
}

interface SetLoreFunctionEntrieTypes {
    function: "set_lore";
    lore: (string | RawMessage)[];
}

interface SetNameFunctionEntrieTypes {
    function: "set_name";
    name: string;
}

interface SetOminousBottleAmplifierFunctionEntrieTypes {
    function: "set_ominous_bottle_amplifier";
    amplifier: number | {
        min: number;
        max: number;
    };
}

interface SetPotionFunctionEntrieTypes {
    function: "set_potion";
    id: PotionIdEnums;
}

interface SetStewEffectFunctionEntrieTypes {
    function: "set_stew_effect";
    effects: EffectTypeStewTypes[];
}

interface EffectTypeStewTypes {
    id: number;
    duration?: number;
}

interface SpecificEnchantsListTypes {
    id: EnchantsIdEnums;
    level: number | [number, number];
}

interface SpecificEnchantsFunctionEntrieTypes {
    function: "specific_enchants";
    enchants: EnchantsIdEnums | SpecificEnchantsListTypes | SpecificEnchantsListTypes[];
}

type FunctionsEntries = FunctionsEntriesBaseTypes | CarryOverBlockEntityDataFunctionEntrieTypes | EnchantBookForTradingFunctionEntrieTypes | EnchantRandomGearFunctionEntrieTypes | EnchantRandomlyFunctionEntrieTypes | EnchantWithLevelsFunctionEntrieTypes | ExplorationMapFunctionEntrieTypes | FillContainerFunctionEntrieTypes | FurnaceSmeltFunctionEntrieTypes | LootingEnchantFunctionEntrieTypes | RandomAuxValueFunctionEntrieTypes | RandomBlockStateFunctionEntrieTypes | SetActorIdFunctionEntrieTypes | SetArmorTrimFunctionEntrieTypes | SetBannerDetailsFunctionEntrieTypes | SetBookContentsFunctionEntrieTypes | SetCountFunctionEntrieTypes | SetDamageFunctionEntrieTypes | SetDataFunctionEntrieTypes | SetLoreFunctionEntrieTypes | SetNameFunctionEntrieTypes | SetOminousBottleAmplifierFunctionEntrieTypes | SetPotionFunctionEntrieTypes | SetStewEffectFunctionEntrieTypes | SpecificEnchantsFunctionEntrieTypes;

interface BiomeHasTagConditionTypes {
    condition: "biome_has_tag";
    operator?: OperatorTypesEnums;
    tag?: string;
}

interface BoolPropertyConditionTypes {
    condition: "bool_property";
    operator?: OperatorTypesEnums;
    domain: string;
    value: boolean;
}

interface DamagedByEntityConditionTypes {
    condition: "damaged_by_entity";
    operator?: OperatorTypesEnums;
    entityType?: string | MinecraftEntityTypes;
}

interface EntityKilledConditionTypes {
    condition: "entity_killed";
    operator?: OperatorTypesEnums;
    entityType: string | MinecraftEntityTypes;
}

interface EnumPropertyConditionTypes {
    condition: "enum_property";
    operator?: OperatorTypesEnums;
    domain: string;
    value: string;
}

interface FloatPropertyConditionTypes {
    condition: "float_property";
    operator?: OperatorTypesEnums;
    domain: string;
    value: number;
}

interface HasMarkVariantConditionTypes {
    condition: "has_mark_variant";
    operator?: OperatorTypesEnums;
    value?: number;
}

interface HasPropertyConditionTypes {
    condition: "has_property";
    operator?: OperatorTypesEnums;
    domain: string;
}

interface HasVariantConditionTypes {
    condition: "has_variant";
    operator?: OperatorTypesEnums;
    value: number;
}

interface IntPropertyConditionTypes {
    condition: "int_property";
    operator?: OperatorTypesEnums;
    domain: string;
    value: number;
}

interface IsBabyConditionTypes {
    condition: "is_baby";
    operator?: OperatorTypesEnums;
}

interface KilledByPlayerConditionTypes {
    condition: "killed_by_player";
    operator?: OperatorTypesEnums;
}

interface KilledByPlayerOrPetsConditionTypes {
    condition: "killed_by_player_or_pets";
    operator?: OperatorTypesEnums;
}

interface KilledByEntityConditionTypes {
    condition: "killed_by_entity";
    operator?: OperatorTypesEnums;
    entityType?: string | MinecraftEntityTypes;
}

interface MatchToolConditionTypes {
    condition: "match_tool";
    operator?: OperatorTypesEnums;
    item?: string | MinecraftItemTypes,
    count?: number | {
        min: number;
        max: number;
    };
    durability?: number | {
        min: number;
        max: number;
    };
    enchantments?: ListOfEnchantmentsMatchTools[];
    "minecraft:match_tool_filter_all"?: string[];
    "minecraft:match_tool_filter_any"?: string[];
    "minecraft:match_tool_filter_none"?: string[];
}

interface ListOfEnchantmentsMatchTools {
    enchantment: EnchantmentsEnum;
    levels: {
        rangeMin: number;
        rangeMax: number;
    };
}

interface PassengerOfEntityConditionTypes {
    condition: "passenger_of_entity";
    operator?: OperatorTypesEnums;
    entityType?: string | MinecraftEntityTypes;
}

interface RandomChanceConditionTypes {
    condition: "random_chance";
    operator?: OperatorTypesEnums;
    chance?: FloatRatio;
    maxChance?: FloatRatio;
}

interface RandomChanceWithLootingConditionTypes {
    condition: "random_chance_with_looting";
    operator?: OperatorTypesEnums;
    chance?: FloatRatio;
    lootingMultiplier?: FloatRatio;
}

interface RandomDifficultyChanceConditionTypes {
    condition: "random_difficulty_chance";
    operator?: OperatorTypesEnums;
    defaultChance?: FloatRatio;
    peaceful?: FloatRatio;
    easy?: FloatRatio;
    normal?: FloatRatio;
    hard?: FloatRatio;
}

interface RandomRegionalDifficultyChanceConditionTypes {
    condition: "random_regional_difficulty_chance";
    maxChance: number;
}

type ConditionsTypes = BiomeHasTagConditionTypes | BoolPropertyConditionTypes | DamagedByEntityConditionTypes | EntityKilledConditionTypes | EnumPropertyConditionTypes | FloatPropertyConditionTypes | HasMarkVariantConditionTypes | HasPropertyConditionTypes | HasVariantConditionTypes | IntPropertyConditionTypes | KilledByEntityConditionTypes | MatchToolConditionTypes | PassengerOfEntityConditionTypes | RandomChanceConditionTypes | RandomChanceWithLootingConditionTypes | RandomDifficultyChanceConditionTypes | RandomRegionalDifficultyChanceConditionTypes | KilledByPlayerConditionTypes | KilledByPlayerOrPetsConditionTypes | IsBabyConditionTypes;