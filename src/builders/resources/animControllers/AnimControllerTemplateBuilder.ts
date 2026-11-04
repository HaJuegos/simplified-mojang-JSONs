import { BPAnimControllerFinalDefinition } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { RPAnimControllerDefinition, RPAnimControllerOverride, RPAnimControllerParamsBase, RPControllersMap, RPNoExtraStates } from "../../../types/resources/animControllers/AnimControllerTemplate";
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
     * @returns {BPAnimControllerFinalDefinition<RPAnimControllerParamsBase[]>} Devuelve la definicion fija final con los parametros asignados recursivos adaptados para la construccion final de la plantilla definitiva.
     * @author HaJuegos - 03-11-2026
     * @private
     * @static
     */
    private static applyOverride(def: RPAnimControllerDefinition, over: RPAnimControllerOverride<any>): BPAnimControllerFinalDefinition<RPAnimControllerParamsBase[]> {
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
                    if (!ctrl.states[stateId]) {
                        ctrl.states[stateId] = partial;
                    } else if (partial) {
                        for (const [prop, val] of Object.entries(partial)) {
                            const targetProp = (ctrl.states[stateId] as any)[prop];

                            if (Array.isArray(targetProp) && Array.isArray(val)) {
                                const existingKeys = new Set(targetProp.map(x => JSON.stringify(x)));
                                const merged = [...targetProp];

                                for (const item of val) {
                                    const serialized = JSON.stringify(item);

                                    if (!existingKeys.has(serialized)) {
                                        merged.push(item);
                                        existingKeys.add(serialized);
                                    }
                                }

                                (ctrl.states[stateId] as any)[prop] = merged;
                            } else {
                                (ctrl.states[stateId] as any)[prop] = val;
                            }
                        }
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
                                return !toRemove.has(key(x));
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
            for (const item of over.add.animControllers as any[]) {
                if ('idController' in item) {
                    const existing = controllers.find(c => c.idController === item.idController);

                    if (existing) {
                        existing.initialState = item.initialState || existing.initialState;
                        existing.states = FinalRPAnimControllerBuilderTemplate.mergeStates(existing.states, structuredClone(item.states));
                    } else {
                        controllers.push(structuredClone(item));
                    }

                    continue;
                }

                for (const [id, newStates] of Object.entries(item) as [string, any][]) {
                    const ctrl = controllers.find(c => c.idController === id);

                    if (!ctrl) continue;

                    ctrl.states = FinalRPAnimControllerBuilderTemplate.mergeStates(ctrl.states, structuredClone(newStates.states));
                }
            }
        }

        return { ...def, animControllers: controllers };
    }

    /**
     * Metodo auxiliar que combina las propiedades de un estado evitando duplicados en sus arrays.
     * @param {Record<string, any>} base Estado base a considerar.
     * @param {Record<string, any>} patch Propiedades a convinar.
     * @returns {Record<string, any>} Devuelve el estado nuevo totalmente convinado.
     * @author HaJuegos - 04-11-2026 
     * @private
     * @static
     */
    private static mergeState(base: Record<string, any>, patch: Record<string, any>): Record<string, any> {
        const out = { ...base };

        for (const [k, v] of Object.entries(patch)) {
            const cur = out[k];

            if (Array.isArray(cur) && Array.isArray(v)) {
                const seen = new Set(cur.map(x => JSON.stringify(x)));

                out[k] = [...cur, ...v.filter(x => !seen.has(JSON.stringify(x)))];
            } else {
                out[k] = v;
            }
        }

        return out;
    }

    /**
     * Metodo auxiliar que combina los estados de un controlador fusionando los existente y añadiendo los nuevos.
     * @param {Record<string, any>} base Estados base a considerar.
     * @param {Record<string, any>} patch Estados a combinar.
     * @returns {Record<string, any>} Devuelve el nuevo estado con los datos combinados.
     * @author HaJuegos - 04-11-2026 
     * @private
     * @static
     */
    private static mergeStates(base: Record<string, any>, patch: Record<string, any>): Record<string, any> {
        const out = { ...base };

        for (const [id, state] of Object.entries(patch)) {
            out[id] = out[id] ? FinalRPAnimControllerBuilderTemplate.mergeState(out[id], state) : state;
        }

        return out;
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
>(def: TDef & RPNoExtraStates<TDef>) {
    return (over: RPAnimControllerOverride<RPControllersMap<TDef['animControllers']>> = {}) => {
        return new FinalRPAnimControllerBuilderTemplate(def, over).finalBuild();
    };
}