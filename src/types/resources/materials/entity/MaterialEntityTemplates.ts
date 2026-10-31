export {
    RPEntityMaterialDefinition,
    RPEntityMaterialOverride,

    MaterialBaseParams,
};

/**
 * Parametros principales para la creacion de la plantilla base inicial.
 * @interface RPEntityMaterialDefinition
 * @author HaJuegos - 31-10-2026
 */
interface RPEntityMaterialDefinition {
    /**
     * Lista de materiales a crear.
     * @type {MaterialBaseParams[]}
     * @readonly
     */
    readonly materials: MaterialBaseParams[];
}

/**
 * Lista de metadatos internos que excluyen las modificaciones o eliminaciones directas de materiales.
 * @author HaJuegos - 31-10-2026
 */
type MaterialMetaKeys = "idMaterial" | "idMaterialReference";

/**
 * Tipado auxiliar que define la estructura para la modificacion de los parametros de un material existente.
 * @template {MaterialBaseParams} M Materiales base considerados para la modificacion. 
 * @author HaJuegos - 31-10-2026
 */
type MaterialChange<M extends MaterialBaseParams> = {
    [Item in M as Item["idMaterial"]]?: {
        [K in Exclude<keyof Item, MaterialMetaKeys>]?:
        K extends keyof MaterialPropertiesParams ? MaterialPropertiesParams[K] : never;
    };
};

/**
 * Tipado auxiliar para definir la estructura de eliminacion de propiedades o elementos dentro de un material.
 * @template {MaterialBaseParams} M Materiales base considerados para la eliminacion. 
 * @author HaJuegos - 31-10-2026
 */
type MaterialRemove<M extends MaterialBaseParams> = {
    [Item in M as Item["idMaterial"]]?: true | {
        [K in Exclude<keyof Item, MaterialMetaKeys>]?:
        true | (Item[K] extends readonly (infer E)[] ? E[] : never);
    };
};

/**
 * Parametros adiccionales para las ediciones de la plantilla base en la post-edicion.
 * @template {RPEntityMaterialDefinition} TBase Parametros definidos en la plantilla base.
 * @author HaJuegos - 31-10-2026
 */
type RPEntityMaterialOverride<
    TBase extends RPEntityMaterialDefinition = RPEntityMaterialDefinition
> = {
    /**
     * Si se define, la plantilla base se limpiara por completo, dejando un archivo completamente en blanco.
     * @type {true}
     */
    clearAllData: true;

    /**
     * (Opcional) Lista de materiales a añadir al archivo en concreto sin modificar la plantilla base.
     * @type {?MaterialBaseParams[]}
     * @readonly
     */
    readonly add?: MaterialBaseParams[];
} | {
    /**
     * (Opcional) Si se define, la plantilla base se limpiara por completo, dejando un archivo completamente en blanco.
     * @type {?(false | undefined)}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Lista de cambios de los parametros fijos de la plantilla base a modificar.
     * @type {?MaterialChange<TBase["materials"][number]>}
     */
    changeMaterial?: MaterialChange<TBase["materials"][number]>;

    /**
     * (Opcional) Lista de parametros enteros o especificos para eliminar un valor en concreto de la plantilla base a modificar.
     * @type {?MaterialRemove<TBase["materials"][number]>}
     */
    remove?: MaterialRemove<TBase["materials"][number]>;

    /**
     * (Opcional) Lista de materiales a añadir al archivo en concreto sin modificar la plantilla base.
     * @type {?MaterialBaseParams[]}
     * @readonly
     */
    readonly add?: MaterialBaseParams[];
};


/**
 * Lista de materiales vanillas disponibles para usar como referencias.
 * @author HaJuegos - 31-10-2026
 */
type ListOfMaterialsVanillas = "entity_static" | "entity_flat_color_line" | "entity_loyalty_rope" | "entity" | "opaque_block" | "opaque_block_color" | "opaque_block_color_uv2" | "alpha_block" | "alpha_block_color" | "entity_nocull" | "entity_change_color" | "entity_alphatest" | "entity_alphatest_one_sided" | "map" | "on_screen_effect" | "item_in_hand_entity_alphatest" | "item_in_hand_entity_alphatest_color" | "item_in_hand_entity_alphatest_one_sided_color" | "entity_alphablend" | "entity_alphablend_nocolor" | "guardian_ghost" | "player_spectator" | "entity_emissive" | "glow_squid" | "entity_emissive_alpha" | "entity_emissive_alpha_one_sided" | "entity_emissive_layer_alpha_blend" | "entity_emissive_layer_alpha_test" | "entity_custom" | "item_in_hand" | "item_in_hand_multicolor_tint" | "map_decoration" | "map_marker" | "charged_creeper" | "item_in_hand_glint" | "entity_glint" | "entity_alphatest_glint" | "entity_alphatest_glint_item" | "entity_change_color_glint" | "entity_alphatest_change_color" | "entity_alphatest_change_color_glint" | "entity_alphatest_multicolor_tint" | "beacon_beam" | "beacon_beam_transparent" | "conduit_wind" | "entity_multitexture" | "entity_multitexture_color_mask" | "entity_multitexture_alpha_test" | "entity_multitexture_multiplicative_blend" | "entity_multitexture_alpha_test_color_mask" | "entity_lead_base" | "entity_multitexture_masked" | "moving_block" | "moving_block_seasons" | "moving_block_alpha_seasons" | "moving_block_alpha_single_side" | "moving_block_alpha" | "moving_block_double_side" | "moving_block_blend" | "entity_beam" | "entity_beam_additive" | "entity_dissolve_layer0" | "entity_dissolve_layer1" | "banner" | "banner_pole" | "agent" | "armadillo" | "armor" | "armor_leather" | "armor_enchanted" | "armor_leather_enchanted" | "armor_stand" | "arrow" | "axolotl" | "axolotl_limbs" | "bat" | "bat_v2" | "bed" | "bee" | "bell" | "blaze_head" | "blaze_body" | "boat" | "chalkboard" | "chest" | "chicken" | "chicken_cold" | "chicken_legs" | "cow" | "cow_cold" | "creaking" | "creaking_eyes" | "creeper" | "dragon_head" | "dragon_head_glint" | "drowned" | "egg" | "elytra" | "elytra_glint" | "enchanting_table_book" | "ender_crystal" | "ender_dragon" | "enderman" | "enderman_invisible" | "endermite" | "eye_of_ender_signal" | "ender_pearl" | "evoker" | "fang" | "fireball" | "fireworks_rocket" | "fishing_hook" | "fox" | "frog" | "cat" | "clownfish" | "cod" | "conduit" | "pufferfish" | "salmon" | "tropicalfish" | "ghast" | "guardian" | "harness" | "horse" | "horse_leather_armor" | "husk" | "husk_clothes" | "ravager" | "iron_golem" | "magma_cube" | "leash_knot" | "lingering_potion_enchanted" | "llama" | "llama_spit" | "minecart" | "mob_head" | "mob_head_glint" | "mooshroom" | "mooshroom_mushrooms" | "nautilus_armor" | "npc" | "ocelot" | "parrot" | "pig" | "pig_v3" | "hoglin" | "zoglin" | "shield" | "shield_glint" | "trident" | "trident_riptide" | "trident_glint" | "piston_arm" | "player" | "player_alphatest" | "polar_bear" | "panda" | "rabbit" | "sheep" | "shulker" | "shulker_box" | "shulker_bullet" | "sign" | "silverfish" | "silverfish_layers" | "skeleton" | "pillager" | "piglin" | "piglin_brute" | "goat" | "allay" | "warden" | "warden_bioluminescent_layer" | "chest_boat" | "slime" | "slime_outer" | "snowball" | "snow_golem" | "snow_golem_pumpkin" | "spider" | "spider_invisible" | "splash_potion_enchanted" | "squid" | "dolphin" | "phantom" | "phantom_invisible" | "stray" | "stray_clothes" | "strider" | "tadpole" | "turtle" | "camera" | "trial_spawner" | "vex" | "villager" | "villager_v2" | "villager_v2_masked" | "vindicator" | "wandering_trader" | "witch" | "wither_boss" | "wither_boss_armor" | "wither_skull" | "wolf" | "wolf_armor" | "xp_bottle" | "zombie" | "zombie_villager" | "zombie_villager_v2" | "zombie_villager_v2_masked" | "player_animated" | "experience_orb" | "sniffer" | "camel" | "pattern" | "pattern_glint" | "breeze" | "breeze_eyes" | "breeze_wind" | "breeze_wind_charge" | "bogged" | "bogged_clothes" | "saddle" | "copper_golem" | "copper_golem_eyes" | "copper_golem_flower" | "nautilus" | "sulfur_cube" | "sulfur_cube_outer" | "cushion" | "frostbite" | "ice_ball" | (string & {});

/**
 * Parametros principales de base para la creacion de un nuevo material
 * @interface MaterialBaseParams
 * @extends {MaterialPropertiesParams}
 * @author HaJuegos - 31-10-2026
 */
interface MaterialBaseParams extends MaterialPropertiesParams {
    /**
     * ID del material en concreto a crear.
     * @type {string}
     */
    idMaterial: string;

    /**
     * (Opcional) ID del material referente ya creado ya sea custom o vanilla. Que tomara de base o de referencia.
     * @type {?ListOfMaterialsVanillas}
     */
    idMaterialReference?: ListOfMaterialsVanillas;
}

/**
 * Lista de macros o divertivas de definicion permitidas para los shaders de materiales.
 * @author HaJuegos - 31-10-2026
 */
type MaterialDefine = "ALPHA_TEST" | "AS_ENTITY_RENDERER" | "ATLAS_TEXTURE" | "BLEND" | "Blending" | "COLOR_BASED" | "COLOR_SECOND_TEXTURE" | "DISABLE_TINTING" | "ENABLE_FOG" | "ENABLE_LIGHT" | "GLINT" | "ITEM_IN_HAND" | "LINE_STRIP" | "LOW_PRECISION" | "MASKED_MULTITEXTURE" | "MULTIPLICATIVE_TINT" | "MULTIPLICATIVE_TINT_COLOR" | "MULTI_COLOR_TINT" | "NO_TEXTURE" | "SEASONS" | "TEXEL_AA" | "TINTED" | "TINTED_ALPHA_TEST" | "USE_COLOR_BLEND" | "USE_COLOR_MASK" | "USE_EMISSIVE" | "USE_MASK" | "USE_MULTITEXTURE" | "USE_ONLY_EMISSIVE" | "USE_OVERLAY" | "USE_SKINNING" | "USE_UV_ANIM";

/**
 * Lista de estados de renderizado configurables para los materiales.
 * @author HaJuegos - 31-10-2026
 */
type MaterialState = "Blending" | "DisableAlphaWrite" | "DisableColorWrite" | "DisableCulling" | "DisableDepthWrite" | "EnableAlphaToCoverage";

/**
 * Parametros y propiedades avanzados de renderizado, shaders, estados y definiciones para un material.
 * @interface MaterialPropertiesParams
 * @author HaJuegos - 31-10-2026
 */
interface MaterialPropertiesParams {
    /**
     * (Opcional) Nombre o ruta del shader de vertices asociado al material.
     * @type {?string}
     */
    vertexShader?: string;

    /**
     * (Opcional) Nombre o ruta del shader de fragmentos o pixeles asociado al material.
     * @type {?string}
     */
    fragmentShader?: string;

    /**
     * (Opcional) Shader de geometria especifico para entornos de VR.
     * @type {?string}
     */
    vrGeometryShader?: string;


    /**
     * (Opcional) Lista de artributos o flujos de vertices requeridos por el pipeline grafico.
     * @type {?readonly MaterialVertexField[]}
     */
    vertexFields?: readonly MaterialVertexField[];

    /**
     * (Opcional) Coleccion de variantes de renderizado basadas en condiciones o estaods especificos.
     * @type {?readonly Record<string, MaterialVariant>[]}
     */
    variants?: readonly Record<string, MaterialVariant>[];


    /**
     * (Opcional) Configuracion del soporte para MSAA.
     * @type {?"Both"}
     */
    msaaSupport?: "Both";

    /**
     * (Opcional) Modo primitivo de rasterizacion. Por ej, renderizado en lineas.
     * @type {?"Line"}
     */
    primitiveMode?: "Line";


    /**
     * (Opcional) Funcion de prueba de profundidad utilizada en el buffer Z.
     * @type {?("Equal" | "LessEqual")}
     */
    depthFunc?: "Equal" | "LessEqual";

    /**
     * (Opcional) Factor de mezcla de origen para operaciones de transparencia.
     * @type {?("One" | "SourceAlpha")}
     */
    blendSrc?: "One" | "SourceAlpha";

    /**
     * (Opcional) Factor de mezcla de destino apra operaciones de transparencia.
     * @type {?("One" | "OneMinusSrcAlpha")}
     */
    blendDst?: "One" | "OneMinusSrcAlpha";


    /**
     * (Opcional) Desplazamiento de profundidad para evitar el parpadeo de z-fighting.
     * @type {?number}
     */
    depthBias?: number;

    /**
     * (Opcional) Desplazamiento de profundidad especifico para el backend de OpenGL.
     * @type {?number}
     */
    depthBiasOGL?: number;

    /**
     * (Opcional) Desplazamiento de profundidad escalado por la pendiente de la poligonal.
     * @type {?number}
     */
    slopeScaledDepthBias?: number;

    /**
     * (Opcional) Desplazamiento escalado por pendiente especifico para OpenGL.
     * @type {?number}
     */
    slopeScaledDepthBiasOGL?: number;


    /**
     * (Opcional) Macros o directivas de preprocesado a habilitar en los shaders.
     * @type {?readonly MaterialDefine[]}
     */
    "+defines"?: readonly MaterialDefine[];

    /**
     * (Opcional) Macros o directivas de preprocesado a deshabilitar en los shaders.
     * @type {?readonly MaterialDefine[]}
     */
    "-defines"?: readonly MaterialDefine[];

    /**
     * (Opcional) Estados graficos de hardware a habilitar.
     * @type {?readonly MaterialState[]}
     */
    "+states"?: readonly MaterialState[];

    /**
     * (Opcional) Estados graficos de hardware a deshabilitar. 
     * @type {?readonly MaterialState[]}
     */
    "-states"?: readonly MaterialState[];

    /**
     * (Opcional) Configuraciones avanzadas para los samplers de textura.
     * @type {?readonly MaterialSamplerState[]}
     */
    "+samplerStates"?: readonly MaterialSamplerState[];
}

/**
 * Parametros de configuracion para el filtrado y comportamiento de muestreo de texturas en el material.
 * @interface MaterialSamplerState
 * @author HaJuegos - 31-10-2026
 */
interface MaterialSamplerState {
    /**
     * Indice numerico del smaple de textura dentro del shader.
     * @type {number}
     */
    samplerIndex: number;

    /**
     * (Opcional) Algoritmo de filtrado aplicado al muestrear la textura.
     * @type {?("Point" | "Bilinear" | "TexelAA")}
     */
    textureFilter?: "Point" | "Bilinear" | "TexelAA";

    /**
     * (Opcional) Modo de repeticion o comportamiento de los bordes de la textura.
     * @type {?("Repeat" | "Clamp")}
     */
    textureWrap?: "Repeat" | "Clamp";
}

/**
 * Parametros de los artributos o campos de vertices soportados por el material.
 * @interface MaterialVertexField
 * @author HaJuegos - 31-10-2026
 */
interface MaterialVertexField {
    /**
     * Nombre del canal de datos del vertice enviado a la tarjeta grafica.
     * @type {("Position" | "Normal" | "Color" | "UV0" | "UV1" | "BoneId0")}
     */
    field: "Position" | "Normal" | "Color" | "UV0" | "UV1" | "BoneId0";
}

/**
 * Parametros de variantes de materiales basadas en estados, definiciones y atributos de vertices especificos.
 * @interface MaterialVariant
 * @author HaJuegos - 31-10-2026
 */
interface MaterialVariant {
    /**
     * (Opcional) Macros adiccionales a activar especificamente para esta variante de shader.
     * @type {?readonly MaterialDefine[]}
     */
    "+defines"?: readonly MaterialDefine[];

    /**
     * (Opcional) Estados de renderizado adicionales a activar para esta variante.
     * @type {?readonly MaterialState[]}
     */
    "+states"?: readonly MaterialState[];

    /**
     * Artributos de verticves obligatorios o sobreescritos para esta variante en particular.
     * @type {readonly MaterialVertexField[]}
     */
    vertexFields: readonly MaterialVertexField[];
}