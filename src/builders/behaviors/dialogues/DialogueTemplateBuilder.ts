import { BPDialogueDefinition } from "../../../types/behaviors/dialogues/DialogueTemplate";
import { BehaviorDialogueBuilder } from "./DialogueBuilder";

/**
 * Clase principal que crea una plantilla definitiva para la creacion de dialogue.
 * @class FinalDialogueBuilderTemplate
 * @extends {BehaviorDialogueBuilder}
 * @author HaJuegos - 08-10-2026
 */
class FinalDialogueBuilderTemplate extends BehaviorDialogueBuilder {
    /**
     * Argumentos principales para la creacion de un Dialogue de una plantilla en concreto.
     * @param {BPDialogueDefinition} def Los valores a definir en el controlador.
     * @author HaJuegos - 08-10-2026 
     * @constructor
     * @public
     */
    public constructor (def: BPDialogueDefinition) {
        super();

        this.setScenes(def.scenes);
    }

    /**
    * Metodo principal final que convierte toda la plantilla definitiva en JSON en texto estructurado.
    * @returns {string} Devuelve el JSON final en su estructura final.
    * @author HaJuegos - 08-10-2026 
    * @public
    */
    public finalBuild(): string {
        return this.convertToJSON(true);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un Dialogue a patir de una definicion fija.
 * @param {BPDialogueDefinition} def Definicion base de los parametros para la plantilla fija. 
 * @returns {string} Devuelve la plantilla base ya creada y adaptada a txt para el JSON final.
 * @author HaJuegos - 08-10-2026
 * @export
 */
export function createBPDialogue(def: BPDialogueDefinition): string {
    return new FinalDialogueBuilderTemplate(def).finalBuild();
}