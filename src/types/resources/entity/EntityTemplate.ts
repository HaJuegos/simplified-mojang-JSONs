import { MoLangValue } from "../../MoLang";
import { GeometryVanillaKeys, GeometryVanillaValues, MaterialVanillaKeys, MaterialVanillaValues, ScriptsParamsAnim, SpawnEggColorIndexParams } from "../attachables/AttachableTemplate";

export {
    RPEntityClientDefinition,
    RPEntityClientOverride,

    FormatVersionListEntities,
    EntityClientParams
};

/**
 * Lista de versiones permitidas para el format version de un client entity.
 * @enum {string}
 * @author HaJuegos - 30-10-2026
 */
enum FormatVersionListEntities {
    MostRecent = "1.10.0",
    V1_8_0 = "1.8.0"
}

/**
 * Parametros principales para la definicion de la plantilla base de un client entity.
 * @interface RPEntityClientDefinition
 * @template {string} TParams Definiciones de las animaciones base de la plantilla.
 * @author HaJuegos - 30-10-2026 
 */
interface RPEntityClientDefinition<
    TParams extends string = string
> {
    /**
     * (Opcional) Version que tomara el format version en concreto. Por defecto siempre es "1.10.0".
     * @type {?FormatVersionListEntities}
     */
    formatVersion?: FormatVersionListEntities;

    /**
     * ID de la entidad en concreto a considerar.
     * @type {string}
     */
    idEntity: string;

    /**
     * Lista de parametros a asignar a la entidad.
     * @type {EntityClientParams<TParams>}
     */
    params: EntityClientParams<TParams>;
}

/**
 * Tipado auxiliar general recursivo que define como se puede eliminar un valor de la plantilla base en post-edicion.
 * @template V Tipo de valor de la plantilla base a considerar. 
 * @author HaJuegos - 30-10-2026
 */
type RemoveValue<V> = V extends readonly (infer E)[] ? true | E[] : V extends object ? true | { [K in keyof V]?: RemoveValue<NonNullable<V[K]>> } : true;

/**
 * Tipado auxiliar general para definir qeu datos de la plantilla base se pueden eliminar en el parametro remove de post-edicion.
 * @template A Datos a considerar de los keys en concreto. 
 * @author HaJuegos - 30-10-2026
 */
type RemoverEdit<A> = true | {
    [P in keyof A]?: RemoveValue<NonNullable<A[P]>>;
};

/**
 * Parametros para la definicion o ediciones post-edicion de la plantilla base de un client entity.
 * @template {EntityClientParams} TBase Definiciones de la plantilla base a considerar.
 * @author HaJuegos - 30-10-2026
 */
type RPEntityClientOverride<
    TBase extends EntityClientParams = EntityClientParams
> = {
    /**
     * Si se establece, se limpia por completo la plantilla base definida.
     * @type {true}
     */
    clearAllData: true;

    /**
     * (Opcional) Datos adiccionales que se integran a la plantilla base sin modificarla.
     * @type {?EntityClientParams}
     * @readonly
     */
    readonly add?: EntityClientParams;
} | {
    /**
     * (Opcional) Si se establece, se limpia por completo la plantilla base definida.
     * @type {true}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Valores a modificar de la plantilla base definida.
     * @type {?Partial<TBase>}
     */
    changeEntity?: Partial<TBase>;

    /**
     * (Opcional) Valores a eliminar por separado o completo de la plantilla base definida.
     * @type {?RemoverEdit<TBase>}
     */
    remove?: RemoverEdit<TBase>;

    /**
     * (Opcional) Datos adiccionales que se integran a la plantilla base sin modificarla.
     * @type {?EntityClientParams}
     * @readonly
     */
    readonly add?: EntityClientParams;
};

/**
 * Parametros para la creacion de un nuevo Client Entity.
 * @interface EntityClientParams
 * @template {string} TAnimations Lista de animaciones a considerar.
 * @author HaJuegos - 30-10-2026
 */
interface EntityClientParams<
    TAnimations extends string = string
> {
    /**
     * (Opcional) Version del engine previa a considerar. Por compatibilidad a datos previos o versiones antiguas.
     * @type {?FormatVersionListEntities}
     */
    minEngineVersion?: FormatVersionListEntities;

    /**
     * Lista de geometrias en concreto que tiene la entidad.
     * @type {Partial<Record<GeometryVanillaKeys, GeometryVanillaValues>>}
     */
    geometry: Partial<Record<GeometryVanillaKeys, GeometryVanillaValues>>;

    /**
     * (Opcional) Si se define, mantendra expuesto los huesos del modelo para las consulas Molang.
     * @remarks Por defecto, esto no es asi por optimizaciones y esta mas orientado a scripts a tiempo real. Y no como en animaciones que eso no necesario.
     * @type {?string}
     */
    queryableGeometry?: string;

    /**
     * Lista de materiales en concreto que tiene la entidad.
     * @type {Partial<Record<MaterialVanillaKeys, MaterialVanillaValues>>}
     */
    materials: Partial<Record<MaterialVanillaKeys, MaterialVanillaValues>>;

    /**
     * Lista de texturas en concreto que tiene la entidad.
     * @type {Partial<Record<MaterialVanillaKeys, string>>}
     */
    textures: Partial<Record<MaterialVanillaKeys, string>>;

    /**
     * (Opcional) Lista de controladores de render que tiene la entidad.
     * @type {string[]}
     */
    renderControllers: string[];

    /**
     * (Opcional) Parametros pre-spawn de la entidad para ajustar animaciones a ejecutar.
     * @type {?ScriptsParamsAnim<TAnimations>}
     */
    scripts?: ScriptsParamsAnimEntity<TAnimations>;

    /**
     * (Opcional) Lista de animaciones que tiene la entidad.
     * @type {?Record<TAnimations, string>}
     */
    animations?: Record<TAnimations, string>;

    /**
    * (Opcional) Si se establece, attachables funcionaran en esta entidad.
    * @type {?boolean}
    */
    enableAttachables?: boolean;

    /**
     * (Opcional) Lista de particulas que tiene la entidad.
     * @type {?Record<string, string>}
     */
    particleEffects?: Record<string, string>;

    /**
     * (Opcional) Lista de particulas que tiene la entidad.
     * @type {?Record<string, string>}
     */
    particleEmitters?: Record<string, string>;

    /**
     * (Opcional) Lista de sonidos que tiene la entidad.
     * @type {?string[]}
     */
    soundEffects?: string[];

    /**
     * (Opcional) Parametros adiccionales para el generador de la entidad con sus respectivos colores generados a base de una plantilla, o sino, una textura custom.
     * @type {?SpawnEggColorIndexParams}
     */
    spawnEgg?: SpawnEggColorIndexParams;

    /**
     * (Opcional) Si se establece, el objecto que tenga portado la entidad, no le vera afectada la luz ambiental o dinamica.
     * @type {?boolean}
     */
    heldItemIgnoresLighting?: boolean;

    /**
     * (Opcional) Escala numerica del item que esta sujetando la entidad en cuestion.
     * @type {?number}
     */
    heldItemScale?: number;

    /**
     * (Opcional) Si se establece, la entidad no podra mostrar equipamentos que lleve, aun asi tenga la opcion de enableAttachables activo. 
     * @type {?boolean}
     */
    hideArmor?: boolean;
}

/**
 * Parametros para la definicion de nuevos scripts animados en una Client Entity.
 * @interface ScriptsParamsAnimEntity
 * @template {string} TAnimations Lista de animaciones a considerar.
 * @extends {ScriptsParamsAnim<TAnimations>}
 * @author HaJuegos - 30-10-2026
 */
interface ScriptsParamsAnimEntity<
    TAnimations extends string = string
> extends ScriptsParamsAnim<TAnimations> {
    /**
     * (Opcional) Lista de variables que tiene la entidad en cuestion. Por defecto, todas son pubicas para el motor del juego.
     * @type {?{ [key: `variable.${string}`]: "public"; }}
     */
    variables?: {
        [key: `variable.${string}`]: "public";
    };

    /**
     * (Opcional) Escalado de la entidad por su coordenada x.
     * @type {?(string | MoLangValue | number)}
     */
    scalex?: string | MoLangValue | number;

    /**
     * (Opcional) Escalado de la entidad por su coordenada y.
     * @type {?(string | MoLangValue | number)}
     */
    scaley?: string | MoLangValue | number;

    /**
     * (Opcional) Escalado de la entidad por su coordenada z.
     * @type {?(string | MoLangValue | number)}
     */
    scalez?: string | MoLangValue | number;

    /**
     * (Opcional) Si se establece, la entidad ya no renderiza los objectos que tenga en la mano.
     * @type {?boolean}
     */
    hideHeldItems?: boolean;

    /**
     * (Opcional) Si se establece, las animaciones y efectos que no se esten renderizando, se ejecutaran igualmente fuera de pantalla.
     * @type {?boolean}
     */
    shouldUpdateBonesAndEffectsOffscreen?: boolean;

    /**
     * (Opcional) Si se establece, las animaciones que no se esten renderizando, se ejecutaran igualmente fuera de pantalla.
     * @type {?boolean}
     */
    shouldUpdateEffectsOffscreen?: boolean;
}