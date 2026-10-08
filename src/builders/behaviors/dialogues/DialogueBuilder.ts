import { SceneDialogueTypes } from "../../../types/behaviors/dialogues/DialogueTemplate";
import { SnakeCase } from "../../../utils/SnakeCase";

/**
 * Clase principal de base para la creacion de un dialogue para Behavior Packs.
 * @class BehaviorDialogueBuilder
 * @author HaJuegos - 08-10-2026
 * @export
 */
export class BehaviorDialogueBuilder {
    /**
     * Version fija que toma el archivo del dialogue.
     * @type {string}
     * @readonly
     * @private
     */
    private readonly dialogueVersion = "1.17.0";

    /**
     * Escenas que contiene el archivo dialogues.
     * @type {SceneDialogueTypes[]}
     * @private
     */
    private scenes: SceneDialogueTypes[] = [];

    protected constructor () { }

    /**
     * Metodo principal auxiliar para asignar las escenas a crear en el dialogue.
     * @param {SceneDialogueTypes[]} scenes Escenas en concreto creadas.
     * @returns {this} Deuvelve el mismo objecto al ser una definicion de propiedad.
     * @author HaJuegos - 08-10-2026
     * @protected
     */
    protected setScenes(scenes: SceneDialogueTypes[]): this {
        this.scenes = scenes;

        return this;
    }

    /**
     * Metodo principal que convierte toda la plantilla general a una JSON con estructura fija lista para su exportacion.
     * @param {boolean} stringify Si se establece en true, devuelve el objecto en formato de TXT listo para un JSON. 
     * @returns {string | Record<string, unknown>} Devuelve un string o un objecto readonly dependiendo el argumento asignado.
     * 
     * @throws {Error} Puede pasar error si, si no hay escenas asignadas.
     * 
     * @author HaJuegos - 08-10-2026 
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.scenes || this.scenes.length <= 0) {
            throw new Error("");
        }

        const preDialogue = {
            format_version: this.dialogueVersion,
            "minecraft:npc_dialogue": {
                scenes: this.scenes.map(scene => SnakeCase.shallowSnakeCase(scene))
            }
        };

        SnakeCase.shallowSnakeCase;

        const finalObj = Object.freeze(preDialogue);
        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    }
}