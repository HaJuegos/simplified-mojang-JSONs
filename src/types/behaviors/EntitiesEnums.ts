import * as vanilla from '@minecraft/vanilla-data';

import { MoLangValue } from '../MoLang';

export {
    FormatVersionEntities,
    SpawnCategoryEntities,
    BPEntityOptionalParams,
    BPAnimationScriptEntities,
    BPBoolPropertyEntity,
    BPEnumPropertyEntity,
    BPFloatPropertyEntity,
    BPIntPropertyEntity,
    BPPropertiesEntities,
};

/**
 * Lista de parametros opcionales para la entidad en cuestion.
 * @interface BehaviorEntityOptionalParams
 * @author HaJuegos - 16-09-2026
 */
interface BPEntityOptionalParams {
    /**
     * (Opcional) ID de la entidad vanilla que usara esta entidad para crearse a si misma. Principalmente usado para valores hardcore o adaptaciones de animaciones vanillas en entidades custom.
     * @type {?string}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    runtimeIdentifier?: vanilla.MinecraftEntityTypes;

    /**
     * (Opcional) Parametro que asigna si la entidad va a utilizar valores o componentes experimentales por parte de Mojang.
     * se
     * @type {?boolean}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    useBetaFeatures?: boolean;

    /**
     * Parametro que establece si esta entidad se puede generar por medio de un generador o "huevos". Por defecto estara activo.
     * @type {boolean}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    isSpawneable?: boolean;

    /**
     * Parametro que establece si esta entidad se puede generar por medio de comandos o comunmente por el comando /summon. Por defecto esta activo.
     * @type {boolean}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    isSummonable?: boolean;

    /**
     * (Opcional) Parametro que establece si esta entidad solo va a aparecer si esta activado los experimentales en el mundo.
     * @type {?boolean}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    isExperimental?: boolean;

    /**
     * (Opcional) Grupo de entidades a la cual pertenecera esta entidad en cuestion.
     * @type {?SpawnCategoryEntities}
     * @author HaJuegos - 16-09-2026
     * @private
     */
    spawnCategory?: SpawnCategoryEntities;
}

/**
 * Lista de parametros para la asignacion de una animation y/o animation controller con condicional MoLang a una entidad.
 * @interface BehaviorAnimationScript
 * @author HaJuegos - 16-09-2026
 */
interface BPAnimationScriptEntities {
    /**
     * Nombre de la animation o animation controller en cuestion.
     * @type {string}
     */
    idAnimation: string;

    /**
     * (Opcional) Condicion MoLang a cumplir para esta animacion.
     * @type {?string}
     */
    molangCondition?: MoLangValue;
}

/**
 * Tipos de propiedades disponibles.
 * @typedef {PropertyTypes}
 * @author HaJuegos - 20-09-2026
 */
type PropertyTypes = 'bool' | 'enum' | 'float' | 'int';

/**
 * Plantilla base para la creacion de una propiedad dinamica.
 * @interface BPBaseProperty
 * @author HaJuegos - 20-09-2026
 */
interface BPBaseProperty {
    /**
     * ID de la propiedad en cuestion a crear. Como por ej: 'ha:test'.
     * @type {string}
     */
    idProperty: string;

    /**
     * Parametro que indica si esta propiedad debe sincronizarse con el client side.
     * @type {boolean}
     */
    clientSync: boolean;
}

/**
 * Plantilla base para la creacion de una propiedad dinamica de tipo Boolean.
 * @interface BPBoolPropertyEntity
 * @extends {BPBaseProperty}
 * @author HaJuegos - 20-09-2026
 */
interface BPBoolPropertyEntity extends BPBaseProperty {
    /**
     * El tipo en concreto de propiedad.
     * @type {'bool'}
     */
    type: 'bool';

    /**
     * Valor por defecto de la propiedad.
     * @type {boolean}
     */
    default: boolean;
}

/**
 * Plantilla base para la creacion de una propiedad dinamica de tipo Enum.
 * @interface BPEnumPropertyEntity
 * @extends {BPBaseProperty}
 * @author HaJuegos - 20-09-2026
 */
interface BPEnumPropertyEntity extends BPBaseProperty {
    /**
     * El tipo en concreto de propiedad.
     * @type {'enum'}
     */
    type: 'enum';

    /**
     * Valor por defecto de la propiedad.
     * @type {string}
     */
    default: string;

    /**
     * Rango de valores de la propiedad.
     * @type {string[]}
     */
    values: string[];
}

/**
 * Plantilla base para la creacion de una propiedad dinamica de tipo Float.
 * @interface BPFloatPropertyEntity
 * @extends {BPBaseProperty}
 * @author HaJuegos - 20-09-2026
 */
interface BPFloatPropertyEntity extends BPBaseProperty {
    /**
     * El tipo en concreto de propiedad.
     * @type {'float'}
     */
    type: 'float';

    /**
     * Valor por defecto de la propiedad.
     * @type {number}
     */
    default: number;

    /**
     * Rango de valores de la propiedad.
     * @type {[number, number]}
     */
    range: [number, number];
}

/**
 * Plantilla base para la creacion de una propiedad dinamica de tipo Int.
 * @interface BPIntPropertyEntity
 * @extends {BPBaseProperty}
 * @author HaJuegos - 20-09-2026
 */
interface BPIntPropertyEntity extends BPBaseProperty {
    /**
     * El tipo en concreto de propiedad.
     * @type {'int'}
     */
    type: 'int';

    /**
     * Valor por defecto de la propiedad.
     * @type {number}
     */
    default: number;

    /**
     * Rango de valores de la propiedad.
     * @type {[number, number]}
     */
    range: [number, number];
}

/**
 * Todos los tipos de propiedades dinamicas y sus valores disponibles.
 * @typedef {BPPropertiesEntities}
 * @author HaJuegos - 20-09-2026
 */
type BPPropertiesEntities = BPBoolPropertyEntity | BPEnumPropertyEntity | BPFloatPropertyEntity | BPIntPropertyEntity;


/**
 * Lista de versiones de formato disponibles para entidades.
 * @enum {string}
 * @author HaJuegos - 16-09-2026
 */
enum FormatVersionEntities {
    MostRecent = '1.26.50',
    MostOlder = '1.21.90',
    V1_26_0 = '1.26.0',
    V1_26_10 = '1.26.10',
    V1_26_20 = '1.26.20',
    V1_26_30 = '1.26.30',
    V1_26_40 = '1.26.40',
    V1_21_90 = '1.21.90',
}

/**
 * Lista de categorias de mobs de entidades.
 * @enum {string}
 * @author HaJuegos - 16-09-2026
 */
enum SpawnCategoryEntities {
    Ambient = 'ambient',
    Axolotls = 'axolotls',
    Creature = 'creature',
    Misc = 'misc',
    Monster = 'monster',
    UndergroundWaterCreature = 'underground_water_creature',
    WaterAmbient = 'water_ambient',
    WaterCreature = 'water_creature',
}