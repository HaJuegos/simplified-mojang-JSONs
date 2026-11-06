import { MoLangValue } from "../../MoLang";

export {
    RPRenderControllerDefinition,
    RPRenderControllerOverride,

    FormatVersionRenderList,
    RenderControllerBaseParams,
};

/**
 * Lista de versiones admitidos en un format version de un render controller.
 * @enum {string}
 * @author HaJuegos - 31-10-2026
 */
enum FormatVersionRenderList {
    MostRecent = "1.10.0",
    V1_8_0 = "1.8.0",
}


/**
 * Parametros principales para la definicion de una plantilla base de render controller.
 * @interface RPRenderControllerDefinition
 * @author HaJuegos - 31-10-2026
 */
interface RPRenderControllerDefinition {
    /**
     * (Opcional) Version del format version en concreto a asignar al render controller. Por defecto siempre sera "1.10.0".
     * @type {?FormatVersionRenderList}
     * @readonly
     */
    readonly formatVersion?: FormatVersionRenderList;

    /**
     * Lista de render controllers asignados a este archivo en concreto.
     * @type {RenderControllerBaseParams[]}
     * @readonly
     */
    readonly renderControllers: RenderControllerBaseParams[];
}

/**
 * Lista de metadatos internos que excluyen las modificaciones o eliminaciones directas del render controller.
 * @author HaJuegos - 31-10-2026
 */
type RenderMetaKeys = "idRender";

/**
 * Tipado general auxiliar que permite aplicaar parches profundos a las propiedades.
 * @template T Tipo de dato base a parchear.
 * @author HaJuegos - 05-11-2026
 */
type DeepRenderPatch<T> = T extends readonly (infer U)[]
    ? Record<number, DeepRenderPatch<U>>
    : T extends object
    ? { [K in keyof T]?: DeepRenderPatch<T[K]> }
    : T | string;

/**
 * Tipado auxiliar que define la estructura para la modificacion de los parametros de un render existente.
 * @template {RenderControllerBaseParams} R Render controller considerados para la modificacion.
 * @author HaJuegos - 31-10-2026
 */
type RenderChange<R extends RenderControllerBaseParams> = {
    [Item in R as Item["idRender"]]?: {
        [K in Exclude<keyof Item, RenderMetaKeys>]?: K extends keyof Item ? DeepRenderPatch<Item[K]> : never
    }
};

/**
 * Lista de valores que son considerados arrays que permiten datos libres en la plantilla nueva y/o a modificar.
 * @author HaJuegos - 06-11-2026
 */
type RenderAddListKeys = "arrays" | "materials" | "textures" | "partVisibility";

/**
 * Tipado general auxiliar que obtiene los valores disponibles definidos en un array definidos por su key en un render controller.
 * @template T Estructura del render a considerar.
 * @template {keyof ArraysDefinition} S Indetificacion del array dentro de la misma definicion.
 * @author HaJuegos - 06-11-2026
 */
type ExistingArrayNames<T, S extends keyof ArraysDefinition> = T extends { arrays: infer A; }
    ? S extends keyof A ? keyof A[S] & string : never
    : never;

/**
 * Tipado general auxiliar que permite extender los arrays existentes en un render controller, conservando sus propiedades originales y validando los valores de las claves definidas.
 * @template T Estructura del render controller a considerar. 
 * @author HaJuegos - 06-11-2026
 */
type RenderAddArrays<T> = {
    [S in keyof ArraysDefinition]?: { [K in ExistingArrayNames<T, S>]?: NonNullable<ArraysDefinition[S]>[ArrayTypeValidator] } & NonNullable<ArraysDefinition[S]>
};

/**
 * Tipado general auxiliar para ampliar la inyeccion de claves nuevas que no existan en la base definida.
 * @template {RenderControllerBaseParams} T Valores de las claves base a considerar.
 * @author HaJuegos - 06-11-2026
 */
type RenderAddPatch<T extends RenderControllerBaseParams> =
    Partial<Pick<RenderControllerBaseParams, Exclude<RenderAddListKeys, "arrays">>> & {
        arrays?: RenderAddArrays<T>;
    } & {
        [K in Exclude<keyof RenderControllerBaseParams, RenderMetaKeys | RenderAddListKeys | keyof T>]?: RenderControllerBaseParams[K]
    };

/**
 * Tipado general auxiliar que define la estructura para añadir nuevos renders completos.
 * @template {RenderControllerBaseParams} R Renders base a considerar para la edicion.
 * @author HaJuegos - 06-11-2026
 */
type RenderAdd<R extends RenderControllerBaseParams> = Array<
    RenderControllerBaseParams
    | ({ [Item in R as Item["idRender"]]?: RenderAddPatch<Item> } & { [K in keyof RenderControllerBaseParams]?: never })
>;

/**
 * Tipado general auxiliar recursivo para permitir la eliinacion profunda de propiedades.
 * @template T Tipo de dato base a depurar.
 * @typedef {DeepRemove}
 */
type DeepRemove<T> = T extends readonly (infer U)[]
    ? true | U[] | Record<number, true | DeepRemove<U>>
    : T extends object
    ? true | { [K in keyof T]?: DeepRemove<T[K]> }
    : true;

/**
 * Tipado auxiliar para definir la estructura de eliminacion de propiedades o elementos dentro de un render.
 * @template {RenderControllerBaseParams} R Materiales base considerados para la eliminacion.
 * @author HaJuegos - 31-10-2026
 */
type RenderRemove<R extends RenderControllerBaseParams> = {
    [Item in R as Item["idRender"]]?: {
        [K in Exclude<keyof Item, RenderMetaKeys>]?: DeepRemove<Item[K]>
    }
};

/**
 * Parametros para las ediciones post-edicion de la plantilla base de un render controller.
 * @template {RPRenderControllerDefinition} TBase Parametros de la plantilla base en concreto a considerar. 
 * @author HaJuegos - 31-10-2026
 */
type RPRenderControllerOverride<
    TBase extends RPRenderControllerDefinition = RPRenderControllerDefinition
> = {
    /**
     * Si se define, la plantilla base se limpiara completamente dejando un archivo completamente vacio.
     * @type {true}
     */
    clearAllData: true;

    /**
     * (Opcional) Lista de render controllers a definir en concreto adiccionandolo a la plantilla base.
     * @type {?RenderAdd<TBase["renderControllers"][number]>}
     * @readonly
     */
    readonly add?: RenderAdd<TBase["renderControllers"][number]>;
} | {
    /**
     * (Opcional) Si se define, la plantilla base se limpiara completamente dejando un archivo completamente vacio.
     * @type {?(false | undefined)}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Lista de parametros a modificar de la plantilla base en concreto.
     * @type {?RenderChange<TBase["renderControllers"][number]>}
     * @readonly
     */
    readonly changeRender?: RenderChange<TBase["renderControllers"][number]>;

    /**
     * (Opcional) Lista de parametros fijos o completos a eliminar de la plantilla base.
     * @type {?RenderRemove<TBase["renderControllers"][number]>}
     * @readonly
     */
    readonly remove?: RenderRemove<TBase["renderControllers"][number]>;

    /**
     * (Opcional) Lista de render controllers a definir en concreto adiccionandolo a la plantilla base.
     * @type {?RenderAdd<TBase["renderControllers"][number]>}
     * @readonly
     */
    readonly add?: RenderAdd<TBase["renderControllers"][number]>;
};

/**
 * Tipado que valida la estructura de definicion de una geometria en un render.
 * @author HaJuegos - 31-10-2026
 */
type GeometryTypeValidator = `Geometry.${string}`;

/**
 * Tipado que valida la estructura de definicion de un material en un render.
 * @author HaJuegos - 31-10-2026
 */
type MaterialTypeValidator = `Material.${string}`;

/**
 * Tipado que valida la estructura de definicion de una textura en un render.
 * @author HaJuegos - 31-10-2026
 */
type TextureTypeValidator = `Texture.${string}`;

/**
 * Tipado que valida la estructura de definicion de un lista de valores en un render.
 * @author HaJuegos - 31-10-2026
 */
type ArrayTypeValidator = `Array.${string}`;

/**
 * Parametros base para la creacion de un nuevo render controller.
 * @interface RenderControllerBaseParams
 * @author HaJuegos - 31-10-2026
 */
interface RenderControllerBaseParams {
    /**
     * ID del render controller a crear.
     * @type {string}
     */
    idRender: string;

    /**
     * (Opcional) Lista de variaciones de geometrias, materiales y/o texturas que se pueden renderizar.
     * @type {?ArraysDefinition}
     */
    arrays?: ArraysDefinition;

    /**
     * Geometria que se va a renderizar en concreto.
     * @type {(GeometryTypeValidator | MoLangValue)}
     */
    geometry: GeometryTypeValidator | MoLangValue;

    /**
     * Lista de materiales a renderizar en concreto por huesos o todos.
     * @type {(MaterialDefinition | MoLangValue)[]}
     */
    materials: MaterialDefinition[];

    /**
     * Lista de texturas a renderizar en concreto. 
     * @type {(TextureTypeValidator | MoLangValue)[]}
     */
    textures: (TextureTypeValidator | MoLangValue)[];

    /**
     * (Opcional) Lista de partes visibles por condiciones a tiempo real en formato MoLang.
     * @type {?Record<string, MoLangValue>[]}
     */
    partVisibility?: MaterialDefinition[];

    /**
     * (Opcional) Parametros de animacion UV a las texturas renderizadas.
     * @type {?UVAnimDefinition}
     */
    uvAnim?: UVAnimDefinition;

    /**
     * (Opcional) Multiplicado de color de la entidad cuando esta, esta en luz.
     * @type {?MoLangValue | number}
     */
    lightColorMultiplier?: MoLangValue | number;

    /**
     * (Opcional) Color en formato RGBA de tipo Float [0,1] que tendra el renderizado de la entidad por encima.
     * @type {?ColorDefinition}
     */
    color?: ColorDefinition;

    /**
     * (Opcional) Color en formato RGBA de tipo Float [0,1] que tendra el renderizado de la entidad por encima cuando es lastimado.
     * @type {?ColorDefinition}
     */
    isHurtColor?: ColorDefinition;

    /**
     * (Opcional) Color en formato RGBA de tipo Float [0,1] que tendra el renderizado de la entidad por encima cuando esta en llamas.
     * @type {?ColorDefinition}
     */
    onFireColor?: ColorDefinition;

    /** 
     * (Opcional) Color en formato RGBA de tipo Float [0,1] que tendra el renderizado de la entidad.
     * @type {?ColorDefinition}
     */
    overlayColor?: ColorDefinition;

    /**
     * (Opcional) Si se aplica, la luz ambiental le afectara a esta entidad.
     * @type {?boolean}
     */
    filterLighting?: boolean;

    /**
     * (Opcional) Si se aplica, la entidad no le sera afectada la luz.
     * @type {?boolean}
     */
    ignoreLighting?: boolean;

    /**
     * (Opcional) Si se aplica, se permite reconstruir las matrices de animacion.
     * @type {?boolean}
     */
    rebuildAnimationMatrices?: boolean;
}

interface MaterialDefinition {
    readonly "*"?: MaterialTypeValidator | MoLangValue | boolean;
    [key: string]: MaterialTypeValidator | MoLangValue | boolean | undefined;
}

interface ArraysDefinition {
    geometries?: Record<ArrayTypeValidator, GeometryTypeValidator[]>;
    materials?: Record<ArrayTypeValidator, MaterialTypeValidator[]>;
    textures?: Record<ArrayTypeValidator, TextureTypeValidator[]>;
}

interface ColorDefinition {
    a?: string | MoLangValue | number;
    r?: string | MoLangValue | number;
    g?: string | MoLangValue | number;
    b?: string | MoLangValue | number;
}

interface UVAnimDefinition {
    offset?: [(MoLangValue | number), (MoLangValue | number)];
    scale?: [(MoLangValue | number), (MoLangValue | number)];
}