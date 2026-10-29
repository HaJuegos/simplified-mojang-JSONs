import { MoLangValue } from "../../MoLang";

export {
    FormatVersionAttachList,
    RPAttachableDefinition,
    RPAttachableOverride,
    AttachableBaseParams,

    GeometryVanillaValues,
    MaterialVanillaValues,
};

/**
 * Lista de versiones para el format version permitidas en un Attachable.
 * @author HaJuegos - 29-10-2026
 * @enum {string}
 */
enum FormatVersionAttachList {
    MostRecent = "1.10.0",
    V1_8_0 = "1.8.0"
}

/**
 * Lista de tipados generales vanillas que permiten la nueva asignacion de una geometria en un Attachable y/o entidad.
 * @author HaJuegos - 29-10-2026
 */
type GeometryVanillaKeys = "default" | "bow_pulling_0" | "bow_pulling_1" | "bow_pulling_2" | "crossbow_pulling_0" | "crossbow_pulling_1" | "crossbow_pulling_2" | "crossbow_arrow" | "crossbow_rocket" | (string & {});

/**
 * Lista de geometrias vanillas extraidas de los archivos vanillas permitidas a usar.
 * @author HaJuegos - 29-10-2026
 */
type GeometryVanillaValues = "geometry.bow_standby" | "geometry.bow_pulling_0" | "geometry.bow_pulling_1" | "geometry.bow_pulling_2" | "geometry.humanoid.armor.boots" | "geometry.player.armor.boots" | "geometry.humanoid.armor.chestplate" | "geometry.player.armor.chestplate" | "geometry.humanoid.armor.helmet" | "geometry.player.armor.helmet" | "geometry.humanoid.armor.leggings" | "geometry.player.armor.leggings" | "geometry.crossbow_standby" | "geometry.crossbow_pulling_0" | "geometry.crossbow_pulling_1" | "geometry.crossbow_pulling_2" | "geometry.crossbow_arrow" | "geometry.crossbow_rocket" | "geometry.elytra" | "geometry.shield" | "geometry.trident" | "geometry.humanoid" | "geometry.cape" | "geometry.humanoid.custom" | "geometry.humanoid.customSlim" | "geometry.humanoid.armor1" | "geometry.humanoid.armor2" | "geometry.quadruped" | "geometry.irongolem" | "geometry.chalkboard_small" | "geometry.chalkboard_medium" | "geometry.chalkboard_large" | "geometry.agent" | "geometry.bed" | "geometry.player_head" | "geometry.mob_head" | "geometry.dragon_head" | "minecraft:geometry.shelf_mushroom_large" | "minecraft:geometry.shelf_mushroom_small" | "minecraft:geometry.straw_bed_foot" | "minecraft:geometry.straw_bed_head" | "geometry.allay" | "geometry.armadillo" | "geometry.armor_stand" | "geometry.arrow" | "geometry.axolotl" | "geometry.armadillo.baby" | "geometry.humanoid.baby.armor.boots" | "geometry.humanoid.baby.armor.chestplate" | "geometry.humanoid.baby.armor.helmet" | "geometry.humanoid.baby.armor.leggings" | "geometry.axolotl.baby" | "geometry.bee.baby" | "geometry.camel.baby" | "geometry.cat.baby" | "geometry.chicken.baby" | "geometry.cow.baby" | "geometry.dolphin.baby" | "geometry.donkeymule.baby" | "geometry.fox.baby" | "geometry.goat.baby" | "geometry.hoglin.baby" | "geometry.horse.baby" | "geometry.llama.baby" | "geometry.panda.baby" | "geometry.pig.baby" | "geometry.piglin.baby" | "geometry.polar_bear.baby" | "geometry.rabbit.baby" | "geometry.sheep.baby" | "geometry.squid.baby" | "geometry.strider.baby" | "geometry.turtle.baby" | "geometry.villager.baby" | "geometry.wolf.baby" | "geometry.zombie.baby" | "geometry.villagerzombie.baby" | "geometry.bat" | "geometry.bat_v2" | "geometry.bee" | "geometry.blaze" | "geometry.skeleton.bogged" | "geometry.bogged.armor" | "geometry.breeze" | "geometry.breeze_eyes" | "geometry.breeze_wind_top" | "geometry.breeze_wind_mid" | "geometry.breeze_wind_bottom" | "geometry.camel" | "geometry.camel_husk" | "geometry.cat" | "geometry.chicken.cold" | "geometry.chicken.v1.12" | "geometry.chicken" | "geometry.cod" | "geometry.copper_golem" | "geometry.copper_golem.flower" | "geometry.copper_golem.running" | "geometry.copper_golem.sitting" | "geometry.copper_golem.star" | "geometry.cow.cold" | "geometry.cow.v1.8" | "geometry.cow.v2" | "geometry.cow.warm" | "geometry.cow" | "geometry.creaking" | "geometry.creeper.v1.8" | "geometry.creeper.charged.v1.8" | "geometry.creeper" | "geometry.creeper.charged" | "geometry.dolphin" | "geometry.zombie.drowned.v1.16" | "geometry.zombie.drowned" | "geometry.enderman.v1.8" | "geometry.enderman" | "geometry.endermite" | "geometry.ender_crystal" | "geometry.dragon" | "geometry.evocation_fang" | "geometry.evoker.v1.8" | "geometry.evoker" | "geometry.experience_orb" | "geometry.fireball" | "geometry.fireworks_rocket" | "geometry.fishing_hook" | "geometry.fox" | "geometry.frog" | "geometry.ghast" | "geometry.glow_squid" | "geometry.goat" | "geometry.guardian.v1.8" | "geometry.guardian" | "geometry.happy_ghast" | "geometry.happy_ghast_ropes" | "geometry.harness" | "geometry.hoglin" | "geometry.horse" | "geometry.horse.v2" | "geometry.horse.v3" | "geometry.humanoid.custom" | "geometry.zombie.husk.v1.8" | "geometry.zombie.husk" | "geometry.item_sprite" | "geometry.leash_knot" | "geometry.llama.v1.8" | "geometry.llamaspit" | "geometry.llama" | "geometry.lavaslime" | "geometry.magma_cube_v2" | "geometry.minecart.v1.8" | "geometry.minecart" | "geometry.mooshroom.v1.8" | "geometry.mooshroom.v2" | "geometry.mooshroom" | "geometry.nautilus" | "geometry.nautilus_saddle" | "geometry.nautilus_armor" | "geometry.nautilus.baby" | "geometry.npc" | "geometry.ocelot.v1.8" | "geometry.ocelot" | "geometry.panda" | "geometry.parched" | "geometry.parrot" | "geometry.phantom" | "geometry.pig.v1.8" | "geometry.pig.v3" | "geometry.pig" | "geometry.piglin" | "geometry.pillager" | "geometry.player.armor.base" | "geometry.player.armor1" | "geometry.player.armor2" | "geometry.polarbear" | "geometry.pufferfish.small.v1.8" | "geometry.pufferfish.mid.v1.8" | "geometry.pufferfish.large.v1.8" | "geometry.pufferfish.small" | "geometry.pufferfish.mid" | "geometry.pufferfish.large" | "geometry.rabbit.v1.8" | "geometry.rabbit.v2" | "geometry.rabbit" | "geometry.ravager" | "geometry.salmon" | "geometry.sheep.sheared.v1.8" | "geometry.sheep.v1.8" | "geometry.sheep.sheared" | "geometry.sheep" | "geometry.shulker.v1.8" | "geometry.shulker_bullet" | "geometry.shulker" | "geometry.silverfish" | "geometry.skeleton.v1.8" | "geometry.skeleton" | "geometry.slime" | "geometry.slime.armor" | "geometry.sniffer" | "geometry.sniffer.baby" | "geometry.snowgolem.v1.8" | "geometry.snowgolem" | "geometry.spear" | "geometry.spider.v1.8" | "geometry.spider" | "geometry.spyglass" | "geometry.squid" | "geometry.skeleton.stray.v1.8" | "geometry.stray.armor.v1.8" | "geometry.stray.armor" | "geometry.skeleton.stray" | "geometry.strider" | "geometry.sulfur_cube" | "geometry.sulfur_cube.small" | "geometry.tadpole" | "geometry.tripod_camera" | "geometry.tropicalfish_a" | "geometry.tropicalfish_b" | "geometry.turtle" | "geometry.vex.v1.8" | "geometry.vex" | "geometry.villager.v1.8" | "geometry.villager" | "geometry.villager_v2" | "geometry.vindicator.v1.8" | "geometry.vindicator" | "geometry.warden" | "geometry.wind_charge" | "geometry.villager.witch.v1.8" | "geometry.villager.witch" | "geometry.witherBoss" | "geometry.witherBoss.armor.v1.8" | "geometry.witherBoss.armor" | "geometry.skeleton.wither.v1.8" | "geometry.skeleton.wither" | "geometry.wither_skull" | "geometry.wolf" | "geometry.wolf.armor" | "geometry.zombie.v1.8" | "geometry.zombie" | "geometry.zombie_nautilus_coral" | "geometry.pigzombie.v1.8" | "geometry.pigzombie" | "geometry.pigzombie.baby.v1.8" | "geometry.pigzombie.baby" | "geometry.zombie.villager.v1.8" | "geometry.zombie.villager" | "geometry.zombie.villager_v2" | (string & {});

/**
 * Tipado general para la asignacion de un nuevo material en un Attachable y/o entidad.
 * @author HaJuegos - 29-10-2026
 */
type MaterialVanillaKeys = "default" | "enchanted" | (string & {});

/**
 * Lista de todos los materiales permitidos a usar extraidos de los archivos vanilla.
 * @author HaJuegos - 29-10-2026
 */
type MaterialVanillaValues = "agent" | "allay" | "alpha_block" | "alpha_block_color" | "armadillo" | "armor" | "armor_enchanted" | "armor_leather" | "armor_leather_enchanted" | "armor_stand" | "arrow" | "axolotl" | "axolotl_limbs" | "banner" | "banner_pole" | "bat" | "bat_v2" | "beacon_beam" | "beacon_beam_transparent" | "bed" | "bee" | "bell" | "blaze_body" | "blaze_head" | "boat" | "bogged" | "bogged_clothes" | "breeze" | "breeze_eyes" | "breeze_wind" | "breeze_wind_charge" | "camel" | "camera" | "cat" | "chalkboard" | "charged_creeper" | "chest" | "chest_boat" | "chicken" | "chicken_cold" | "chicken_legs" | "clownfish" | "cod" | "conduit" | "conduit_wind" | "copper_golem" | "copper_golem_eyes" | "copper_golem_flower" | "cow" | "cow_cold" | "creaking" | "creaking_eyes" | "creeper" | "cushion" | "dolphin" | "dragon_head" | "dragon_head_glint" | "drowned" | "egg" | "elytra" | "elytra_glint" | "enchanting_table_book" | "ender_crystal" | "ender_dragon" | "ender_pearl" | "enderman" | "enderman_invisible" | "endermite" | "entity" | "entity_alphablend" | "entity_alphablend_nocolor" | "entity_alphatest" | "entity_alphatest_change_color" | "entity_alphatest_change_color_glint" | "entity_alphatest_glint" | "entity_alphatest_glint_item" | "entity_alphatest_multicolor_tint" | "entity_alphatest_one_sided" | "entity_beam" | "entity_beam_additive" | "entity_change_color" | "entity_change_color_glint" | "entity_custom" | "entity_dissolve_layer0" | "entity_dissolve_layer1" | "entity_emissive" | "entity_emissive_alpha" | "entity_emissive_alpha_one_sided" | "entity_emissive_layer_alpha_blend" | "entity_emissive_layer_alpha_test" | "entity_flat_color_line" | "entity_glint" | "entity_lead_base" | "entity_loyalty_rope" | "entity_multitexture" | "entity_multitexture_alpha_test" | "entity_multitexture_alpha_test_color_mask" | "entity_multitexture_color_mask" | "entity_multitexture_masked" | "entity_multitexture_multiplicative_blend" | "entity_nocull" | "entity_static" | "evoker" | "experience_orb" | "eye_of_ender_signal" | "fang" | "fireball" | "fireworks_rocket" | "fishing_hook" | "fox" | "frog" | "frostbite" | "ghast" | "glow_squid" | "goat" | "guardian" | "guardian_ghost" | "harness" | "hoglin" | "horse" | "horse_leather_armor" | "husk" | "husk_clothes" | "ice_ball" | "iron_golem" | "item_in_hand" | "item_in_hand_entity_alphatest" | "item_in_hand_entity_alphatest_color" | "item_in_hand_entity_alphatest_one_sided_color" | "item_in_hand_glint" | "item_in_hand_multicolor_tint" | "leash_knot" | "lingering_potion_enchanted" | "llama" | "llama_spit" | "magma_cube" | "map" | "map_decoration" | "map_marker" | "minecart" | "mob_head" | "mob_head_glint" | "mooshroom" | "mooshroom_mushrooms" | "moving_block" | "moving_block_alpha" | "moving_block_alpha_seasons" | "moving_block_alpha_single_side" | "moving_block_blend" | "moving_block_double_side" | "moving_block_seasons" | "nautilus" | "nautilus_armor" | "npc" | "ocelot" | "on_screen_effect" | "opaque_block" | "opaque_block_color" | "opaque_block_color_uv2" | "panda" | "parrot" | "pattern" | "pattern_glint" | "phantom" | "phantom_invisible" | "pig" | "pig_v3" | "piglin" | "piglin_brute" | "pillager" | "piston_arm" | "player" | "player_alphatest" | "player_animated" | "player_spectator" | "polar_bear" | "pufferfish" | "rabbit" | "ravager" | "saddle" | "salmon" | "sheep" | "shield" | "shield_glint" | "shulker" | "shulker_box" | "shulker_bullet" | "sign" | "silverfish" | "silverfish_layers" | "skeleton" | "slime" | "slime_outer" | "sniffer" | "snow_golem" | "snow_golem_pumpkin" | "snowball" | "spider" | "spider_invisible" | "splash_potion_enchanted" | "squid" | "stray" | "stray_clothes" | "strider" | "sulfur_cube" | "sulfur_cube_outer" | "tadpole" | "trial_spawner" | "trident" | "trident_glint" | "trident_riptide" | "tropicalfish" | "turtle" | "vex" | "villager" | "villager_v2" | "villager_v2_masked" | "vindicator" | "wandering_trader" | "warden" | "warden_bioluminescent_layer" | "witch" | "wither_boss" | "wither_boss_armor" | "wither_skull" | "wolf" | "wolf_armor" | "xp_bottle" | "zoglin" | "zombie" | "zombie_villager" | "zombie_villager_v2" | "zombie_villager_v2_masked" | (string & {});


/**
 * Parametros principales para la definicion base de un nuevo Attachable.
 * @interface RPAttachableDefinition
 * @template {string} Params
 * @author HaJuegos - 29-10-2026 
 */
interface RPAttachableDefinition<
    Params extends string = string
> {
    /**
     * ID del Attachable en concreto a crear.
     * @type {string}
     */
    idAttach: string;

    /**
     * Parametros a asignar en concreto al Attachable.
     * @type {AttachableBaseParams<Params>}
     */
    attachable: AttachableBaseParams<Params>;
}

/**
 * Tipado auxiliar general recursivo que define como se puede eliminar un valor de la plantilla base en post-edicion.
 * @template V Tipo de valor de la plantilla base a considerar. 
 * @author HaJuegos - 29-10-2026
 */
type RemoveValue<V> = V extends readonly (infer E)[] ? true | E[] : V extends object ? true | { [K in keyof V]?: RemoveValue<NonNullable<V[K]>> } : true;

/**
 * Tipado auxiliar general para definir qeu datos de la plantilla base se pueden eliminar en el parametro remove de post-edicion.
 * @template A 
 * @author HaJuegos - 29-10-2026
 */
type RPAttachableRemoverEdit<A> = true | {
    [P in keyof A]?: RemoveValue<NonNullable<A[P]>>;
};

/**
 * Parametros principales para las modificaciones de la plantilla base post-edicion una vez creada.
 * @template {AttachableBaseParams} TBase Valores de la plantilla base a tomar.
 * @author HaJuegos - 29-10-2026
 */
type RPAttachableOverride<
    TBase extends AttachableBaseParams = AttachableBaseParams
> = {
    /**
     * Si se define, toda la plantilla base se limpiara completamente, dejando un archivo en blanco.
     * @type {true}
     */
    clearAllData: true;

    /**
     * (Opcional) Datos adiccionales a implementar en la plantilla base sin modificar la misma.
     * @type {?{ readonly attachable?: AttachableBaseParams; }}
     */
    add?: {
        readonly attachable?: AttachableBaseParams;
    };
} | {
    /**
     * (Opcional) Si se define, toda la plantilla base se limpiara completamente, dejando un archivo en blanco.
     * @type {?(false | undefined)}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Valores a cambiar en concreto de la plantilla base en post-edicion.
     * @type {?Partial<TBase>}
     */
    changeAttachable?: Partial<TBase>;

    /**
     * (Opcional) Valores a eliminar en concreto de la plantilla base en post-edicion. Puede ser todo un sector entero o un valor en especifico.
     * @type {?RPAttachableRemoverEdit<TBase>}
     */
    remove?: RPAttachableRemoverEdit<TBase>;

    /**
     * (Opcional) Datos adiccionales a implementar en la plantilla base sin modificar la misma.
     * @type {?{ readonly attachable?: AttachableBaseParams; }}
     */
    add?: {
        readonly attachable?: AttachableBaseParams;
    };
};


/**
 * Parametros principales para la creacion de un nuevo Attachable.
 * @interface AttachableBaseParams
 * @template {string} TAnimations Definiciones de animaciones que se asignan en el Attachable a considerar.
 * @author HaJuegos - 29-10-2026 
 */
interface AttachableBaseParams<
    TAnimations extends string = string
> {
    /**
     * (Opcional) Version del engine previa a considerar. Por compatibilidad a datos previos o versiones antiguas.
     * @type {?FormatVersionAttachList}
     */
    minEngineVersion?: FormatVersionAttachList;

    /**
     * Lista de geometrias en concreto que tiene el Attachable.
     * @type {Partial<Record<GeometryVanillaKeys, GeometryVanillaValues>>}
     */
    geometry: Partial<Record<GeometryVanillaKeys, GeometryVanillaValues>>;

    /**
     * Lista de materiales en concreto que tiene el Attachable.
     * @type {Partial<Record<MaterialVanillaKeys, MaterialVanillaValues>>}
     */
    materials: Partial<Record<MaterialVanillaKeys, MaterialVanillaValues>>;

    /**
     * Lista de texturas en concreto que tiene el Attachable.
     * @type {Partial<Record<MaterialVanillaKeys, string>>}
     */
    textures: Partial<Record<MaterialVanillaKeys, string>>;

    /**
     * (Opcional) Lista de controladores de render que tiene el Attachable.
     * @type {string[]}
     */
    renderControllers: string[];

    /**
     * (Opcional) Parametros pre-spawn del Attachable para ajustar animaciones a ejecutar.
     * @type {?ScriptsParamsAnim<TAnimations>}
     */
    scripts?: ScriptsParamsAnim<TAnimations>;

    /**
     * (Opcional) Lista de animaciones que tiene el Attachable
     * @type {?Record<TAnimations, string>}
     */
    animations?: Record<TAnimations, string>;

    /**
     * (Opcional) Si se establece, otros Attachables pueden afectar este mismo.
     * @type {?boolean}
     */
    enableAttachables?: boolean;

    /**
     * (Opcional) Lista de particulas que tiene el Attachable.
     * @type {?Record<string, string>}
     */
    particleEffects?: Record<string, string>;

    /**
     * (Opcional) Lista de particulas que tiene el Attachable.
     * @type {?Record<string, string>}
     */
    particleEmitters?: Record<string, string>;

    /**
     * (Opcional) Lista de sonidos que tiene el Attachable.
     * @type {?string[]}
     */
    soundEffects?: string[];

    /**
     * (Opcional) Parametros adiccionales para el generador de la entidad con sus respectivos colores generados a base de una plantilla, o sino, una textura custom.
     * @type {?SpawnEggColorIndexParams}
     */
    spawnEgg?: SpawnEggColorIndexParams;
}

/**
 * Parametros principales para la definicion de scripst pre-spawn para animaciones del Attachable.
 * @interface ScriptsParamsAnim
 * @template {string} TAnimations Animaciones del Attachable a considerar.
 * @author HaJuegos - 29-10-2026
 */
interface ScriptsParamsAnim<
    TAnimations extends string = string
> {
    /**
     * (Opcional) Valor en MoLang para escalar una entidad en concreto.
     * @type {?(string | MoLangValue)}
     */
    scale?: string | MoLangValue;

    /**
     * (Opcional) Valores en MoLang para asignar los datos de un pariente en concreto.
     * @type {?(string | MoLangValue)}
     */
    parentSetup?: string | MoLangValue;

    /**
     * (Opcional) Valores en MoLang para parametros pre-spawn a ejecutar antes de iniciar las animaciones.
     * @type {?(string | MoLangValue)[]}
     */
    preAnimation?: (string | MoLangValue)[];

    /**
     * (Opcional) Valores en MoLang a ejecutar cuando el Attachable sea visible.
     * @type {?(string | MoLangValue)[]}
     */
    initialize?: (string | MoLangValue)[];

    /**
     * (Opcional) Lista de animaciones a ejecutar cuando el Attachable sea visible.
     * @type {?NoInfer<TAnimations>[]}
     */
    animate?: NoInfer<TAnimations>[];
}

/**
 * Parametros principales para la asignacion de colores y/o texturas del generador de la entidad.
 * @author HaJuegos - 29-10-2026
 */
type SpawnEggColorIndexParams = {
    /**
     * Ruta en concreto donde esta la textura del item de generador.
     * @type {string}
     */
    texture: string;
} | {
    /**
     * (Opcional) Color hexadecimal del generador en su textura base.
     * @type {?string}
     */
    baseColour?: string;

    /**
     * (Opcional) Color hexadecimal del generador en su textura por encima de la base.
     * @type {?string}
     */
    overlayColor?: string;

    /**
     * (Opcional) ID de la textura base a considerar.
     * @type {?number}
     */
    textureIndex?: number;
};