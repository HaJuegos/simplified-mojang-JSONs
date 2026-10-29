import { MoLangValue } from "../../MoLang";
import { ParticleEffectParams, SoundEffectParams } from "../animControllers/AnimControllerTemplate";

export {
    FormatVersionListAnims,
    RPAnimationDefinition,
    RPAnimationOverride,

    RPAnimationsMap,
    AnimationParams,
};


/**
 * Lista de format versions permitidos en una lista de Animaciones.
 * @enum {string}
 * @author HaJuegos - 28-10-2026
 */
enum FormatVersionListAnims {
    MostRecent = "1.10.0",
    v1_8_0 = "1.8.0"
}

/**
 * Parametros principales para la definicion de animaciones en un resource pack.
 * @interface RPAnimationDefinition
 * @author HaJuegos - 28-10-2026
 */
interface RPAnimationDefinition {
    /**
     * (Opcional) Version del format version que tomaran las animaciones.
     * @type {?FormatVersionListAnims}
     */
    formatVersion?: FormatVersionListAnims;

    /**
     * Lista de animaciones a definir en concreto.
     * @type {readonly AnimationParams[]}
     */
    animations: readonly AnimationParams[];
}

/**
 * Tipado general para mapear la lista de animaciones con sus parametros en concreto.
 * @template {readonly { idAnimation: string; }[]} T ID a seguir en concreto.
 * @author HaJuegos - 29-10-2026
 */
type RPAnimationsMap<T extends readonly { idAnimation: string; }[]> = {
    [A in T[number]as A['idAnimation']]: A;
};

/**
 * Tipado auxiliar general para mostrar el mapeo para las edicions de los valores post-edicion.
 * @template A Tipados en concreto a considerar.
 * @author HaJuegos - 29-10-2026 
 */
type RPAnimationRemoverEdit<A> = true | {
    [P in Exclude<keyof A, 'idAnimation'>]?: A[P] extends readonly unknown[] ? true : A[P] extends object ? true |
    { [K in keyof A[P]]?: true | (A[P][K] extends readonly unknown[] ? never : A[P][K] extends object ? { [C in keyof A[P][K]]?: true } : never) } : true;
};

/**
 * Parametros principales para las definicion post-edicion de la plantilla base de la creacion de una lista de animaciones.
 * @template {Record<string, { idAnimation: string; }>} TBase Datos a considerar de la plantilla base.
 * @author HaJuegos - 29-10-2026
 */
type RPAnimationOverride<
    TBase extends Record<string, { idAnimation: string; }> = Record<string, AnimationParams>
> = {
    clearAllData: true;
    add?: {
        readonly animations?: AnimationParams[];
    };
} | {
    clearAllData?: false | undefined;
    changeAnimations?: {
        [K in keyof TBase]?: Partial<Omit<AnimationParams, 'idAnimation'>>
    };
    remove?: {
        [K in keyof TBase]?: RPAnimationRemoverEdit<TBase[K]>
    };
    add?: {
        readonly animations?: AnimationParams[];
    };
};



/**
 * Parametros principales para la creacion de una nueva animacion en un archivo de animaciones.
 * @interface AnimationParams
 * @author HaJuegos - 29-10-2026
 */
interface AnimationParams {
    /**
     * ID de la animacion en concreto a crear.
     * @type {string}
     */
    idAnimation: string;

    /**
     * (Opcional) Si se establece, esta animacion debe repetirse cada vez que esta termina o desea mantenerse congelado al final?
     * @type {?boolean}
     */
    loop?: boolean | "hold_on_last_frame";

    /**
     * (Opcional) Se establece la duracion de la animacion en segundos.
     * @type {?number}
     */
    animationLength?: number;

    /**
     * (Opcional) Codigos en MoLang para la constante actualizacion de la animacion con un numero float.
     * @type {?(string | MoLangValue)}
     */
    animTimeUpdate?: string | MoLangValue;

    /**
     * (Opcional) Codigos en MoLang para la constante actualizacion de la animacion con un numero float.
     * @type {?(string | MoLangValue)}
     */
    blendWeight?: string | MoLangValue;

    /**
     * (Opcional) Codigos en MoLang para la constante actualizacion de la animacion con un numero float.
     * @type {?(string | MoLangValue)}
     */
    loopDelay?: string | MoLangValue;

    /**
     * (Opcional) Si se establece, todas las animaciones previas y en ejecucion, se cancelan para ejecutar esta misma animacion.
     * @type {?boolean}
     */
    overridePreviousAnimation?: boolean;

    /**
     * (Opcional) Codigos en MoLang para la constante actualizacion de la animacion con un numero float.
     * @type {?(string | MoLangValue)}
     */
    startDelay?: string | MoLangValue;

    /**
     * (Opcional) Lista de definiciones de huesos que seran afectados por la animacion.
     * @type {?BoneAnimationParams}
     */
    bones?: BoneAnimationParams;

    /**
     * (Opcional) Lista de particulas a ejecutar en la animacion.
     * @type {?ParticleEffectsParams}
     */
    particleEffects?: ParticleEffectsParams;

    /**
     * (Opcional) Lista de sonidos a ejecutar en la animacion.
     * @type {?SoundEffectsParams}
     */
    soundEffects?: SoundEffectsParams;
}

/**
 * Tipado general auxiliar para definir un tipo de Vector.
 * @author HaJuegos - 29-10-2026
 */
type VectorType = number | string | MoLangValue;

/**
 * Tipado general auxiliar para definir un tipo de Vector3 por animacion.
 * @author HaJuegos - 29-10-2026
 */
type Vector3Animation = [VectorType, VectorType, VectorType];

/**
 * Tipado general auxiliar para la creacion de un keyframe avanzado en una animacion en concreto.
 * @interface KeyFrameDetails
 * @author HaJuegos - 29-10-2026
 */
interface KeyFrameDetails {
    pre?: Vector3Animation;
    post?: Vector3Animation;
    lerpMode?: "catmullrom" | "linear";
};

/**
 * Tipado general auxiliar para la definicio definitiva de un keyframe de animacion.
 * @author HaJuegos - 29-10-2026
 */
type AnimationChannel = Vector3Animation | MoLangValue | Record<string, Vector3Animation | KeyFrameDetails | MoLangValue>;

/**
 * Parametros principales para la asignacion de un keyframe a un hueso en concreto de la animacion.
 * @interface BoneAnimationParams
 * @author HaJuegos - 29-10-2026
 */
interface BoneAnimationParams {
    [key: string]: {
        /**
         * (Opcional) Keyframes a mover en la animacion.
         * @type {?AnimationChannel}
         */
        position?: AnimationChannel;

        /**
         * (Opcional) Keyframes a rotar en la animacion.
         * @type {?AnimationChannel}
         */
        rotation?: AnimationChannel;

        /**
         * (Opcional) Keyframes a escalar en la animacion.
         * @type {?AnimationChannel}
         */
        scale?: AnimationChannel;

        /**
         * (Opcional) Keyframes relativos o pegados con un hueso en la animacion.
         * @type {?{ rotation?: string | boolean | object | MoLangValue;}}
         */
        relativeTo?: {
            rotation?: string | boolean | object | MoLangValue;
        };
    };
}

/**
 * Parametros para definir una lista de particulas a ejecutar en la animacion en concreto.
 * @interface ParticleEffectsParams
 * @author HaJuegos - 29-10-2026
 */
interface ParticleEffectsParams {
    [key: string]: ParticleEffectParams | ParticleEffectParams[];
}

/**
 * Parametros para definir una lista de sonidos a ejecutar en la animacion en concreto.
 * @interface SoundEffectsParams
 * @author HaJuegos - 29-10-2026
 */
interface SoundEffectsParams {
    [key: string]: SoundEffectParams | SoundEffectParams[];
}