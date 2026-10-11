import { RawMessage } from "@minecraft/server";
import { MinecraftEntityTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";

export {
    PoolsParamsTypes,
    BPLootTableFinalDefinition,
};

/**
 * Lista de condiciones base que no requieren de un parametro para funcionar.
 * @author HaJuegos - 11-10-2026
 */
type ConditionsSimpleEnum = "is_baby" | "killed_by_player" | "killed_by_player_or_pets";

/**
 * Lista de encantamientos base para asignar a la funcion.
 * @author HaJuegos - 11-10-2026
 */
type EnchantmentsEnum = | "protection" | "fire_protection" | "feather_falling" | "blast_protection" | "projectile_protection" | "thorns" | "respiration" | "depth_strider" | "aqua_affinity" | "sharpness" | "smite" | "bane_of_arthropods" | "knockback" | "fire_aspect" | "looting" | "efficiency" | "silk_touch" | "unbreaking" | "fortune" | "power" | "punch" | "flame" | "infinity" | "luck_of_the_sea" | "lure" | "frost_walker" | "mending" | "binding" | "vanishing" | "impaling" | "riptide" | "loyalty" | "channeling" | "multishot" | "piercing" | "quick_charge" | "soul_speed" | "swift_sneak" | "wind_burst" | "density" | "breach" | (string & {});

/**
 * Tipado general estricto para limitar un numero float de 0 a 1.
 * @author HaJuegos - 11-10-2026
 */
type FloatRatio = 0 | 1 | `0.${number}`;

/**
 * Lista de funciones base sin parametros para funcionar
 * @author HaJuegos - 11-10-2026
 */
type FunctionsEntriesBasicEnums = "random_dye" | "set_data_from_color_index" | "trader_material_type";

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
 * Definicion final para la creacion base de un loot table.
 * @interface BPLootTableFinalDefinition
 * @author HaJuegos - 11-10-2026
 */
interface BPLootTableFinalDefinition {
    /**
     * Lista de objectos de esta loot table en cuestion.
     * @type {PoolsParamsTypes[]}
     */
    pools: PoolsParamsTypes[];
}

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
    rolls: number | {
        min: number;
        max: number;
    };

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
    bonusChance: number;
    bonusRolls: number;
    initialRange: number;
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
    weight: number;
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

interface EnchantBookForTradingFunctionEntrieTypes {
    function: "enchant_book_for_trading";
    baseCost: number;
    baseRandomCost: number;
    perLevelCost: number;
    perLevelRandomCost: number;
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

interface FurnaceSmeltFunctionEntrieTypes {
    function: "furnace_smelt";
    conditions?: ConditionsTypes[];
}

interface LootingEnchantFunctionEntrieTypes {
    function: "looting_enchant";
    count: {
        min: number;
        max: number;
    };
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
    duration: number;
}

interface SpecificEnchantsFunctionEntrieTypes {
    function: "specific_enchants";
    enchants: EnchantsIdEnums;
}

type FunctionsEntries = FunctionsEntriesBaseTypes | CarryOverBlockEntityDataFunctionEntrieTypes | EnchantBookForTradingFunctionEntrieTypes | EnchantRandomGearFunctionEntrieTypes | EnchantRandomlyFunctionEntrieTypes | EnchantWithLevelsFunctionEntrieTypes | ExplorationMapFunctionEntrieTypes | FillContainerFunctionEntrieTypes | FurnaceSmeltFunctionEntrieTypes | LootingEnchantFunctionEntrieTypes | RandomAuxValueFunctionEntrieTypes | RandomBlockStateFunctionEntrieTypes | SetActorIdFunctionEntrieTypes | SetArmorTrimFunctionEntrieTypes | SetBannerDetailsFunctionEntrieTypes | SetBookContentsFunctionEntrieTypes | SetCountFunctionEntrieTypes | SetDamageFunctionEntrieTypes | SetDataFunctionEntrieTypes | SetLoreFunctionEntrieTypes | SetNameFunctionEntrieTypes | SetOminousBottleAmplifierFunctionEntrieTypes | SetPotionFunctionEntrieTypes | SetStewEffectFunctionEntrieTypes | SpecificEnchantsFunctionEntrieTypes;

interface ConditionsBaseTypes {
    condition: ConditionsSimpleEnum;
}

interface BiomeHasTagConditionTypes {
    condition: "biome_has_tag";
    tag?: string;
}

interface BoolPropertyConditionTypes {
    condition: "bool_property";
    domain: string;
    value: boolean;
}

interface DamagedByEntityConditionTypes {
    condition: "damaged_by_entity";
    entityType?: string | MinecraftEntityTypes;
}

interface EntityKilledConditionTypes {
    condition: "entity_killed";
    entityType: string | MinecraftEntityTypes;
}

interface EnumPropertyConditionTypes {
    condition: "enum_property";
    domain: string;
    value: string;
}

interface FloatPropertyConditionTypes {
    condition: "float_property";
    domain: string;
    value: number;
}

interface HasMarkVariantConditionTypes {
    condition: "has_mark_variant";
    value?: number;
}

interface HasPropertyConditionTypes {
    condition: "has_property";
    domain: string;
}

interface HasVariantConditionTypes {
    condition: "has_variant";
    value: number;
}

interface IntPropertyConditionTypes {
    condition: "int_property";
    domain: string;
    value: number;
}

interface KilledByEntityConditionTypes {
    condition: "killed_by_entity";
    entityType?: string | MinecraftEntityTypes;
}

interface MatchToolConditionTypes {
    condition: "match_tool";
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
    entityType?: string | MinecraftEntityTypes;
}

interface RandomChanceConditionTypes {
    condition: "random_chance";
    chance?: FloatRatio;
    maxChance?: FloatRatio;
}

interface RandomChanceWithLootingConditionTypes {
    condition: "random_chance_with_looting";
    chance?: FloatRatio;
    lootingMultiplier?: FloatRatio;
}

interface RandomDifficultyChanceConditionTypes {
    condition: "random_difficulty_chance";
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

type ConditionsTypes = ConditionsBaseTypes | BiomeHasTagConditionTypes | BoolPropertyConditionTypes | DamagedByEntityConditionTypes | EntityKilledConditionTypes | EnumPropertyConditionTypes | FloatPropertyConditionTypes | HasMarkVariantConditionTypes | HasPropertyConditionTypes | HasVariantConditionTypes | IntPropertyConditionTypes | KilledByEntityConditionTypes | MatchToolConditionTypes | PassengerOfEntityConditionTypes | RandomChanceConditionTypes | RandomChanceWithLootingConditionTypes | RandomDifficultyChanceConditionTypes | RandomRegionalDifficultyChanceConditionTypes;