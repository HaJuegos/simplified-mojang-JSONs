import { AnimControllerStatesTypes } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal de base para la creacion de controladores de animaciones para Behaviors Packs.
 * @class BehaviorAnimControllerBuilder
 * @author HaJuegos - 07-10-2026
 * @export
 */
export class BehaviorAnimControllerBuilder {
    /**
     * Version del controlador. Por defecto siempre sera el mas estable o reciente. En este caso "1.10.0"
     * @type {string}
     * @private
     */
    private animVersion: string = "1.10.0";

    /**
     * ID del controlador a crear.
     * @type {(string | undefined)}
     * @private
     */
    private idAnim: string | undefined;

    /**
     * Estado inicial a ejecutar cuando el controlador es inicializado.
     * @type {(string | undefined)}
     * @private
     */
    private initialState: string | undefined;

    /**
     * Todos los estados que contiene el controlador.
     * @type {Record<string, AnimControllerStatesTypes>}
     * @private
     */
    private states: Record<string, AnimControllerStatesTypes> = {};

    protected constructor () { }

    /**
     * Metodo principal que establece el ID al controlador a crear.
     * @param {string} idAnim ID del controlador.
     * @returns {this} Devuelve el mismo objecto por ser un metodo de propiedades.
     * @author HaJuegos - 07-10-2026
     * @protected
     */
    protected setIDAnim(idAnim: string): this {
        this.idAnim = `controller.animation.${idAnim}`;

        return this;
    }

    /**
     * Metodo principal que asigna el estado inicial a ejecutar al controlador.
     * @param {string} stateID ID del estado a asignar.
     * @returns {this} Devuelve el mismo objecto por ser un metodo de propiedades.
     * @author HaJuegos - 07-10-2026
     * @protected
     */
    protected setInitialState(stateID: string): this {
        this.initialState = stateID;

        return this;
    }

    /**
     * Metodo principal que asigna la lista de estados a crear en el controlador.
     * @param {Record<string, AnimControllerStatesTypes>} listStates Lista de estados en concreto.
     * @returns {this} Devuelve el mismo objecto por ser un metodo de propiedades.
     * @author HaJuegos - 07-10-2026
     * @protected
     */
    protected setStates(listStates: Record<string, AnimControllerStatesTypes>): this {
        this.states = listStates;

        return this;
    }

    /**
     * Metodo principal que convierte toda la plantilla general a una JSON con estructura fija lista para su exportacion.
     * @param {boolean} stringify Si se establece en true, devuelve el objecto en formato de TXT listo para un JSON. 
     * @returns {string | Record<string, unknown>} Devuelve un string o un objecto readonly dependiendo el argumento asignado.
     * 
     * @throws {Error} Puede pasar error si, no se establece un ID al controllador de la animacion.
     * 
     * @author HaJuegos - 07-10-2026 
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.idAnim) {
            throw new Error("[CATLOG] Error: El controllador de animacion requiere de un ID para ser reconocido por MC. Asigna uno. De preferencia, sin mayusculas.");
        }

        const controllerBody: Record<string, unknown> = {};

        if (this.initialState) {
            controllerBody.initial_state = this.initialState;
        }

        controllerBody.states = Object.fromEntries(Object.entries(this.states).map(([state, data]) => [state, SnakeCase.shallowSnakeCase(data)]));

        const preController = {
            format_version: this.animVersion,
            animation_controllers: {
                [this.idAnim]: controllerBody
            }
        };

        const finalObj = Object.freeze(preController);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}