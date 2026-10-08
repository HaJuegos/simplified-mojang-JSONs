import { BPAnimControllerFinalDefinition } from "../../../types/behaviors/animContollers/AnimControllerTemplate";
import { BehaviorAnimControllerBuilder } from "./AnimControllerBuilder";

/**
 * Clase principal que crea una plantilla definitiva para la creacion de un controlador de animacion.
 * @class FinalAnimControllerBuilderTemplate
 * @extends {BehaviorAnimControllerBuilder}
 * @author HaJuegos - 08-10-2026
 */
class FinalAnimControllerBuilderTemplate extends BehaviorAnimControllerBuilder {
    /**
     * Argumentos principales para la creacion de un Controlador de Animacion de una plantilla en concreto.
     * @param {BPAnimControllerFinalDefinition} def Los valores a definir en el controlador.
     * @author HaJuegos - 08-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: BPAnimControllerFinalDefinition) {
        super();

        this.setIDAnim(def.idController);
        this.setInitialState(def.initialState);
        this.setStates(def.states);
    }

    /**
     * Metodo principal final que convierte toda la plantilla definitiva en JSON en texto estructurado.
     * @returns {string} Devuelve el JSON final en su estructura final.
     * @author HaJuegos - 06-10-2026 
     * @public
     */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un Controlador de Animacion a patir de una definicion fija.
 * @param {BPAnimControllerFinalDefinition} def Definicion base de los parametros para la plantilla fija. 
 * @returns {string} Devuelve la plantilla base ya creada y adaptada a txt para el JSON final.
 * @author HaJuegos - 08-10-2026
 * @export
 */
export function createBPAnimController<TStates extends string>(def: BPAnimControllerFinalDefinition<TStates>): string {
    return new FinalAnimControllerBuilderTemplate(def).finalBuild();
}