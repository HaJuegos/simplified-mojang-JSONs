export {
    EntityFilterSubject,
    EntityFilterOperator,
    EntityFilterDomain,
    EntityFilterValue,
    EntityFilterTest,
    BaseEntityFilter,
    EntityFilterGroup,
    EntityFilter,
    EntityAbility,
    EntityDamageType,
};

/**
 * Lista de targets disponibles en los filtros de entidades.
 * @typedef {EntityFilterSubject}
 * @author HaJuegos - 20-09-2026
 */
type EntityFilterSubject = "block" | "damager" | "other" | "parent" | "player" | "self" | "target";

/**
 * Lista de operadores disponibles en los filtros de entidades.
 * @typedef {EntityFilterOperator}
 * @author HaJuegos - 20-09-2026
 */
type EntityFilterOperator = "==" | "!=" | ">" | ">=" | "<" | "<=" | "equals" | "not";

/**
 * Lista de slots o ubicaciones de equipamiento para filtros de ítems.
 * @typedef {EntityFilterDomain}
 * @author HaJuegos - 20-09-2026
 */
type EntityFilterDomain = | "any" | "armor" | "body" | "feet" | "hand" | "head" | "inventory" | "leg" | "main_hand" | "torso";

/**
 * Lista de valores permitidos en los filtros de entidades.
 * @typedef {EntityFilterValue}
 * @author HaJuegos - 20-09-2026
 */
type EntityFilterValue = string | number | boolean | null;

/**
 * Lista de habilidades disponibles para comprobar en entidades.
 * @typedef {EntityAbility}
 * @author HaJuegos - 21-09-2026
 */
type EntityAbility = | "flySpeed" | "flying" | "instabuild" | "invulnerable" | "lightning" | "mayfly" | "mute" | "noclip" | "verticalFlySpeed" | "walkSpeed" | "worldbuilder";

/**
 * Lista de todos los tipos de daños que puede sufrir una entidad.
 * @typedef {EntityDamageType}
 * @author HaJuegos - 21-09-2026
 */
type EntityDamageType = | "anvil" | "attack" | "block_explosion" | "contact" | "drowning" | "entity_explosion" | "fall" | "falling_block" | "fatal" | "fire" | "fire_tick" | "fly_into_wall" | "lava" | "magic" | "none" | "override" | "piston" | "projectile" | "self_destruct" | "sonic_boom" | "stalactite" | "stalagmite" | "starve" | "suffocation" | "thorns" | "void" | "wither";

/**
 * Lista de comprobaciones en los filtros de entidades.
 * @enum {number}
 * @author HaJuegos - 20-09-2026
 */
enum EntityFilterTest {
    actorHasItemWithEnchantmentInSlot = "actor_has_item_with_enchantment_in_slot",
    actorHealth = "actor_health",
    allSlotsEmpty = "all_slots_empty",
    anySlotEmpty = "any_slot_empty",
    boolProperty = "bool_property",
    clockTime = "clock_time",
    distanceToNearestPlayer = "distance_to_nearest_player",
    enumProperty = "enum_property",
    floatProperty = "float_property",
    hasAbility = "has_ability",
    hasBiomeTag = "has_biome_tag",
    hasComponent = "has_component",
    hasContainerOpen = "has_container_open",
    hasDamage = "has_damage",
    hasDamagedEquipment = "has_damaged_equipment",
    hasEquipment = "has_equipment",
    hasEquipmentTag = "has_equipment_tag",
    hasItemWithComponent = "has_item_with_component",
    hasMobEffect = "has_mob_effect",
    hasNametag = "has_nametag",
    hasProperty = "has_property",
    hasRangedWeapon = "has_ranged_weapon",
    hasSameEquipmentInSlotAs = "has_same_equipment_in_slot_as",
    hasSilkTouch = "has_silk_touch",
    hasTag = "has_tag",
    hasTarget = "has_target",
    hasTradeSupply = "has_trade_supply",
    homeDistance = "home_distance",
    hourlyClockTime = "hourly_clock_time",
    inBlock = "in_block",
}

/**
 * Plantilla general para los filtros de entidades.
 * @interface BaseEntityFilter
 * @author HaJuegos - 20-09-2026
 */
interface BaseEntityFilter {
    /**
     * Comprobacion de la entidad a considerar.
     * @type {string}
     */
    test: string;

    /**
     * (Opcional) Target en cuestion afectado por el filtro.
     * @type {?EntityFilterSubject}
     */
    subject?: EntityFilterSubject;

    /**
     * (Opcional) Valor o parametro a considerar para la validacion del filtro.
     * @type {?EntityFilterDomain | string}
     */
    domain?: EntityFilterDomain | string;

    /**
     * (Opcional) Operador matematico a ejecutar para validar el filtro.
     * @type {?EntityFilterOperator}
     */
    operator?: EntityFilterOperator;

    /**
     * (Opcional) Valor a considerar para validar el filtro.
     * @type {?EntityFilterValue}
     */
    value?: EntityFilterValue;
}

/**
 * Lista de filtros agrupados para condiciones mas especificas.
 * @interface EntityFilterGroup
 * @author HaJuegos - 20-09-2026
 */
interface EntityFilterGroup {
    /**
     * (Opcional) Grupo de filtros que si o si todas deben validarse para cumplir la condicion.
     * @type {?EntityFilter[]}
     */
    all_of?: EntityFilter[];

    /**
     * (Opcional) Grupo de filtros donde alguno o cualquiera debe validarse para cumplir la condicion.
     * @type {?EntityFilter[]}
     */
    any_of?: EntityFilter[];

    /**
     * (Opcional) Grupo de filtros donde ninguno debe validarse para cumplir la condicion.
     * @type {?EntityFilter[]}
     */
    none_of?: EntityFilter[];
}

/**
 * Lista de filtros que se pueden usar en filtros de entidades.
 * @typedef {EntityFilter}
 * @author HaJuegos - 20-09-2026
 */
type EntityFilter = BaseEntityFilter | EntityFilterGroup;