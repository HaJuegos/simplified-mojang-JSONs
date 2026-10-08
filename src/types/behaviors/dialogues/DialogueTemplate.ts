import { RawMessage } from "@minecraft/server";

export {
    SceneDialogueTypes,
    BPDialogueDefinition,
};

/**
 * Lista de parametros para la creacion de un archivo dialogue.
 * @interface BPDialogueDefinition
 * @author HaJuegos - 08-10-2026
 */
interface BPDialogueDefinition {
    /**
     * Lista de escenas a asignar al archivo.
     * @type {SceneDialogueTypes[]}
     */
    scenes: SceneDialogueTypes[];
}

/**
 * Lista de parametros necesarios para la creacion de una escena.
 * @interface SceneDialogueTypes
 * @author HaJuegos - 08-10-2026
 */
interface SceneDialogueTypes {
    /**
     * Nombre que se mostrara en la escena del NPC. Puede ser traducido por medio de {@link RawMessage}.
     * @type {(string | RawMessage)}
     */
    npcName: string | RawMessage;

    /**
     * ID o Tag de la escena para poderse usar en el comando /dialogue.
     * @type {string}
     */
    sceneTag: string;

    /**
     * Texto que aparece en la escena o cuandro de dialogo del NPC. Puede ser traducido por medio de {@link RawMessage}.
     * @type {(string | RawMessage)}
     */
    text: string | RawMessage;

    /**
     * (Opcional) Botones adiccionales que aparecen en la escena de dialogo del NPC.
     * @type {?BtnsSceneDialogueTypes[]}
     */
    buttons?: BtnsSceneDialogueTypes[];

    /**
     * (Opcional) Lista de comandos a ejecutar cuando la escena es abierta.
     * @type {?string[]}
     */
    onOpenCommands?: string[];

    /**
     * (Opcional) Lista de comandos a ejecutar cuando la escena es terminada o cerrada.
     * @type {?string[]}
     */
    onCloseCommands?: string[];
}

/**
 * Lista de parametros cuando se crea un boton en escena.
 * @interface BtnsSceneDialogueTypes
 * @author HaJuegos - 08-10-2026
 */
interface BtnsSceneDialogueTypes {
    /**
     * Nombre visible que toma el boton. Puede ser traducido por medio de {@link RawMessage}
     * @type {(string | RawMessage)}
     */
    name: string | RawMessage;

    /**
     * Comandos a ejecutar cuando el comando es seleccionado o se le da "click".
     * @type {string[]}
     */
    commands: string[];
}