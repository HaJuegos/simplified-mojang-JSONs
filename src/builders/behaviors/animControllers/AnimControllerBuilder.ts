import { AnimControllerParamsBase, AnimControllerStatesTypes, FormatVersionAnimControllerList } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
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
     * @type {FormatVersionAnimControllerList}
     * @private
     */
    private animVersion: FormatVersionAnimControllerList = FormatVersionAnimControllerList.MostRecent;

    /**
     * (Opcional) Lista de animaciones asignadas en el controlador en concreto.
     * @type {AnimControllerParamsBase[]}
     * @private
     */
    private listOfControllersData: AnimControllerParamsBase[] = [];

    protected constructor () { }

    /**
     * Metodo principal auxiliar que establece la version del controlador completo en concreto.
     * @param {FormatVersionAnimControllerList} newVersion Nueva version a establecer. Por defecto es "1.10.0".
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 28-10-2026 
     * @protected
     */
    protected setFormatVersion(newVersion: FormatVersionAnimControllerList): this {
        this.animVersion = newVersion;

        return this;
    }

    /**
     * Metodo principal auxiliar que asigna las animaciones con sus respectivos datos a la controladora en concreto.
     * @param {AnimControllerParamsBase[]} params Lista de animaciones con sus parametros en concreto.
     * @returns {this} Devuelve la misma clase debido a que es un metodo de propiedades.
     * @author HaJuegos - 28-10-2026  
     * @protected
     */
    protected setAnimations(params: AnimControllerParamsBase[]): this {
        this.listOfControllersData = params;

        return this;
    }

    /**
     * Metodo principal que convierte toda la plantilla general a una JSON con estructura fija lista para su exportacion.
     * @param {boolean} stringify Si se establece en true, devuelve el objecto en formato de TXT listo para un JSON. 
     * @returns {string | Record<string, unknown>} Devuelve un string o un objecto readonly dependiendo el argumento asignado.
     * @author HaJuegos - 07-10-2026 
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        const animationControllersBody: Record<string, unknown> = {};

        for (const controller of this.listOfControllersData) {
            if (!controller.idController) {
                throw new Error("[CATLOG] Error: Cada controlador de animacion requiere de un ID para ser reconocido por MC. Asigna uno.");
            }

            const controllerBody: Record<string, unknown> = {};

            if (controller.initialState) {
                controllerBody.initial_state = controller.initialState;
            }

            if (controller.states) {
                controllerBody.states = Object.fromEntries(
                    Object.entries(controller.states).map(([state, data]) => [state, SnakeCase.shallowSnakeCase(data)])
                );
            }

            animationControllersBody[controller.idController] = controllerBody;
        }

        const preController = {
            format_version: this.animVersion,
            animation_controllers: animationControllersBody
        };

        const finalObj = Object.freeze(preController);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}