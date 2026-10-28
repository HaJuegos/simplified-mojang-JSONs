import { AnimControllerParamsBase, AnimControllerStatesTypes, BPAnimControllerFinalDefinition } from "../../behaviors/animContollers/AnimControllerTemplate";
import { MoLangValue } from "../../MoLang";

export {
    RPAnimControllerDefinition,
    RPAnimControllerOverride,

    ParticleEffectParams,
    SoundEffectParams,
    RPControllersMap,
    RPAnimControllerParamsBase,
};



/**
 * Lista de parametros principales para la creacion de un controlador de animacion en un RP.
 * @interface RPAnimControllerDefinition
 * @extends {BPAnimControllerFinalDefinition<string, RPAditionalAnimControllerStates>}
 * @author HaJuegos - 27-10-2026
 */
interface RPAnimControllerDefinition extends BPAnimControllerFinalDefinition<RPAnimControllerParamsBase[]> { }

/**
 * Tipado auxiliar general para mapear los states de un controlador fijados en una plantilla base de un RP por ID.
 * @author HaJuegos - 28-10-2026
 */
type RPStates = Record<string, RPAditionalAnimControllerStates>;

/**
 * Tipado auxiliar general para estructurar la base minima que se debe cumplir un mapa de controladores de animacion en la plantilla base.
 * @author HaJuegos - 28-10-2026
 */
type RPBase = Record<string, { states: object; }>;

/**
 * Tipado general auxiliar para convertir la lista de controladores de la plantilla base en un mapa por su ID para la post-edicion.
 * @template {readonly { idController: string; states: object; }[]} T Lista de controladores de la plantilla base.
 * @author HaJuegos - 28-10-2026
 */
type RPControllersMap<
    T extends readonly { idController: string; states: object; }[]
> = {
        [C in T[number]as C['idController']]: C;
    };

/**
 * Tipado auxiliar general para permitir los parametros para editar un controlador de la plantilla base en post-edicion.
 * @template S Estados definidos en el controlador de la plantilla base.
 * @author HaJuegos - 28-10-2026
 */
type RPControllerEdit<S> = {
    /**
     * (Opcional) Nuevo estado inicial a asignar al controlador.
     * @type {?string}
     */
    initialState?: string;

    /**
     * (Opcional) Estados de la plantilla base a modificar, solo los datos indicados seran cambiados.
     * @type {?{ [K in keyof S]?: Partial<RPAditionalAnimControllerStates> }}
     */
    states?: {
        [K in keyof S]?: Partial<RPAditionalAnimControllerStates>
    };
};

/**
 * Tipado auxiliar general para eliminar un controlador o parte de este mismo de la plantilla base en post-edicion.
 * @template S Estados definidos en el controlador de la plantilla base.
 * @author HaJuegos - 28-10-2026
 */
type RPControllerRemoverEdit<S> = true | {
    /**
     * (Opcional) Si es true, elimina el estado inicial del controlador.
     * @type {?true}
     */
    initialState?: true;

    /**
     * (Opcional) Estados a eliminar por completo (true) o propiedades/elementos concretos dentro de estos.
     * @type {?{[K in keyof S]?: true | { [P in keyof S[K]]?: S[K][P] extends readonly (infer U)[] ? true | readonly U[] : true; }; }}
     */
    states?: {
        [K in keyof S]?: true | {
            [P in keyof S[K]]?: S[K][P] extends readonly (infer U)[] ? true | readonly U[] : true;
        };
    };
};

/**
 * Lista de parametros para la post-edicion de una plantilla base de controladores de animacion en un RP.
 * @template {RPBase} TBase Mapa de controladores de la plantilla base, usado para sugerir sus IDs y estados.
 * @author HaJuegos - 28-10-2026
 */
type RPAnimControllerOverride<
    TBase extends RPBase = Record<string, { states: RPStates; }>
> = {
    /**
     * Si es true, elimina todos los datos de la plantilla base.
     * @type {true}
     */
    clearAllData: true;

    /**
     * (Opcional) Nuevos controladores de animacion a agregar.
     * @type {?{ readonly animControllers?: RPAnimControllerParamsBase[] }}
     */
    add?: {
        readonly animControllers?: RPAnimControllerParamsBase[];
    };
} | {
    /**
     * (Opcional) Si es false o no se define, se conservan los datos de la plantilla base.
     * @type {?(false | undefined)}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Controladores de la plantilla base a editar, ordenados por su ID.
     * @type {?{ [K in keyof TBase]?: RPControllerEdit<TBase[K]['states']> }}
     */
    changeControllers?: {
        [K in keyof TBase]?: RPControllerEdit<TBase[K]['states']>;
    };

    /**
     * (Opcional) Controladores o datos de la plantilla base a eliminar, ordenados por su ID.
     * @type {?{ [K in keyof TBase]?: RPControllerRemoverEdit<TBase[K]['states']> }}
     */
    remove?: {
        [K in keyof TBase]?: RPControllerRemoverEdit<TBase[K]['states']>;
    };

    /**
     * (Opcional) Nuevos controladores de animacion a agregar.
     * @type {?{ readonly animControllers?: RPAnimControllerParamsBase[] }}
     */
    add?: {
        readonly animControllers?: RPAnimControllerParamsBase[];
    };
};



/**
 * Parametros base para la definicion de un controlador de animacion en la lista del mismo en un RP.
 * @interface RPAnimControllerParamsBase
 * @extends {AnimControllerParamsBase<string, RPAditionalAnimControllerStates>}
 * @author HaJuegos - 28-10-2026
 */
interface RPAnimControllerParamsBase extends AnimControllerParamsBase<string, RPAditionalAnimControllerStates> { }

/**
 * Lista de parametros por defecto de un estado creado en un controlador de animacion de RP.
 * @interface RPAditionalAnimControllerStates
 * @extends {AnimControllerStatesTypes}
 * @author HaJuegos - 27-10-2026
 */
interface RPAditionalAnimControllerStates extends AnimControllerStatesTypes {
    /**
     * (Opcional) Una version abreviada de "blend_out" que simplemente establece el tiempo que tardara en desvanecerse la animacion si se interrumpe.
     * @type {?number}
     */
    blendransition?: number;

    /**
     * (Opcional) Si se establece, se fusiona una transicion a otro estado, anima cada eje de Euler mediante la rotacion mas corta, en lugar de por valor.
     * @type {?boolean}
     */
    blendViaShortestPath?: boolean;

    /**
     * (Opcional) Lista de efectos de particulas a ejecutar en este estado.
     * @type {?ParticleEffectParams[]}
     */
    particleEffects?: ParticleEffectParams[];

    /**
     * (Opcional) Lista de sonidos a ejecutar en este estado.
     * @type {?SoundEffectParams[]}
     */
    soundEffects?: SoundEffectParams[];

    /**
     * (Opcional) Lista de variables temporales que se ejecutan en este estado.
     * @type {?VariableParams}
     */
    variables?: VariableParams;
}

/**
 * Lista de parametros cuando se define una lista de particulas en un estado de animacion.
 * @interface ParticleEffectParams
 * @author HaJuegos - 27-10-2026
 */
interface ParticleEffectParams {
    /**
     * (Opcional) Si se establece en false, este mismo no estara vinculado al Actor. Por defecto si lo estara.
     * @type {?boolean}
     */
    bindToActor?: boolean;

    /**
     * ID corto definido en el entity.json de la particula a ejecutar.
     * @type {string}
     */
    effect: string;

    /**
     * Localizacion en el modelo como punto Locator donde la particula va a aparecer. 
     * @type {string}
     */
    locator: string;

    /**
     * (Opcional) Scripts MoLangs a ejecutar antes de aparecer la particula.
     * @type {?(string | MoLangValue)}
     */
    preEffectScript?: string | MoLangValue;
}

/**
 * Lista de parametros cuando se define una lista de sonidos en un estado de animacion.
 * @interface SoundEffectParams
 * @author HaJuegos - 27-10-2026
 */
interface SoundEffectParams {
    /**
     * ID corto definido en el entity.json del sonido a ejecutar.
     * @type {string}
     */
    effect: string;

    /**
     * (Opcional) Localizacion en el modelo como punto Locator donde la particula va a aparecer. 
     * @type {string}
     */
    locator?: string;
}

/**
 * Lista de parametros cuando se define una lista de variables en un estado de animacion.
 * @interface VariableParams
 * @author HaJuegos - 27-10-2026
 */
interface VariableParams {
    [key: string]: {
        /**
         * Scripts MoLang a ejecutar de esta variable.
         * @type {(string | MoLangValue)}
         */
        input: string | MoLangValue;

        /**
         * (Opcional) Lista de curveo de MoLangs.
         * @type {?RemapCurveParams}
         */
        remapCurve?: RemapCurveParams;
    };
}

/**
 * Lista de parametros cuando se define un curveo de una variable y su tiempo de curveo.
 * @interface RemapCurveParams
 * @author HaJuegos - 27-10-2026
 */
interface RemapCurveParams {
    [key: string]: number;
}