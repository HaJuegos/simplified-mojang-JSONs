import { RPAnimControllerDefinition, RPAnimControllerOverride, RPAnimControllerParamsBase, RPControllersMap } from "../../../types/resources/animControllers/AnimControllerTemplate";
import { FinalAnimControllerBuilderTemplate } from "../../behaviors/animControllers/AnimControllerTemplateBuilder";

/**
 * Clase principal que crea una plantilla definitiva para la creacion de un controlador de animacion.
 * @class FinalRPAnimControllerBuilderTemplate
 * @extends {FinalAnimControllerBuilderTemplate}
 * @author HaJuegos - 27-10-2026
 */
class FinalRPAnimControllerBuilderTemplate extends FinalAnimControllerBuilderTemplate {
    /**
     * Argumentos principales y eventos para la creacion de los Controladores de Animacion de un RP en una plantilla fija en concreto.
     * @param {RPAnimControllerDefinition} def Parametros fijos de la plantilla base a definir.
     * @param {RPAnimControllerOverride<any>} over Parametros adiccionales de edicion post-edicion de la plantilla base definida.
     * @author HaJuegos - 27-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: RPAnimControllerDefinition, over: RPAnimControllerOverride<any>) {
        super(FinalRPAnimControllerBuilderTemplate.applyOverride(def, over));
    }

    /**
     * Metodo auxiliar que construye la definicion de la plantilla fija reconstruida en un resouce pack para ser recursivo.
     * @param {RPAnimControllerDefinition} def Definiciones de la plantilla fija construida.
     * @param {RPAnimControllerOverride<any>} over Definiciones post-edicion de la plantilla fija construida.
     * @returns {RPAnimControllerDefinition} Devuelve la definicion fija final con los parametros asignados recursivos adaptados para la construccion final de la plantilla definitiva.
     * @author HaJuegos - 27-10-2026 
     * @private
     * @static
     */
    private static applyOverride(def: RPAnimControllerDefinition, over: RPAnimControllerOverride<any>): RPAnimControllerDefinition {
        let controllers: RPAnimControllerParamsBase[] = structuredClone([...def.animControllers]);

        if (over.clearAllData) {
            controllers = [];
        } else {
            for (const [id, edit] of Object.entries(over.changeControllers ?? {}) as [string, any][]) {
                const ctrl = controllers.find(c => c.idController === id);

                if (!ctrl || !edit) continue;

                if (edit.initialState != undefined) {
                    ctrl.initialState = edit.initialState;
                };

                for (const [stateId, partial] of Object.entries(edit.states ?? {}) as [string, any][]) {
                    if (ctrl.states[stateId] && partial) {
                        Object.assign(ctrl.states[stateId], partial);
                    }
                }
            }

            for (const [id, rem] of Object.entries(over.remove ?? {}) as [string, any][]) {
                if (!rem) continue;

                if (rem === true) {
                    controllers = controllers.filter(c => c.idController !== id);
                    continue;
                }

                const ctrl = controllers.find(c => c.idController === id);

                if (!ctrl) continue;

                if (rem.initialState) {
                    delete (ctrl as any).initialState;
                };

                for (const [stateId, remState] of Object.entries(rem.states ?? {}) as [string, any][]) {
                    if (!remState || !ctrl.states[stateId]) continue;

                    if (remState === true) {
                        delete ctrl.states[stateId];
                        continue;
                    }

                    for (const prop of Object.keys(remState)) {
                        const val = remState[prop];
                        const target = ctrl.states[stateId] as any;

                        if (val === true) {
                            delete target[prop];
                        } else if (Array.isArray(val) && Array.isArray(target[prop])) {
                            const key = (x: unknown) => JSON.stringify(x);
                            const toRemove = new Set(val.map(key));

                            target[prop] = target[prop].filter((x: unknown) => {
                                !toRemove.has(key(x));
                            });

                            if (target[prop].length == 0) {
                                delete target[prop];
                            };
                        }
                    }
                }
            }
        }

        if (over.add?.animControllers) {
            controllers.push(...structuredClone([...over.add.animControllers]));
        }

        return { ...def, animControllers: controllers };
    }
}

/**
 * Funcion principal de fabrica para la creacion de Controladores de animacion para un RP a patir de una definicion fija.
 * @param {TDef} def Definicion base de los parametros para la plantilla fija.
 * @template {RPAnimControllerDefinition} TDef Parametros a seguir de la plantilla base para los parametros post-edicion.
 * @returns {(over?: RPAnimControllerOverride<RPControllersMap<TDef["animControllers"]>>) => any} Devuele una funcion auxiliar para las ediciones de la plantilla base para la post-edicion y finalmente la exportacion final adaptada a txt para el JSON final.
 * @author HaJuegos - 27-10-2026
 * @export
 */
export function createRPAnimController<
    const TDef extends RPAnimControllerDefinition
>(def: TDef) {
    return (over: RPAnimControllerOverride<RPControllersMap<TDef['animControllers']>> = {}) => {
        return new FinalRPAnimControllerBuilderTemplate(def, over).finalBuild();
    };
}