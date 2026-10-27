import { EntityFilter } from "../../EntityFilters";
import { MoLangValue } from "../../MoLang";

export {
    VanillaFormatVersionList,
    ConditionsRulesParams,
    DistributionRulesParams,

    BPFeatureRuleDefinition,
    BPFeatureRuleOverride,
};

/**
 * Lista de versiones para el format version permitidas en un feature rule.
 * @author HaJuegos - 24-10-2026
 * @enum {string}
 */
enum VanillaFormatVersionList {
    MostRecent = "1.26.50",
    v1_21_60 = "1.21.60",
    v1_26_10 = "1.21.10",
    v1_16_100 = "1.16.100",
    v1_16_0 = "1.16.0",
    v1_13_0 = "1.13.0"
}

type PlacementPassTypes = "pregeneration_pass" | "first_pass" | "before_underground_pass" | "underground_pass" | "after_underground_pass" | "before_surface_pass" | "surface_pass" | "after_surface_pass" | "before_sky_pass" | "sky_pass" | "after_sky_pass" | "final_pass";

/**
 * Parametros principales para la creacion de un nuevo feature rule en la plantilla base.
 * @interface BPFeatureRuleDefinition
 * @author HaJuegos - 24-10-2026
 */
interface BPFeatureRuleDefinition {
    /**
     * (Opcional) Version en concreto a asignar del format version.
     * @type {?VanillaFormatVersionList}
     */
    formatVersion?: VanillaFormatVersionList;

    /**
     * ID del feature rule a crear.
     * @type {string}
     */
    idRule: string;

    /**
     * ID del feature a poner en concreto.
     * @type {string}
     */
    idFeatureToPlace: string;

    /**
     * Reglas a cumplir para que el feature rule se ejecute y coloque el feature en concreto.
     * @type {{conditions: ConditionsRulesParams; distribution: DistributionRulesParams;}}
     */
    rules: {
        /**
         * Condiciones esperables para ejecutar el feature rule.
         * @type {ConditionsRulesParams}
         */
        conditions: ConditionsRulesParams;

        /**
         * Formato de distribuccion para el feature rule.
         * @type {DistributionRulesParams}
         */
        distribution?: DistributionRulesParams;
    };
}

/**
 * Tipado auxiliar que obtiene los datos asignados de la plantilla base en el post-edicion para permitir sus modificaciones y mantener la estructura necesaria.
 * @template T Datos principales de la plantilla base.
 * @template Base Datos a obtener de los tipados.
 * @author HaJuegos - 24-10-2026
 */
type MatchBaseTypes<T, Base> = {
    [K in keyof T]: K extends keyof Base ? Base[K] : T[K]
};

/**
 * Tipado general para permitir las ediciones post-edicion de la plantilla base y sus datos definidos.
 * @template {BPFeatureRuleDefinition} Types Datos principales asignados en la plantilla base. 
 * @author HaJuegos - 24-10-2026
 */
type BPFeatureRuleOverride<
    Types extends BPFeatureRuleDefinition = BPFeatureRuleDefinition
> = {
    /**
     * Si se establece, se limpiara la plantilla base principal creado. Dejando el archivo vacio para la edicion.
     * @type {true}
     */
    clearAllData: true;

    /**
     * ID del feature a poner en concreto.
     * @type {string}
     */
    idFeatureToPlace: string;

    /**
     * (Opcional) Datos adiccionales a añadir a la plantilla base sin modificar lo demas. Asignados.
     * @type {?{
     *         readonly conditions?: ConditionsRulesParams;
     *         readonly distribution?: DistributionRulesParams;
     *     }}
     */
    add?: {
        /**
         * (Opcional) Condiciones esperables para ejecutar el feature rule.
         * @type {?ConditionsRulesParams}
         * @readonly
         */
        readonly conditions?: ConditionsRulesParams;

        /**
         * (Opcional) Formato de distribuccion para el feature rule.
         * @type {?DistributionRulesParams}
         * @readonly
         */
        readonly distribution?: DistributionRulesParams;
    };
} | {
    /**
     * (Opcional) Si se establece, se limpiara la plantilla base principal creado. Dejando el archivo vacio para la edicion.
     * @type {false | undefined}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Format version a editar en concreto de la plantilla base.
     * @type {?VanillaFormatVersionList}
     */
    changeFormatVersion?: VanillaFormatVersionList;

    /**
     * (Opcional) ID del feature a cambiar de la plantilla base.
     * @type {?string}
     */
    changeFeatureToPlace?: string;

    /**
     * (Opcional) Condiciones a cumplir del feature rule de la plantilla base a editar.
     * @type {?MatchBaseTypes<Types['rules']['conditions'], ConditionsRulesParams>}
     */
    changeConditions?: MatchBaseTypes<Types['rules']['conditions'], ConditionsRulesParams>;

    /**
     * (Opcional) Formato de distribucion del feature rule de la plantilla base a editar.
     * @type {?MatchBaseTypes<Types['rules']['distribution'], DistributionRulesParams>}
     */
    changeDistributions?: MatchBaseTypes<Types['rules']['distribution'], DistributionRulesParams>;

    /**
     * (Opcional) Datos adiccionales a añadir a la plantilla base sin modificar lo demas. Asignados.
     * @type {?{
     *         readonly conditions?: ConditionsRulesParams;
     *         readonly distribution?: DistributionRulesParams;
     *     }}
     */
    add?: {
        /**
         * (Opcional) Condiciones esperables para ejecutar el feature rule.
         * @type {?ConditionsRulesParams}
         * @readonly
         */
        readonly conditions?: ConditionsRulesParams;

        /**
         * (Opcional) Formato de distribuccion para el feature rule.
         * @type {?DistributionRulesParams}
         * @readonly
         */
        readonly distribution?: DistributionRulesParams;
    };
};


interface ConditionsRulesParams {
    placementPass: PlacementPassTypes;
    "minecraft:biome_filter"?: EntityFilter | EntityFilter[];
}


type ChanceDemoniatorTypes = number | [number, number] | {
    denominator: number;
    numerator: number;
};

type CoordinatesOrdersTypes = "xyz" | "xzy" | "yxz" | "yzx" | "zxy" | "zyx";

type DistributionTypes = "uniform" | "gaussian" | "inverse_gaussian" | "triangle" | "fixed_grid" | "jittered_grid";

type CoordinatesSpawnTypes = string | MoLangValue | number | {
    distribution: DistributionTypes;
    extent: [number | MoLangValue | string, number | MoLangValue | string];
    gridOffset?: number;
    stepSize?: number;
};

interface DistributionRulesParams {
    coordinateEvalOrder?: CoordinatesOrdersTypes;
    iterations?: string | MoLangValue | number;
    scatterChance?: string | MoLangValue | number | ChanceDemoniatorTypes;
    x?: CoordinatesSpawnTypes;
    y?: CoordinatesSpawnTypes;
    z?: CoordinatesSpawnTypes;
}