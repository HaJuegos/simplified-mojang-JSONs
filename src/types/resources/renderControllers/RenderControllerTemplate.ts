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
 * Tipado auxiliar que define la estructura para la modificacion de los parametros de un render existente.
 * @template {RenderControllerBaseParams} R Render controller considerados para la modificacion.
 * @author HaJuegos - 31-10-2026
 */
type RenderChange<R extends RenderControllerBaseParams> = {
    [Item in R as Item["idRender"]]?: {
        [K in Exclude<keyof Item, RenderMetaKeys>]?: K extends keyof RenderControllerBaseParams ? RenderControllerBaseParams[K] : never
    }
};

/**
 * Tipado auxiliar para definir la estructura de eliminacion de propiedades o elementos dentro de un render.
 * @template {RenderControllerBaseParams} R Materiales base considerados para la eliminacion.
 * @author HaJuegos - 31-10-2026
 */
type RenderRemove<R extends RenderControllerBaseParams> = {
    [Item in R as Item["idRender"]]?: true | {
        [K in Exclude<keyof Item, RenderMetaKeys>]?: true | (Item[K] extends readonly (infer E)[] ? E[] : never)
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
     * @type {?RenderControllerBaseParams[]}
     * @readonly
     */
    readonly add?: RenderControllerBaseParams[];
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
     * @type {?RenderControllerBaseParams[]}
     * @readonly
     */
    readonly add?: RenderControllerBaseParams[];
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
    materials: (MaterialDefinition | MoLangValue)[];

    /**
     * Lista de texturas a renderizar en concreto. 
     * @type {(TextureTypeValidator | MoLangValue)[]}
     */
    textures: (TextureTypeValidator | MoLangValue)[];

    /**
     * (Opcional) Lista de partes visibles por condiciones a tiempo real en formato MoLang.
     * @type {?Record<string, MoLangValue>[]}
     */
    partVisibility?: Record<string, MoLangValue>[];

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
    "*": MaterialTypeValidator;
    [key: string]: MaterialTypeValidator;
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