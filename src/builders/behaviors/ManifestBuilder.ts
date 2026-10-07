import * as mc from "@minecraft/server";
import * as vanilla from "@minecraft/vanilla-data";

import { BPDependenciesParamsTypes, BPMetadataParamsTypes, BPModulesParamsTypes, BPCapabilitiesTypes, BPSubpacksParamsTypes } from "../../types/behaviors/ManifestTemplate";
import { UUIDManager } from "../../utils/UUID";
import { SnakeCase } from "../../utils/SnakeCase";

/**
 * Clase principal que define la arquitectura fija de un archivo Manifest de un BehaviorPacks.
 * @class BehaviorManifest
 * @author HaJuegos - 60-10-2026
 * @export
 */
export class BehaviorManifestBuilder {
    /**
     * Version fija del manifest.
     * @type {number}
     * @readonly
     * @private
     */
    private readonly manifestVersion: number = 2;

    /**
     * Nombre del add-on. Por defecto esta el texto de abajo.
     * @type {(string | mc.RawText)}
     * @private
     */
    private namePack: string | mc.RawText = "Nombre del Add-on";

    /**
     * Descripcion del add-on. Por defecto, esta el texto de abajo.
     * @type {(string | mc.RawText)}
     * @private
     */
    private descPack: string | mc.RawText = "Descripcion del Add-on";

    /**
     * Identificador unico del add-on, basado en UUIDv4 de 16 bits. Usa la clase {@link UUIDManager} para asignar un UUID random.
     * @type {(string | undefined)}
     * @private
     */
    private uuidPack: string | undefined;

    /**
     * Version del add-on. Por defecto es [1,0,0]. Tambien se pueden usar etiquetas versionales. Como: "1.0.0-beta".
     * @type {([number, number, number] | string)}
     * @private
     */
    private versionPack: [number, number, number] | string = [1, 0, 0];

    /**
     * Version del motor del juego que el add-on va a usar. Por defecto, siempre sera el mas reciente.
     * @type {([number, number, number] | string)}
     * @private
     */
    private enginePack: [number, number, number] | string = [1, 26, 50];

    /**
     * Metadatos del add-on. Como derechos de autor o generacion automatica.
     * @type {(BPMetadataParamsTypes | undefined)}
     * @private
     */
    private metadata: BPMetadataParamsTypes | undefined;

    /**
     * Modulos principales que requiere el add-on para funcionar.
     * @type {(BPModulesParamsTypes[] | undefined)}
     * @private
     */
    private modules: BPModulesParamsTypes[] | undefined;

    /**
     * Capacidades adiccionales que el add-on puede tomar para modificar el juego.
     * @type {(BPCapabilitiesTypes[] | undefined)}
     * @private
     */
    private capabilities: BPCapabilitiesTypes[] | undefined;

    /**
     * Dependencias del add-on con otros modulos o add-ons para funcionar.
     * @type {(BPDependenciesParamsTypes[] | undefined)}
     * @private
     */
    private dependencies: BPDependenciesParamsTypes[] | undefined;

    /**
     * Paquetes adiccionales dentro del add-on activables del mismo.
     * @type {(BPSubpacksParamsTypes[] | undefined)}
     * @private
     */
    private subpacks: BPSubpacksParamsTypes[] | undefined;

    protected constructor () { }

    /**
     * Metodo principal que establece el nombre del add-on. Por defecto hay un texto de ejemplo. Este mismo acepta valores traduccibles por idioma. 
     * @param {string | mc.RawText} name ID o nombre del add-on en concreto. 
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setNamePack(name: string | mc.RawText): this {
        this.namePack = name;

        return this;
    }

    /**
     * Metodo principal que establece la descripcion del add-on. Por defecto, hay un texto de ejemplo. Este mismo acepta valores traduccibles por idioma.
     * @param {string | mc.RawText} description ID o descripcion del add-on en concreto.
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setDescPack(description: string | mc.RawText): this {
        this.descPack = description;

        return this;
    }

    /**
     * Metodo auxiliar que establece un UUID v4 de 16 bits random al add-on, si se desea.
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setRandomUUIDPack(): this {
        this.uuidPack = UUIDManager.generateUUID();

        return this;
    }

    /**
     * Metodo principal que establece un UUID v4 de 16 bits fijo para el add-on en concreto. Esto es requerido para que el juego lo reconozca.
     * @param {string} uuid UUID en concreto a considerar.
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setUUIDPack(uuid: string): this {
        this.uuidPack = uuid;

        return this;
    }

    /**
     * Metodo principal que establece la version del add-on en concreto. Por defecto, siempre sera el valor [1,0,0]. Este mismo tambien admite el formato de versionamiento por tags. Osea "1.0.0-beta".
     * @param {(string | [number, number, number])} version Versionamiento en concreto del add-on.
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setVersionPack(version: string | [number, number, number]): this {
        this.versionPack = version;

        return this;
    }

    /**
     * Metodo principal que establece la version del motor del juego que el add-on usara. Por defecto siempre usara el mas reciente.
     * @param {[number, number, number]} version Versionamiento del motor en concreto.
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setSpecificMinEngine(version: [number, number, number]): this {
        this.enginePack = version;

        return this;
    }

    /**
     * Metodo principal que establece metadatos sobre la creacion del add-on, como los autores o creditos.
     * @param {BPMetadataParamsTypes} params Parametros de los metadatos en concreto.
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setMetadata(params: BPMetadataParamsTypes): this {
        this.metadata = params;

        return this;
    }

    /**
     * Metodo principal que establece los modulos que usara el add-on en concreto.
     * @param {BPModulesParamsTypes[]} params Lista de modulos a asignar al add-on.
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setModules(params: BPModulesParamsTypes[]): this {
        this.modules = params;

        return this;
    }

    /**
     * Metodo principal que asigna las capacidades adiccionales que tomara el add-on en concreto.
     * @param {BPCapabilitiesTypes[]} params Lista de capacidades adiccionales a considerar.
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setCapabilities(params: BPCapabilitiesTypes[]): this {
        this.capabilities = params;

        return this;
    }

    /**
     * Metodo principal que establece las dependencias que requiere el add-on en concreto.
     * @param {BPDependenciesParamsTypes[]} params Lista de dependencias en concreto.
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setDependencies(params: BPDependenciesParamsTypes[]): this {
        this.dependencies = params;

        return this;
    }

    /**
     * Metodo principal que establece los subpacks necesarios del add-on.
     * @param {BPSubpacksParamsTypes[]} params Lista de subpacks en concreto.
     * @returns {this} Devuelve la misma clase.
     * @author HaJuegos - 06-10-2026 
     * @protected
     */
    protected setSubpacks(params: BPSubpacksParamsTypes[]): this {
        this.subpacks = params;

        return this;
    }

    /**
     * Metodo principal que construye la estructura del manifest.json adaptado a la logica requerida para el juego recopilando todos los parametros definidos.
     * @param {boolean} [stringify] Por defecto esta en false, devolviendo un objecto readonly que no se puede modificar si se llama. Si es true, lo devuelve en formato txt o JSON ya listo para su exportacion. 
     * @returns {string | Record<string, unknown>} Devuelve el manifest listo en sus versiones respectivas.
     * 
     * @throws {Error} Puede marcar error si, no se establece un UUID fijo o random.
     * 
     * @author HaJuegos - 06-10-2026  
     * @protected
     */
    protected convertToJSON(stringify: true): string;
    protected convertToJSON(stringify?: false): Record<string, unknown>;
    protected convertToJSON(stringify?: boolean): string | Record<string, unknown> {
        if (!this.uuidPack) {
            throw new Error("[CATLOG] Error: El manifest requiere de un UUID para ser reconocido por MC. Asigna uno aleatorio o fijo.");
        }

        const preManifestObj: Record<string, unknown> = {
            format_version: this.manifestVersion
        };

        if (this.metadata) {
            preManifestObj.metadata = SnakeCase.shallowSnakeCase(this.metadata);
        }

        preManifestObj.header = {
            name: this.namePack,
            description: this.descPack,
            uuid: this.uuidPack,
            version: this.versionPack,
            min_engine_version: this.enginePack
        };

        if (this.modules && this.modules.length > 0) {
            preManifestObj.modules = this.modules.map(module => {
                const { randomUuid, ...moduleParams } = module;

                return SnakeCase.shallowSnakeCase(randomUuid ? { ...moduleParams, uuid: UUIDManager.generateUUID() } : moduleParams);
            });
        }

        if (this.dependencies && this.dependencies.length > 0) {
            preManifestObj.dependencies = this.dependencies.map(dep => {
                return SnakeCase.shallowSnakeCase(dep);
            });
        }

        if (this.capabilities && this.capabilities.length > 0) {
            preManifestObj.capabilities = this.capabilities;
        }

        if (this.subpacks && this.subpacks.length > 0) {
            preManifestObj.subpacks = this.subpacks.map(sub => {
                return SnakeCase.shallowSnakeCase(sub);
            });
        }

        const finalObj = Object.freeze(preManifestObj);

        const JSONtxt = JSON.stringify(finalObj, null, 4);

        return stringify ? JSONtxt : finalObj;
    };
}