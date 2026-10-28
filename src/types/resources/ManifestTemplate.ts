import { BPFinalDefinitionManifest, BPHeaderParamsTypes, BPModuleBaseParamsTypes, BPModulesParamsTypes, BPModuleUUIDParamsTypes } from "../behaviors/ManifestTemplate";

export {
    RPManifestDefinition
};

/**
 * Lista de parametros por como funciona esta textura dentro del juego. Si esta es visible por fuera de un mundo o no.
 * @author HaJuegos - 28-10-2026
 */
type PackScopesList = "world" | "global" | "any";

/**
 * Estructura fija de un manifest final a generar.
 * @interface RPManifestDefinition
 * @extends {BPFinalDefinitionManifest<RPheaderParamsTypes>}
 * @author HaJuegos - 28-10-2026
 */
interface RPManifestDefinition extends BPFinalDefinitionManifest<
    RPHeaderParamsTypes,
    RPModulesParamsTypes[]
> { }

/**
 * Parametros comunes del header del add-on.
 * @interface RPheaderParamsTypes
 * @extends {BPHeaderBaseParamsTypes}
 * @author HaJuegos - 28-10-2026
 */
type RPHeaderParamsTypes = BPHeaderParamsTypes & {
    /**
     * (Opcional) Si se define, se asigna el comportamiento de esta textura aplicable dentro del juego. Es decir, si se pone en "world", solo funcionara la textura en un mundo. Por defecto es "any", osea, funciona en ambos casos.
     * @type {?PackScopesList}
     */
    packScope?: PackScopesList;
};

type RPModulesParamsTypes = BPModuleBaseParamsTypes & BPModuleUUIDParamsTypes & {
    type: "resources";
};