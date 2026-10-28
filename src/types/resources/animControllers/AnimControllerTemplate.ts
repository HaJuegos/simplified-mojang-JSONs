import { AnimControllerStatesTypes, BPAnimControllerFinalDefinition } from "../../behaviors/animContollers/AnimControllerTemplate";
import { MoLangValue } from "../../MoLang";

export {
    RPAnimControllerDefinition
};

/**
 * Lista de parametros principales para la creacion de un controlador de animacion en un RP.
 * @interface RPAnimControllerDefinition
 * @extends {BPAnimControllerFinalDefinition<string, RPAditionalAnimControllerStates>}
 * @author HaJuegos - 27-10-2026
 */
interface RPAnimControllerDefinition extends BPAnimControllerFinalDefinition<string, RPAditionalAnimControllerStates> { }

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