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
     * Argumentos principales para la creacion de un Controlador de Animacion de un RP de una plantilla en concreto.
     * @param {RPAnimControllerDefinition} def Los valores a definir en el controlador.
     * @author HaJuegos - 27-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: RPAnimControllerDefinition, over: RPAnimControllerOverride<any>) {
        super(FinalRPAnimControllerBuilderTemplate.applyOverride(def, over));
    }

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
 * Funcion principal de fabrica para la creacion de un Controlador de Animacion de un RP a patir de una definicion fija.
 * @param {RPAnimControllerDefinition} def Definicion base de los parametros para la plantilla fija.
 * @returns {string} Devuelve la plantilla base ya creada y adaptada a txt para el JSON final.
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