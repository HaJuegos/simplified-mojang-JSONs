import * as vanilla from '@minecraft/vanilla-data';

import { MoLangValue } from '../MoLang';
import { EntityFilter, EntityFilterTrigger, EntitySlotsArmor } from '../EntityFilters';

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
    BPEntityEvents,
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
 * @author HaJuegos - 20-09-2026
 */
type BPPropertiesEntities = BPBoolPropertyEntity | BPEnumPropertyEntity | BPFloatPropertyEntity | BPIntPropertyEntity;

/**
 * Lista de parametros disponibles para un evento de una entidad.
 * @interface BPEntityEventsBase
 * @author HaJuegos - 30-09-2026
 */
interface BPEntityEventsBase {
    /**
     * (Opcional) Parametro que indica todos los parametros adiccionales que se deben validar primero antes de ejecutarse este mismo.
     * @type {?BPEntityEventsBase[]}
     */
    firstValid?: BPEntityEventsBase[];

    /**
     * (Opcional) Parametro que indica los grupos de componentes a añadir a la entidad.
     * @type {?ManagerCGTypes}
     */
    add?: ManagerCGTypes;

    /**
     * (Opcional) Parametro que indica los grupos de componentes a eliminar a la entidad.
     * @type {?ManagerCGTypes}
     */
    remove?: ManagerCGTypes;

    /**
     * (Opcional) Parametro que indica de dropear un item de la entidad. Por defecto, no es necesario establecer un slot.
     * @type {?{slot?: EntitySlotsArmor;}}
     */
    dropItem?: {
        /**
         * (Opcional) Slot en concreto a dropear el item.
         * @type {?EntitySlotsArmor}
         */
        slot?: EntitySlotsArmor;
    };

    /**
     * (Opcional) Parametrpo que indica que la entidad debe emitir una particula en concreto. Por defecto, no se establece una particula en especifico.
     * @type {?{particle?: string;}}
     */
    emitParticle?: {
        /**
         * (Opcional) ID de la particula en concreto a mostrar.
         * @type {?string}
         */
        particle?: string;
    };

    /**
     * (Opcional) Parametro que indica si la entidad emite una vibracion. Por defecto, no se establece que tipo de vibracion hace.
     * @type {?{vibration?: 'shear' | 'entity_interact' | 'entity_act';}}
     */
    emitVibration?: {
        /**
         * (Opcional) Tipo de vibracion en concreto.
         * @type {?('shear' | 'entity_interact' | 'entity_act')}
         */
        vibration?: 'shear' | 'entity_interact' | 'entity_act';
    };

    /**
     * (Opcional) Parametro que ejecuta un evento cuando la entidad llegea a su casa. Por defecto, no tiene un evento establecido.
     * @type {?{event?: string;}}
     */
    executeEventOnHomeBlock?: {
        /**
         * (Opcional) Evento en cuestion a ejecutar.
         * @type {?string}
         */
        event?: string;
    };

    /**
     * (Opcional) Parametro que indica si la entidad debe ejecutar un sonido. Por defecto, no tiene definido un sonido en concreto.
     * @type {?{sound?: string;}}
     */
    playSound?: {
        /**
         * (Opcional) ID del sonido en concreto.
         * @type {?string}
         */
        sound?: string;
    };

    /**
     * (Opcional) Parametro que indica si la entidad debe dejar de lado su target apuntado.
     */
    resetTarget?: {};

    /**
     * (Opcional) Parametro que indica si la entidad establece su posicion actual como su nueva casa.
     */
    setHomePosition?: {};

    /**
     * (Opcional) Parametro que cambia el valor de una propiedad dinamica de la entidad.
     * @type {?Record<string, (MoLangValue | boolean)>}
     */
    setProperty?: Record<string, (MoLangValue | boolean)>;

    /**
     * (Opcional) Parametro que indica si la entida debe dejar de moverse. Por defecto, no hay parametros adiccionales para detener la entidad.
     * @type {?{ stopHorizontalMovement?: boolean; stopVerticalMovement?: boolean; }}
     */
    stopMovement?: {
        /**
         * (Opcional) Parametro adiccional que indica si debe detenerse horizontalmente.
         * @type {?boolean}
         */
        stopHorizontalMovement?: boolean;

        /**
         * (Opcional) Parametro adiccional que indica si debe detenerse verticalmente.
         * @type {?boolean}
         */
        stopVerticalMovement?: boolean;
    };

    /**
     * (Opcional) Parametro que indica si debe ejecutarse un evento adiccional en el mismo evento de la entidad.
     * @type {?(string | EntityFilterTrigger | EntityFilterTrigger[])}
     */
    trigger?: string | EntityFilterTrigger | EntityFilterTrigger[];

    /**
     * (Opcional) Parametro que indica si la entidad debe soltarse de una cuerda. Por defecto, no requiere parametros adiccionales.
     * @type {?{ unleashOthers: boolean; unleashSelf: boolean; }}
     */
    unleash?: {
        /**
         * (Opcional) Debe soltar tambien a otras entidades que esten amarradas a la entidad.
         * @type {boolean}
         */
        unleashOthers: boolean;

        /**
         * (Opcional) Debe soltar solo a la entidad misma.
         * @type {boolean}
         */
        unleashSelf: boolean;
    };
}

interface ManagerCGTypes {
    componentGroups: string[];
}

/**
 * Lista de tipos cuando se llama a una secuencia de eventos en una entidad.
 * @author HaJuegos - 30-09-2026
 */
type SequenceItemsEvents = BPEntityEvents & {
    filters: EntityFilter | EntityFilter[];
};

/**
 * Lista de tipos cuando se llama a una aleatoria de eventos en una entidad.
 * @author HaJuegos - 30-09-2026
 */
type RandomizeItemsEvents = BPEntityEvents & {
    weight: number;
};

/**
 * Tipado que prohibe usar sequence o randomize o parametros basicos todos a la vez en una sola sequencia.
 * @author HaJuegos - 30-09-2026
 */
type NoBaseParams = { [K in keyof BPEntityEventsBase]?: never };

/**
 * Lista de parametros en una sequencia de eventos, pero, no permitiendo la secuencia aleatoria a la misma vez.
 * @interface SequenceEvents
 * @extends {NoBaseParams}
 * @author HaJuegos - 30-09-2026
 */
interface SequenceEvents extends NoBaseParams {
    sequence: SequenceItemsEvents[];
    randomize?: never;
}

/**
 * Lista de parametros para una secuencia aleatoria de eventos, pero, no permitiendo una secuencia a la misma vez.
 * @interface RandomizeEvents
 * @extends {NoBaseParams}
 * @author HaJuegos - 30-09-2026
 */
interface RandomizeEvents extends NoBaseParams {
    randomize: RandomizeItemsEvents[];
    sequence?: never;
}

/**
 * Lista de tipados base cuyos no pueden tener a su vez la sequencia de eventos o aleatoriedad de eventos.
 * @interface BaseEvents
 * @extends {BPEntityEventsBase}
 * @author HaJuegos - 30-09-2026
 */
interface BaseEvents extends BPEntityEventsBase {
    sequence?: never;
    randomize?: never;
}

/**
 * Tipado final sobre los parametros finales para la lista de eventos de una entidad. 
 * @author HaJuegos - 30-09-2026
 */
type BPEntityEvents = BaseEvents | SequenceEvents | RandomizeEvents;

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