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
    EntityBiomeType,
    EntityPaletteColor,
    EntityDifficultyType,
    TemperatureCategory,
    EntityFilterTrigger,
    EntityEffectTypes,
    EntityFiltersTarget,
    EntityAttackableTargetFilters,
    EntityAttackableTargetPriorityFilters,
};

/**
 * Lista de targets disponibles en los filtros de entidades.
 * @author HaJuegos - 20-09-2026
 */
type EntityFilterSubject = "block" | "damager" | "other" | "parent" | "player" | "self" | "target";

/**
 * Lista de operadores disponibles en los filtros de entidades.
 * @author HaJuegos - 20-09-2026
 */
type EntityFilterOperator = "==" | "!=" | ">" | ">=" | "<" | "<=" | "equals" | "not";

/**
 * Lista de slots o ubicaciones de equipamiento para filtros de ítems.
 * @author HaJuegos - 20-09-2026
 */
type EntityFilterDomain = | "any" | "armor" | "body" | "feet" | "hand" | "head" | "inventory" | "leg" | "main_hand" | "torso";

/**
 * Lista de valores permitidos en los filtros de entidades.
 * @author HaJuegos - 20-09-2026
 */
type EntityFilterValue = string | number | boolean | null;

/**
 * Lista de habilidades disponibles para comprobar en entidades.
 * @author HaJuegos - 21-09-2026
 */
type EntityAbility = | "flySpeed" | "flying" | "instabuild" | "invulnerable" | "lightning" | "mayfly" | "mute" | "noclip" | "verticalFlySpeed" | "walkSpeed" | "worldbuilder";

/**
 * Lista de todos los tipos de daños que puede sufrir una entidad.
 * @author HaJuegos - 21-09-2026
 */
type EntityDamageType = "all" | "anvil" | "attack" | "block_explosion" | "contact" | "drowning" | "entity_explosion" | "fall" | "falling_block" | "fatal" | "fire" | "fire_tick" | "fly_into_wall" | "lava" | "magic" | "none" | "override" | "piston" | "projectile" | "self_destruct" | "sonic_boom" | "stalactite" | "stalagmite" | "starve" | "suffocation" | "thorns" | "void" | "wither";

/**
 * Lista de todos los biomas disponibles en un filtro de entidad.
 * @author HaJuegos - 21-09-2026
 */
type EntityBiomeType = | "beach" | "desert" | "extreme_hills" | "flat" | "forest" | "ice" | "jungle" | "mesa" | "mushroom_island" | "ocean" | "plain" | "river" | "savanna" | "stone_beach" | "swamp" | "taiga" | "the_end" | "the_nether";

/**
 * Lista de colores de la paleta de minecraft para comprobar en filtros de entidades.
 * @author HaJuegos - 21-09-2026
 */
type EntityPaletteColor = | "black" | "blue" | "brown" | "cyan" | "gray" | "green" | "light_blue" | "light_green" | "magenta" | "orange" | "pink" | "purple" | "red" | "silver" | "white" | "yellow";

/**
 * Lista de dificultades que hay en el juego disponibles en filtros de entidades.
 * @author HaJuegos - 21-09-2026
 */
type EntityDifficultyType = "easy" | "hard" | "normal" | "peaceful";

/**
 * Lista disponibles de temperaturas a evaluar en los filtros de entidades.
 * @author HaJuegos - 21-09-2026
 */
type TemperatureCategory = "cold" | "mild" | "ocean" | "warm";

/**
 * Lista disponibles de efectos a evaluar en los filtros de entidades.
 * @author HaJuegos - 21-09-2026
 */
type EntityEffectTypes = "absorption" | "bad_omen" | "blindness" | "conduit_power" | "darkness" | "fatal_poison" | "fire_resistance" | "haste" | "health_boost" | "hunger" | "infested" | "instant_damage" | "instant_health" | "invisibility" | "jump_boost" | "levitation" | "mining_fatigue" | "nausea" | "night_vision" | "oozing" | "poison" | "raid_omen" | "regeneration" | "resistance" | "saturation" | "slow_falling" | "slowness" | "speed" | "strength" | "trial_omen" | "village_hero" | "water_breathing" | "weakness" | "weaving" | "wind_charged" | "wither";

/**
 * Lista de comprobaciones en los filtros de entidades.
 * @enum {string}
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
    inCaravan = "in_caravan",
    inClouds = "in_clouds",
    inContactWithWater = "in_contact_with_water",
    inLava = "in_lava",
    inNether = "in_nether",
    inOverworld = "in_overworld",
    inWater = "in_water",
    inWaterOrRain = "in_water_or_rain",
    inactivityTimer = "inactivity_timer",
    intProperty = "int_property",
    isAltitude = "is_altitude",
    isAvoidingMobs = "is_avoiding_mobs",
    isBaby = "is_baby",
    isBiome = "is_biome",
    isBlock = "is_block",
    isBoundToCreakingHeart = "is_bound_to_creaking_heart",
    isBrightness = "is_brightness",
    isClimbing = "is_climbing",
    isColor = "is_color",
    isControllingPassengerFamily = "is_controlling_passenger_family",
    isDaytime = "is_daytime",
    isDifficulty = "is_difficulty",
    isFamily = "is_family",
    isGameRule = "is_game_rule",
    isHumid = "is_humid",
    isImmobile = "is_immobile",
    isInSameVehicle = "is_in_same_vehicle",
    isInVillage = "is_in_village",
    isLeashed = "is_leashed",
    isLeashedTo = "is_leashed_to",
    isMarkVariant = "is_mark_variant",
    isMissingHealth = "is_missing_health",
    isMoving = "is_moving",
    isNavigating = "is_navigating",
    isOwner = "is_owner",
    isPanicking = "is_panicking",
    isPersistent = "is_persistent",
    isRaider = "is_raider",
    isRiding = "is_riding",
    isRidingSelf = "is_riding_self",
    isSitting = "is_sitting",
    isSkinId = "is_skin_id",
    isSleeping = "is_sleeping",
    isSneakHeld = "is_sneak_held",
    isSneaking = "is_sneaking",
    isSnowCovered = "is_snow_covered",
    isSprinting = "is_sprinting",
    isTamed = "is_tamed",
    isTarget = "is_target",
    isTemperatureType = "is_temperature_type",
    isTemperatureValue = "is_temperature_value",
    isUnderground = "is_underground",
    isUnderwater = "is_underwater",
    isVariant = "is_variant",
    isVehicleFamily = "is_vehicle_family",
    isVisible = "is_visible",
    isWaterlogged = "is_waterlogged",
    /**
     * @deprecated - Ya no funciona en versiones actuales. Usa {@link EntityFilterTest.weather} o {@link EntityFilterTest.weatherAtPosition}.
    */
    isWeather = "is_weather",
    lightLevel = "light_level",
    moonIntensity = "moon_intensity",
    moonPhase = "moon_phase",
    onFire = "on_fire",
    onGround = "on_ground",
    onHotBlock = "on_hot_block",
    onLadder = "on_ladder",
    ownerDistance = "owner_distance",
    randomChance = "random_chance",
    redstoneStrengthAtPosition = "redstone_strength_at_position",
    riderCount = "rider_count",
    surfaceMob = "surface_mob",
    takingFireDamage = "taking_fire_damage",
    targetDistance = "target_distance",
    trusts = "trusts",
    wasLastHurtBy = "was_last_hurt_by",
    weather = "weather",
    weatherAtPosition = "weather_at_position",
    yRotation = "y_rotation",
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
 * Lista de eventos con filtros y targets para condiciones mas especificas.
 * @interface EntityGrowTrigger
 * @author HaJuegos - 21-09-2026
 */
interface EntityFilterTrigger {
    /**
     * (Opcional) Lista de filtros condicionales a cumplir.
     * @type {?EntityFilter}
     */
    filters?: EntityFilter;

    /**
     * Evento en concreto a ejecutar cuando la condicion se cumpla.
     * @type {string}
     */
    event: string;

    /**
     * Target en concreto a seleccionar cuando el evento se cumpla.
     * @type {EntityFilterSubject}
     */
    target: EntityFilterSubject;
}

/**
 * Lista de eventos y targets para condiciones mas especificas.
 * @interface EntityGrowTrigger
 * @author HaJuegos - 21-09-2026
 */
interface EntityFiltersTarget {
    /**
    * Evento en concreto a ejecutar cuando la condicion se cumpla.
    * @type {string}
    */
    event: string;

    /**
     * Target en concreto a seleccionar cuando el evento se cumpla.
     * @type {EntityFilterSubject}
     */
    target: EntityFilterSubject;
}

/**
 * Lista de parametros para seleccionar targets en componentes que lo requieran.
 * @interface EntityAttackableTargetFilters
 * @author HaJuegos - 23-09-2026
 */
interface EntityAttackableTargetFilters {
    /**
     * Filtros condicionales a cumplir para seleccionar las entidades.
     * @type {EntityFilter}
     */
    filters: EntityFilter;

    /**
     * (Opcional) Revisar si los targets estan sin grupo o con menor cantidad de grupo.
     * @type {?boolean}
     */
    checkIfOutnumbered?: boolean;

    /**
     * (Opcional) Tiempo en segundos para volver a seleccionar otro target.
     * @type {?number}
     */
    cooldown?: number;

    /**
     * (Opcional) Distancia maxima a considerar para obtener un target.
     * @type {?number}
     */
    maxDist?: number;

    /**
     * (Opcional) Maxima distancia en altura para considerar el target.
     * @type {?number}
     */
    maxFlee?: number;

    /**
     * (Opcional) Maxima distancia en altura para considerar el target.
     * @type {?number}
     */
    maxHeight?: number;

    /**
     * (Opcional) ¿Se puede hacer target a las entidades a travez de bloques?
     * @type {?boolean}
     */
    mustSee?: boolean;

    /**
     * (Opcional) Duracion en segundos para que la entidad busque un nuevo target antes de olvidarse de el y buscar otro nuevo cuando ya no sea visible.
     * @type {?number}
     */
    mustSeeForgetDuration?: number;

    /**
     * (Opcional) El mob dejara de ser el target si deja de cumplir con alguna de las condiciones puestas en los filtros.
     * @type {?boolean}
     */
    reevaluateDescription?: boolean;

    /**
     * Velocidad del mob multiplicado cuando corre.
     * @type {?number}
     */
    sprintSpeedMultiplier?: number;

    /**
     * Velocidad del mob multiplicado cuando camina.
     * @type {?number}
     */
    walkSpeedMultiplier?: number;

    /**
     * (Opcional) Rango por defecto para poder detectar a un target con los filtros.
     * @type {?number}
     */
    withinDefault?: number;
}

/**
 * Lista de parametros para seleccionar targets en componentes que lo requieran, pero con orden de prioridades.
 * @interface EntityAttackableTargetPriorityFilters
 * @extends {EntityAttackableTargetFilters}
 * @author HaJuegos - 23-09-2026
 */
interface EntityAttackableTargetPriorityFilters extends EntityAttackableTargetFilters {
    /**
     * Orden de tracks por filtro de entidades, si es menor o igual a 0, es el primero a considerar, si es mayor o igual a 1, es el despues a considerar. 
     * @type {?number}
     */
    priority: number;
}

/**
 * Lista de filtros que se pueden usar en filtros de entidades.
 * @author HaJuegos - 20-09-2026
 */
type EntityFilter = BaseEntityFilter | EntityFilterGroup;