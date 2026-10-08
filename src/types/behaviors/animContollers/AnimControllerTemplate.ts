import { MoLangValue } from '../../MoLang';

export {
    AnimControllerStatesTypes,
    BPAnimControllerFinalDefinition,
};

/**
 * Tipado general permitido para las animaciones adiccionales en un estado.
 * @author HaJuegos - 07-10-2026
 */
type AnimationsParams = string | Record<string, MoLangValue | string>;

/**
 * Lista de parametros principales para la creacion de un controlador de animacion.
 * @interface BPAnimControllerFinalDefinition
 * @template {string} TStates Parametro generico para autocompletar cuando se define un nuevo estado en el controlador de animacion.
 * @author HaJuegos - 08-10-2026
 */
interface BPAnimControllerFinalDefinition<TStates extends string = string> {
    /**
     * ID de la animacion a crear.
     * @type {string}
     */
    idController: string;

    /**
     * Estado inicial a ejecutar cuando el controlador es llamado.
     * @type {(NoInfer<TStates> | 'default')}
     */
    initialState: NoInfer<TStates> | 'default';

    /**
     * Los demas estados a asignar al controlador y a ejecutar en cuestion.
     * @type {Record<TStates, AnimControllerStatesTypes<TStates>>}
     */
    states: Record<TStates, AnimControllerStatesTypes<TStates>>;
}

/**
 * Lista de parametros por defecto de un estado creado en un controlador de animacion.
 * @interface AnimControllerStatesTypes
 * @author HaJuegos - 07-10-2026
 */
interface AnimControllerStatesTypes<TStates extends string = string> {
    /**
     * (Opcional) Comandos iniciales a ejecutar cuando se active este estado.
     * @type {string[]}
     */
    onEntry?: string[];

    /**
     * (Opcional) Comando finales a ejecutar cuando se termine este estado. 
     * @type {?string[]}
     */
    onExit?: string[];

    /**
     * (Opcional) Animaciones adiccionales a ejecutarse a su vez cuando este estado se active.
     * @type {?AnimationsParams[]}
     */
    animations?: AnimationsParams[];

    /**
     * (Opcional) Transiciones a cumplir cuando este estado se ejecute para pasar a otros estados.
     * @type {?Partial<Record<TStates | 'default', MoLangValue | string>>[]}
     */
    transitions?: Partial<Record<TStates | 'default', MoLangValue | string>>[];
}