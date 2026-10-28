import { MoLangValue } from '../../MoLang';

export {
    FormatVersionAnimControllerList,
    BPAnimControllerFinalDefinition,
    AnimControllerParamsBase,
    AnimControllerStatesTypes,
};

/**
 * Lista de versiones permitidas del controlador de animacion. 
 * @enum {string}
 */
enum FormatVersionAnimControllerList {
    MostRecent = "1.10.0",
    V1_8_0 = "1.8.0"
}

/**
 * Tipado general permitido para las animaciones adiccionales en un estado.
 * @author HaJuegos - 07-10-2026
 */
type AnimationsParams = string | Record<string, MoLangValue | string | number>;

/**
 * Lista de animaciones a agregar en el controlador de animacion.
 * @interface BPAnimControllerFinalDefinition
 * @author HaJuegos - 08-10-2026
 */
interface BPAnimControllerFinalDefinition<
    TAnimControllers = AnimControllerParamsBase[]
> {
    /**
     * (Opcional) Version del format version en concreto a asignar en el controlador de animacion.
     * @type {?FormatVersionAnimControllerList}
     */
    formatVersion?: FormatVersionAnimControllerList;

    /**
     * Lista de controladores de animacion a asignar en el archivo.
     * @type {AnimControllerParamsBase[]}
     */
    animControllers: TAnimControllers;
}

/**
 * Parametros principales para la creacion de un controlador de animacion general.
 * @interface AnimControllerParamsBase
 * @template {string} TStates Parametro generico para autocompletar cuando se define un nuevo estado en el controlador de animacion.
 * @template {TStatesDetails} TStatesDetails Parametro generico para definir los tipos de datos permitidos en un state de un controllador.
 * @author HaJuegos - 28-10-2026
 */
interface AnimControllerParamsBase<
    TStates extends string = string,
    TStatesDetails = AnimControllerStatesTypes<TStates>
> {
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
     * @type {Record<TStates, TStatesDetails>}
     */
    states: Record<TStates, TStatesDetails>;
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