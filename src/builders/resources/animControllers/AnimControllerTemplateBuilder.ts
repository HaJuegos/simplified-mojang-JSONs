import { RPAnimControllerDefinition } from "../../../types/resources/animControllers/AnimControllerTemplate";
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
    public constructor (def: RPAnimControllerDefinition) {
        super(def);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un Controlador de Animacion de un RP a patir de una definicion fija.
 * @param {RPAnimControllerDefinition} def Definicion base de los parametros para la plantilla fija.
 * @returns {string} Devuelve la plantilla base ya creada y adaptada a txt para el JSON final.
 * @author HaJuegos - 27-10-2026
 * @export
 */
export function createRPAnimController(def: RPAnimControllerDefinition): string {
    return new FinalRPAnimControllerBuilderTemplate(def).finalBuild();
}