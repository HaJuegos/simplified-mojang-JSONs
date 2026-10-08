import { BPFinalDefinitionManifest } from "../../types/behaviors/ManifestTemplate";
import { BehaviorManifestBuilder } from "./ManifestBuilder";

/**
 * Clase principal que crea una plantilla definitiva para la creacion de un manifest.
 * @class FinalManifestBuilderTemplate
 * @extends {BehaviorManifestBuilder}
 * @author HaJuegos - 06-10-2026
 * @export
 */
class FinalManifestBuilderTemplate extends BehaviorManifestBuilder {
    /**
     * Argumentos principales para la creacion de un manifest behavior pack de una plantilla en concreto.
     * @param {BPFinalDefinitionManifest} def Los valores a definir al manifest.
     * @author HaJuegos - 06-10-2026
     * @constructor
     * @public
     */
    public constructor (def: BPFinalDefinitionManifest) {
        super();

        if (def.metadata) {
            this.setMetadata(def.metadata);
        }

        this.setNamePack(def.header.name);
        this.setDescPack(def.header.description);
        this.setVersionPack(def.header.version);

        if (def.header.setRandomUUID) {
            this.setRandomUUIDPack();
        } else if (def.header.uuid) {
            this.setUUIDPack(def.header.uuid);
        }

        if (def.header.setMinEngine) {
            this.setSpecificMinEngine(def.header.setMinEngine);
        }

        if (def.modules && def.modules.length > 0) {
            this.setModules(def.modules);
        }

        if (def.capabilities && def.capabilities.length > 0) {
            this.setCapabilities(def.capabilities);
        }

        if (def.dependencies && def.dependencies.length > 0) {
            this.setDependencies(def.dependencies);
        }

        if (def.subpacks && def.subpacks.length > 0) {
            this.setSubpacks(def.subpacks);
        }
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
 * Funcion principal de fabrica para la creacion de un Manifest BP vanilla a partir de una definicion fija.
 * @param {BPFinalDefinitionManifest} def Definicion base de los parametros de la plantilla fija del manifest.
 * @returns {string} Devuelve la plantilla base ya creada y adaptada para el JSON final.
 * @author HaJuegos - 06-10-2026
 * @export
 */
export function createBPManifest(def: BPFinalDefinitionManifest): string {
    return new FinalManifestBuilderTemplate(def).finalBuild();
}