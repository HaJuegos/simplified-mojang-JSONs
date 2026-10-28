import { RPManifestDefinition } from "../../types/resources/ManifestTemplate";
import { FinalManifestBuilderTemplate } from "../behaviors/ManifestTemplateBuilder";

/**
 * Clase principal que crea una plantilla definitiva para la creacion de un manifest.
 * @class FinalRPManifestBuilderTemplate
 * @extends {FinalManifestBuilderTemplate}
 * @author HaJuegos - 28-10-2026
 * @export
 */
export class FinalRPManifestBuilderTemplate extends FinalManifestBuilderTemplate {
    /**
     * Argumentos principales para la creacion de un manifest resource pack de una plantilla en concreto.
     * @param {RPManifestDefinition} def Los valores a definir al manifest.
     * @author HaJuegos - 28-10-2026
     * @constructor
     * @public
     */
    public constructor (def: RPManifestDefinition) {
        super(def);
    }
}

/**
 * Funcion principal de fabrica para la creacion de un Manifest RP vanilla a partir de una definicion fija.
 * @param {RPManifestDefinition} def  Definicion base de los parametros de la plantilla fija del manifest.
 * @returns {string} Devuelve la plantilla base ya creada y adaptada para el JSON final.
 * @author HaJuegos - 28-10-2026
 * @export
 */
export function createRPManifest(def: RPManifestDefinition): string {
    return new FinalRPManifestBuilderTemplate(def).finalBuild();
}