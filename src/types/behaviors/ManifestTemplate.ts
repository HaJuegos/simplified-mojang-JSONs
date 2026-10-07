import { RawText } from "@minecraft/server";

export {
    BPMetadataParamsTypes,
    BPModulesParamsTypes,
    BPCapabilitiesTypes,
    BPDependenciesParamsTypes,
    BPSubpacksParamsTypes,
    BPFinalDefinitionManifest,
};

/**
 * Lista de capacidades adiccionales disponibles a usar en el add-on
 * @author HaJuegos - 06-10-2026
 */
type BPCapabilitiesTypes = "chemistry" | "editorExtension" | "experimental_custom_ui" | "pbr" | "raytraced" | "script_eval";

/**
 * Lista de dependencias scripts vanillas disponibles a usar para el juego.
 * @author HaJuegos - 06-10-2026
 */
type DependenciesAPIVanillaTypes = "@minecraft/server" | "@minecraft/server-admin" | "@minecraft/server-editor" | "@minecraft/server-gametest" | "@minecraft/server-graphics" | "@minecraft/server-net" | "@minecraft/server-ui";

/**
 * Estructura fija de un manifest final a generar.
 * @interface BPFinalDefinitionManifest
 * @author HaJuegos - 06-10-2026
 */
interface BPFinalDefinitionManifest {
    /**
     * (Opcional) Lista de parametros para definir metadatos del add-on, como creditos.
     * @type {?BPMetadataParamsTypes}
     */
    metadata?: BPMetadataParamsTypes;

    /**
     * Lista de parametros principales del add-on a definir.
     * @type {BPHeaderParamsTypes}
     */
    header: BPHeaderParamsTypes;

    /**
     * Lista de modulos a usar en el add-on.
     * @type {BPModulesParamsTypes[]}
     */
    modules: BPModulesParamsTypes[];

    /**
     * (Opcional) Lista de capacidades adiccionales del add-on.
     * @type {?BPCapabilitiesTypes[]}
     */
    capabilities?: BPCapabilitiesTypes[];

    /**
     * (Opcional) Lista de dependencias adiccionales que requiere el add-on.
     * @type {?BPDependenciesParamsTypes[]}
     */
    dependencies?: BPDependenciesParamsTypes[];

    /**
     * (Opcional) Lista de subpacks adiccionales que tiene el add-on.
     * @type {?BPSubpacksParamsTypes[]}
     */
    subpacks?: BPSubpacksParamsTypes[];
}

/**
 * Parametros comunes del header del add-on.
 * @interface BPHeaderBaseParamsTypes
 * @author HaJuegos - 06-10-2026
 */
interface BPHeaderBaseParamsTypes {
    /**
     * Parametro que establece el nombre del add-on. Por defecto hay un texto de ejemplo. Este mismo acepta valores traduccibles por idioma. 
     * @type {(string | RawText)}
     */
    name: string | RawText;

    /**
     * Parametro que establece la descripcion del add-on. Por defecto, hay un texto de ejemplo. Este mismo acepta valores traduccibles por idioma.
     * @type {(string | RawText)}
     */
    description: string | RawText;

    /**
     * Parametro que establece la version del add-on en concreto. Por defecto, siempre sera el valor [1,0,0]. Este mismo tambien admite el formato de versionamiento por tags. Osea "1.0.0-beta".
     * @type {([number, number, number] | string)}
     */
    version: [number, number, number] | string;

    /**
     * Parametro que establece la version del motor del juego que el add-on usara. Por defecto siempre usara el mas reciente.
     * @type {?([number, number, number] | string)}
     */
    setMinEngine?: [number, number, number];
}

/**
 * Tipado que prohible dos definiciones a la vez en un header cuando se trata de definir un UUID.
 * @author HaJuegos - 06-10-2026
 */
type BPHeaderParamsTypes = BPHeaderBaseParamsTypes & (| { setRandomUUID: true; uuid?: never; } | { setRandomUUID?: false; uuid: string; }
);

/**
 * Lista de parametros para definir metadatos del add-on.
 * @interface BPMetadataParamsTypes
 * @author HaJuegos - 06-10-2026
 */
interface BPMetadataParamsTypes {
    /**
     * (Opcional) Lista de autores involucrados en el add-on.
     * @type {?string[]}
     */
    authors?: string[];

    /**
     * (Opcional) Lista de valores de los generadores que hicieron el add-on. Los valores en el string son versiones con tags. Osea "1.0.0-beta"
     * @type {?{[key: string]: string[];}}
     */
    generatedWith?: {
        [key: string]: string[];
    };

    /**
     * (Opcional) Ubicacion o link de la licencia a considerar del add-on
     * @type {?string}
     */
    license?: string;

    /**
     * (Opcional) Tipo de producto en concreto.
     * @type {?("addon" | "")}
     */
    productType?: "addon" | "";

    /**
     * (Opcional) URL del link del add-on a considerar para creditos.
     * @type {?string}
     */
    url?: string;
}

/**
 * Parametros comunes de un modulo del add-on.
 * @interface BPModuleBaseParamsTypes
 * @author HaJuegos - 06-10-2026
 */
interface BPModuleBaseParamsTypes {
    /**
     * (Opcional) Descripcion del modulo a asignar. Este acepta valores traduccibles por idioma.
     * @type {?(string | RawText)}
     */
    description?: string | RawText;

    /**
     * Versionario del modulo a considerar. Puede aceptar veriones por tags. Osea "1.0.0-beta".
     * @type {([number, number, number] | string)}
     */
    version: [number, number, number] | string;
}

/**
 * Tipado general que bloquea la asignacion de dos parametros simultaneos en un modulo.
 * @author HaJuegos - 06-10-2026
 */
type BPModuleUUIDParamsTypes = | { uuid: string; randomUuid?: false; } | { uuid?: never; randomUuid: true; };

/**
 * Tipo de modulo discriminado por type y con seleccion exclusiva entre UUID fijo o aleatorio.
 * @author HaJuegos - 06-10-2026
 */
type BPModulesParamsTypes =
    | (BPModuleBaseParamsTypes & BPModuleUUIDParamsTypes & {
        type: "data";
        entry?: never;
        language?: never;
    })
    | (BPModuleBaseParamsTypes & BPModuleUUIDParamsTypes & {
        type: "script";
        entry: string;
        language: "javascript";
    });

/**
 * Version comun de una dependencia del add-on.
 * @interface BPDependencyBaseParamsTypes
 * @author HaJuegos - 06-10-2026
 */
interface BPDependencyBaseParamsTypes {
    /**
     * Versionario de la dependencia a integrar. Puede aceptar versiones con tags. Osea "1.0.0-beta".
     * @type {(string | [number, number, number])}
     */
    version: string | [number, number, number] | "beta";
}

/**
 * Tipado general que prohible el uso de varios parametros al momento de definir una dependencia.
 * @author HaJuegos - 06-10-2026
 */
type BPDependenciesParamsTypes = BPDependencyBaseParamsTypes & (| { moduleName: DependenciesAPIVanillaTypes; uuid?: never; } | { moduleName?: never; uuid: string; });

/**
 * Lista de parametros para asignar un subpaquete activable en el add-on
 * @interface BPSubpacksParamsTypes
 * @author HaJuegos - 06-10-2026
 */
interface BPSubpacksParamsTypes {
    /**
     * Nombre de la carpeta a considerar para el subpack.
     * @type {string}
     */
    folderName: string;

    /**
     * Tier de memoria ram necesaria para activar este subpack en concreto.
     * @type {number}
     */
    memoryTier: number;

    /**
     * Nombre visible in-game de este subpack en concreto.
     * @type {string}
     */
    name: string;
}