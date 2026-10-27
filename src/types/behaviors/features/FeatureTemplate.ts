import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { MoLangValue } from "../../MoLang";

export {
    BPFeatureDefinition,
    BPFeatureOverride,

    VanillaFormatVersionsFeature,
    FeatureListTypes,
    FeatureMapList,
};

/**
 * Lista de versiones vanilla disponibles para la creacion de un nuevo feature.
 * @enum {string}
 * @author HaJuegos - 22-10-2026
 */
enum VanillaFormatVersionsFeature {
    MostRecent = "1.26.50",
    v1_26_10 = "1.26.10",
    v1_21_60 = "1.21.60",
    v1_21_40 = "1.21.40",
    v1_16_100 = "1.16.100",
    v1_16_0 = "1.16.0",
    v1_13_0 = "1.13.0"
}

/**
 * Lista de features disponibles a crear en concreto. 
 * @enum {string}
 * @author HaJuegos - 22-10-2026
 */
enum FeatureListTypes {
    AggregateFeature = "minecraft:aggregate_feature",
    CaveCarverFeature = "minecraft:cave_carver_feature",
    ConditionalList = "minecraft:conditional_list",
    FossilFeature = "minecraft:fossil_feature",
    GeodeFeature = "minecraft:geode_feature",
    GrowingPlantFeature = "minecraft:growing_plant_feature",
    HeightDifferenceFilterFeature = "minecraft:height_difference_filter_feature",
    MultiBlockFeature = "minecraft:multi_block_feature",
    MultifaceFeature = "minecraft:multiface_feature",
    MultipartBlockColumnFeature = "minecraft:multipart_block_column_feature",
    NetherCaveCarverFeature = "minecraft:nether_cave_carver_feature",
    OreFeature = "minecraft:ore_feature",
    PartiallyExposedBlobFeature = "minecraft:partially_exposed_blob_feature",
    ScatterFeature = "minecraft:scatter_feature",
    SearchFeature = "minecraft:search_feature",
    SequenceFeature = "minecraft:sequence_feature",
    SingleBlockFeature = "minecraft:single_block_feature",
    SnapToSurfaceFeature = "minecraft:snap_to_surface_feature",
    StructureTemplateFeature = "minecraft:structure_template_feature",
    SurfaceRelativeThresholdFeature = "minecraft:surface_relative_threshold_feature",
    TreeFeature = "minecraft:tree_feature",
    UnderwaterCaveCarverFeature = "minecraft:underwater_cave_carver_feature",
    VegetationPatchFeature = "minecraft:vegetation_patch_feature",
    WeightedRandomFeature = "minecraft:weighted_random_feature",
    SculkPatchFeature = "minecraft:sculk_patch_feature",
    HorizontalTreeDecorationFeature = "minecraft:horizontal_tree_decoration_feature",
}

/**
 * Lista de mapeos disponibles para la creacion de un feature vanilla.
 * @author HaJuegos - 22-10-2026
 */
type FeatureMapList = {
    [FeatureListTypes.AggregateFeature]: {
        aggregate: AggregateFeatureParams;
    };
    [FeatureListTypes.CaveCarverFeature]: {
        caveCarver: CaveCarverFeatureParams;
    };
    [FeatureListTypes.ConditionalList]: {
        conditionalList: ConditionalListParams;
    };
    [FeatureListTypes.FossilFeature]: {
        fossil: FossilFeatureParams;
    };
    [FeatureListTypes.GeodeFeature]: {
        geode: GeodeFeatureParams;
    };
    [FeatureListTypes.GrowingPlantFeature]: {
        growingPlant: GrowingPlantFeatureParams;
    };
    [FeatureListTypes.HeightDifferenceFilterFeature]: {
        heightDifferenceFilter: HeightDifferenceFilterFeatureParams;
    };
    [FeatureListTypes.MultiBlockFeature]: {
        multiBlock: MultiBlockFeatureParams;
    };
    [FeatureListTypes.MultifaceFeature]: {
        multiface: MultifaceFeatureParams;
    };
    [FeatureListTypes.MultipartBlockColumnFeature]: {
        multipartBlockColumn: MultipartBlockColumnFeatureParams;
    };
    [FeatureListTypes.NetherCaveCarverFeature]: {
        netherCaveCarver: NetherCaveCarverFeatureParams;
    };
    [FeatureListTypes.OreFeature]: {
        ore: OreFeatureParams;
    };
    [FeatureListTypes.PartiallyExposedBlobFeature]: {
        partiallyExposedBlob: PartiallyExposedBlobFeatureParams;
    };
    [FeatureListTypes.ScatterFeature]: {
        scatter: ScatterFeatureParams;
    };
    [FeatureListTypes.SearchFeature]: {
        search: SearchFeatureParams;
    };
    [FeatureListTypes.SequenceFeature]: {
        sequence: SequenceFeatureParams;
    };
    [FeatureListTypes.SingleBlockFeature]: {
        singleBlock: SingleBlockFeatureParams;
    };
    [FeatureListTypes.SnapToSurfaceFeature]: {
        snapToSurface: SnapToSurfaceFeatureParams;
    };
    [FeatureListTypes.StructureTemplateFeature]: {
        structureTemplate: StructureTemplateFeatureParams;
    };
    [FeatureListTypes.SurfaceRelativeThresholdFeature]: {
        surfaceRelativeThreshold: SurfaceRelativeThresholdFeatureParams;
    };
    [FeatureListTypes.TreeFeature]: {
        tree: TreeFeatureParams;
    };
    [FeatureListTypes.UnderwaterCaveCarverFeature]: {
        underwaterCaveCarver: UnderwaterCaveCarverFeatureParams;
    };
    [FeatureListTypes.VegetationPatchFeature]: {
        vegetationPatch: VegetationPatchFeatureParams;
    };
    [FeatureListTypes.WeightedRandomFeature]: {
        weightedRandom: WeightedRandomFeatureParams;
    };

    [FeatureListTypes.SculkPatchFeature]: {
        sculkPatch: SculkPatchFeatureParams;
    };

    [FeatureListTypes.HorizontalTreeDecorationFeature]: {
        horizontalTreeDecoration: HorizontalTreeDecorationFeatureParams;
    };
};

/**
 * Tipado general para la creacion de una definicion base de un nuevo feature.
 * @template {FeatureListTypes} Types Lista de features vanillas admitidos.
 * @author HaJuegos - 22-10-2026
 */
type BPFeatureDefinition<
    Types extends FeatureListTypes = FeatureListTypes
> = {
    /**
     * (Opcional) Version del format version en cuestion a asignar.
     * @type {?VanillaFormatVersionsFeature}
     */
    formatVersion?: VanillaFormatVersionsFeature;

    /**
     * ID del feature a crear en concreto.
     * @type {string}
     */
    idFeature: string;

    /**
     * Tipo de feature a crear en concreto.
     * @type {Types}
     */
    typeFeature: Types;
} & FeatureMapList[Types];

/**
 * Tipado general para los parametros post-edicion de la plantilla base en concreto.
 * @template {FeatureListTypes} Types Lista de features a disposicion a crear.
 * @author HaJuegos - 22-10-2026
 */
type BPFeatureOverride<
    Types extends FeatureListTypes = FeatureListTypes
> = {
    /**
     * Si se define, se limpiara enteramente el archivo base creado en concreto.
     * @type {true}
     */
    clearAllData: true;

    /**
     * (Opcional) Lista de datos y parametros a adiccionar a la plantilla base.
     * @type {?{feature?: Partial<FeatureMapList[Types][keyof FeatureMapList[Types]]>;}}
     */
    add?: {
        feature?: Partial<FeatureMapList[Types][keyof FeatureMapList[Types]]>;
    };
} | {
    /**
     * (Opcional) Si se define, se limpiara enteramente el archivo base creado en concreto.
     * @type {?(false | undefined)}
     */
    clearAllData?: false | undefined;

    /**
     * (Opcional) Formato de version a asignar a la plantilla base a cambiar.
     * @type {?VanillaFormatVersionsFeature}
     */
    changeFormatVersion?: VanillaFormatVersionsFeature;

    /**
     * (Opcional) Lista de parametros a editar del feature base en concreto creado.
     * @type {?Partial<FeatureMapList[Types][keyof FeatureMapList[Types]]>}
     */
    changeFeature?: Partial<FeatureMapList[Types][keyof FeatureMapList[Types]]>;

    /**
     * (Opcional) Lista de datos y parametros a adiccionar a la plantilla base.
     * @type {?{feature?: Partial<FeatureMapList[Types][keyof FeatureMapList[Types]]>;}}
     */
    add?: {
        feature?: Partial<FeatureMapList[Types][keyof FeatureMapList[Types]]>;
    };
};


// Lista de tipos de feature y sus parametros.

type EarlyOutTypes = "none" | "first_failure" | "first_success";

interface AggregateFeatureParams {
    earlyOut?: EarlyOutTypes,
    features: string[];
}


type IntRangeGeneric = number | [number, number] | {
    rangeMin?: number;
    rangeMax?: number;
};

type BlockDataTypes = {
    name: string | MinecraftBlockTypes;
    states?: Record<string, string | boolean | number>;
    tags?: never;
} | {
    name?: never;
    states?: Record<string, string | boolean | number>;
    tags: string | MoLangValue;
};

interface CaveCarverFeatureParams {
    fillWith: (string | MinecraftBlockTypes | BlockDataTypes);
    floorLevel: IntRangeGeneric;
    heightLimit: number;
    horizontalRadiusMultiplier: IntRangeGeneric;
    skipCarveChance: number;
    verticalRadiusMultiplier: IntRangeGeneric;
    widthModifier: (string | MoLangValue);
    yScale: IntRangeGeneric;
}


type EarlyOutSchemeTypes = "condition_success" | "placement_success" | "none";

interface ConditionalListParams {
    earlyOutScheme: EarlyOutSchemeTypes;
    conditionalFeatures: string[];
}


interface FossilFeatureParams {
    maxEmptyCorners: number;
    oreBlock: (string | MinecraftBlockTypes | BlockDataTypes);
}


interface GeodeFeatureParams {
    alternateInnerLayer: (string | MinecraftBlockTypes | BlockDataTypes);
    baseCrackSize: number;
    crackPointOffset: number;
    filler: (string | MinecraftBlockTypes | BlockDataTypes);
    generateCrackChance: number;
    innerLayer: (string | MinecraftBlockTypes | BlockDataTypes);
    innerPlacements: (string | MinecraftBlockTypes | BlockDataTypes)[];
    invalidBlocksThreshold: number;
    maxDistributionPoints: number;
    maxOuterWallDistance: number;
    maxPointOffset: number;
    maxRadius: number;
    middleLayer: (string | MinecraftBlockTypes | BlockDataTypes);
    minDistributionPoints: number;
    minOuterWallDistance: number;
    minPointOffset: number;
    noiseMultiplier: number;
    outerLayer: (string | MinecraftBlockTypes | BlockDataTypes);
    placementsRequireLayer0Alternate: boolean;
    useAlternateLayer0Chance: number;
    usePotentialPlacementsChance: number;
}


type BlocksInBlocksTypes = [
    (string | MinecraftBlockTypes | BlockDataTypes | number),
    (string | MinecraftBlockTypes | BlockDataTypes | number)
];

type IntGenericInIntTypes = [IntRangeGeneric, IntRangeGeneric];

type GrowthDirectionsTypes = "UP" | "DOWN" | "up" | "down";

interface GrowingPlantFeatureParams {
    age?: IntRangeGeneric;
    allowWater?: boolean;
    bodyBlocks: BlocksInBlocksTypes[];
    growthDirection: GrowthDirectionsTypes,
    headBlocks: BlocksInBlocksTypes[];
    heightDistribution: IntGenericInIntTypes[];
}


interface HeightDifferenceFilterFeatureParams {
    maxAllowedDownwardHeightDiff: number;
    maxAllowedUpwardHeightDiff: number;
    minRequiredDownwardHeightDiff: number;
    minRequiredUpwardHeightDiff: number;
    placesFeature: string;
    searchRadius: number;
}


interface MultiBlockFeatureParams {
    enforcePlacementRules: boolean;
    mayReplace: (string | MinecraftBlockTypes | BlockDataTypes)[];
    placesBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    randomizeRotation: boolean;
}


interface MultifaceFeatureParams {
    canPlaceOn: (string | MinecraftBlockTypes | BlockDataTypes)[],
    canPlaceOnCeiling: boolean;
    canPlaceOnFloor: boolean;
    canPlaceOnWall: boolean;
    chanceOfSpreading: number;
    placesBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    searchRange: number;
}


interface MultipartBlockColumnFeatureParams {
    baseBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    direction: IntRangeGeneric;
    frustumBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    heightRange: [1, 1];
    mayPlaceOn: (string | MinecraftBlockTypes | BlockDataTypes)[];
    mayReplace: (string | MinecraftBlockTypes | BlockDataTypes)[];
    middleBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    tipBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    weightedHeights: IntGenericInIntTypes[];
}


interface NetherCaveCarverFeatureParams {
    fillWith: (string | MinecraftBlockTypes | BlockDataTypes);
    floorLevel: IntRangeGeneric;
    heightLimit: number;
    horizontalRadiusMultiplier: IntRangeGeneric;
    skipCarveChance: number;
    verticalRadiusMultiplier: IntRangeGeneric;
    widthModifier: string | MoLangValue;
    yScale: IntRangeGeneric;
}


interface OreFeatureParams {
    count: number;
    discardChanceOnAirExposure?: number;
    replaceRules: ReplaceRulesParams[];
}

interface ReplaceRulesParams {
    mayReplace: (string | MinecraftBlockTypes | BlockDataTypes)[];
    placesBlock: (string | MinecraftBlockTypes | BlockDataTypes);
}


type FacesExposedTypes = "up" | "down" | "side" | "north" | "east" | "west" | "south";

interface PartiallyExposedBlobFeatureParams {
    exposedFace: FacesExposedTypes;
    placementProbabilityPerValidPosition: number;
    placementRadiusAroundFloor: number;
    placesBlock: (string | MinecraftBlockTypes | BlockDataTypes);
}

type CoordinatesOrdersTypes = "xyz" | "xzy" | "yxz" | "yzx" | "zxy" | "zyx";

type DistributionTypes = "uniform" | "gaussian" | "inverse_gaussian" | "triangle" | "fixed_grid" | "jittered_grid";

type CoordinatesSpawnTypes = string | MoLangValue | number | {
    distribution: DistributionTypes;
    extent: [number | MoLangValue | string, number | MoLangValue | string];
    gridOffset?: number;
    stepSize?: number;
};

interface ScatterFeatureParams {
    iterations?: number | (string | MoLangValue);
    scatterChance?: string | MoLangValue | number | ChanceDemoniatorTypes;
    x?: CoordinatesSpawnTypes;
    y?: CoordinatesSpawnTypes;
    z?: CoordinatesSpawnTypes;
    projectInputToFloor?: boolean;
    coordinateEvalOrder?: CoordinatesOrdersTypes;
    placesFeature: string;
    distribution?: DistributionParams;
}

type ChanceDemoniatorTypes = number | [number, number] | {
    denominator: number;
    numerator: number;
};

interface DistributionParams {
    coordinateEvalOrder?: CoordinatesOrdersTypes;
    iterations: string | MoLangValue | number;
    scatterChance?: string | MoLangValue | number | ChanceDemoniatorTypes;
    x: CoordinatesSpawnTypes;
    y: CoordinatesSpawnTypes;
    z: CoordinatesSpawnTypes;
}


type SearchAxisTypes = "-x" | "+x" | "-y" | "+y" | "-z" | "+z";

interface SearchFeatureParams {
    placesFeature: string;
    requiredSuccesses: number;
    searchAxis: SearchAxisTypes;
    searchVolume: SearchVolumeTypes;
}

interface SearchVolumeTypes {
    min: [number, number, number];
    max: [number, number, number];
}


interface SequenceFeatureParams {
    features: string[];
}

type PlacesBlockTypes = {
    block: (string | MinecraftBlockTypes | BlockDataTypes);
    weight: number;
};

interface SingleBlockFeatureParams {
    enforcePlacementRules?: boolean;
    enforceSurvivabilityRules?: boolean;
    mayAttachTo?: MoreAttachSidesParams;
    mayNotAttachTo?: AttachSidesParams;
    mayReplace?: (string | MinecraftBlockTypes | BlockDataTypes)[];
    placesBlock?: (string | MinecraftBlockTypes | BlockDataTypes | PlacesBlockTypes) | (string | MinecraftBlockTypes | BlockDataTypes | PlacesBlockTypes)[];
    randomizeRotation?: boolean;
}

interface MoreAttachSidesParams extends AttachSidesParams {
    minSidesMustAttach?: number;
    autoRotate?: boolean;
}

interface AttachSidesParams {
    top?: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[];
    bottom?: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[];
    north?: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[];
    south?: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[];
    east?: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[];
    west?: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[];
    all?: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[];
    sides?: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[];
    diagonal?: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[];
}


type SurfaceTypes = "ceiling" | "floor" | "wall" | "random_horizontal";

interface SnapToSurfaceFeatureParams {
    allowAirPlacement?: boolean;
    allowNonAirPlacement?: boolean;
    allowUnderwaterPlacement?: boolean;
    allowedSurfaceBlocks?: (string | MinecraftBlockTypes | BlockDataTypes)[];
    embedInSurface?: boolean;
    featureToSnap: string;
    searchRange?: number;
    surface: SurfaceTypes;
    verticalSearchRange: number;
}


type FacingDirectionsTypes = "north" | "south" | "east" | "west" | "random";

interface StructureTemplateFeatureParams {
    constraints: ConstraintsParams;
    structureName: string;
    adjustmentRadius: number;
    facingDirection?: FacingDirectionsTypes;
    groundLevel: number;
    rotateAroundCenter: boolean;
}

interface ConstraintsParams {
    grounded?: {};
    leveled: {};
    unburied: {};
    maxSteepness?: number;
    blockIntersection: BlockIntersParams;
}

interface BlockIntersParams {
    blockAllowlist: (string | MinecraftBlockTypes | BlockDataTypes)[];
    blockWhitelist?: (string | MinecraftBlockTypes | BlockDataTypes)[];
    onlyCheckIntersectionForMotionBlockingBlocks: boolean;
}


interface SurfaceRelativeThresholdFeatureParams {
    featureToPlace: string;
    minimumDistanceBelowSurface: number;
}


type StepDirectionsTypes = "down" | "up" | "out" | "away";


interface DecorationBlocksSequencesParams {
    block: (string | MinecraftBlockTypes | BlockDataTypes);
    count: number;
}

type WeightValue = { value: number; weight: number; };

interface TreeFeatureParams {
    trunk?: {
        canBeSubmerged?: boolean | {
            maxDepth: number;
        };
        heightModifier?: IntRangeGeneric;
        trunkBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        trunkDecoration?: {
            decorationBlock: (string | MinecraftBlockTypes | BlockDataTypes);
            decorationBlocksSequence?: DecorationBlocksSequencesParams[];
            decorationChance: ChanceDemoniatorTypes;
            numSteps?: number;
            stepDirection?: StepDirectionsTypes;
        };
        trunkHeight: IntRangeGeneric;
    };

    canopy?: {
        canopyDecoration?: {
            decorationBlock: (string | MinecraftBlockTypes | BlockDataTypes);
            decorationChance: ChanceDemoniatorTypes;
            numSteps: IntRangeGeneric;
            stepDirection: StepDirectionsTypes;
        };
        canopyOffset: {
            min: number;
            max: number;
        };
        canopySlope?: {
            rise: number;
            run: number;
        };
        leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        minWidth?: number;
        variationChance: ChanceDemoniatorTypes | ChanceDemoniatorTypes[];
    };

    fallenTrunk?: {
        heightModifier?: IntRangeGeneric;
        logDecorationFeature?: string;
        logLength: IntRangeGeneric;
        stumpHeight?: IntRangeGeneric;
        trunkBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        trunkDecoration?: {
            decorationBlock: (string | MinecraftBlockTypes | BlockDataTypes);
            decorationBlocksSequence?: DecorationBlocksSequencesParams[];
            decorationChance: ChanceDemoniatorTypes;
            numSteps?: number;
            stepDirection?: StepDirectionsTypes;
        };
    };

    megaTrunk?: {
        branches?: {
            branchAltitudeFactor: {
                min: number;
                max: number;
            },
            branchCanopy: {
                megaCanopy: {
                    baseRadius: number;
                    canopyHeight: IntRangeGeneric;
                    coreWidth?: number;
                    leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
                    simplifyCanopy: boolean;
                };
            },
            branchInterval: IntRangeGeneric;
            branchLength: number;
            branchSlope: number;
        };
        trunkBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        trunkDecoration?: {
            decorationBlock: (string | MinecraftBlockTypes | BlockDataTypes);
            decorationBlocksSequence?: DecorationBlocksSequencesParams[];
            decorationChance: ChanceDemoniatorTypes;
            numSteps?: number;
            stepDirection?: StepDirectionsTypes;
        };
        trunkHeight: {
            base: number;
            intervals: [number, number];
            minHeightForCanopy?: number;
        };
        trunkWidth: number;
    };

    megaCanopy?: {
        baseRadius: number;
        canopyHeight: IntRangeGeneric;
        coreWidth: number;
        leafBlock?: (string | MinecraftBlockTypes | BlockDataTypes);
        simplifyCanopy?: boolean;
    };

    megaPineCanopy?: {
        baseRadius: number;
        canopyHeight: IntRangeGeneric;
        coreWidth: number;
        leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        radiusStepModifier: number;
    };

    pineCanopy?: {
        baseRadius: number;
        canopyHeight: IntRangeGeneric;
        leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    };

    acaciaTrunk?: {
        branches?: {
            branchCanopy: {
                acaciaCanopy: {
                    canopySize: number;
                    leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
                    simplifyCanopy: boolean;
                };
            },
            branchChance: ChanceDemoniatorTypes;
            branchLength: IntRangeGeneric;
            branchPosition: IntRangeGeneric;
        };
        trunkBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        trunkDecoration?: {
            decorationBlock: (string | MinecraftBlockTypes | BlockDataTypes);
            decorationBlocksSequence?: DecorationBlocksSequencesParams[];
            decorationChance: ChanceDemoniatorTypes;
            numSteps?: number;
            stepDirection?: StepDirectionsTypes;
        },
        trunkHeight: {
            base: number;
            intervals: [number, number];
            minHeightForCanopy?: number;
        },
        trunkLean: {
            allowDiagonalGrowth: Boolean;
            leanHeight: IntRangeGeneric;
            leanLength?: IntRangeGeneric;
            leanSteps: IntRangeGeneric;
        },
        trunkWidth: number;
    };

    roofedCanopy?: {
        canopyHeight: number;
        coreWidth: number;
        innerRadius: number;
        leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        outerRadius: number;
    };

    acaciaCanopy?: {
        canopySize: number;
        leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        simplifyCanopy?: boolean;
    };

    spruceCanopy?: {
        leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        lowerOffset: IntRangeGeneric;
        maxRadius: IntRangeGeneric;
        upperOffset: IntRangeGeneric;
    };

    baseBlock: (string | MinecraftBlockTypes | BlockDataTypes) | (string | MinecraftBlockTypes | BlockDataTypes)[];

    baseCluster?: {
        mayReplace: (string | MinecraftBlockTypes | BlockDataTypes)[];
        numClusters: number;
        clusterRadius: number;
    };

    mayReplace: (string | MinecraftBlockTypes | BlockDataTypes)[];
    mayGrowOn: (string | MinecraftBlockTypes | BlockDataTypes)[];
    mayGrowThrough?: (string | MinecraftBlockTypes | BlockDataTypes)[];

    fancyTrunk?: {
        trunkBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        trunkHeight: {
            base: number;
            variance: number;
            scale: number;
        };
        trunkWidth: number;
        widthScale: number;
        foliageAltitudeFactor: number;
        branches: {
            slope: number;
            density: number;
            minAltitudeFactor: number;
        };
    };

    fancyCanopy?: {
        height: number;
        radius: number;
        leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    };

    randomSpreadCanopy?: {
        canopyHeight: number;
        canopyRadius: number;
        leafPlacementAttempts: number;
        leafBlocks: [(string | MinecraftBlockTypes | BlockDataTypes), number][];
    };

    cherryTrunk?: {
        trunkBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        trunkHeight: {
            base: number;
            intervals: [number, number];
        };
        branches: {
            treeTypeWeights: {
                oneBranch: number;
                twoBranches: number;
                twoBranchesAndTrunk: number;
            };
            branchHorizontalLength: {
                rangeMin: number;
                rangeMax: number;
            };
            branchStartOffsetFromTop: {
                rangeMin: number;
                rangeMax: number;
            };
            branchEndOffsetFromTop: {
                rangeMin: number;
                rangeMax: number;
            };
            branchCanopy: {
                cherryCanopy: {
                    leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
                    height: number;
                    radius: number;
                    wideBottomLayerHoleChance: number;
                    cornerHoleChance: number;
                    hangingLeavesChance: number;
                    hangingLeavesExtensionChance: number;
                };
            };
        };
    };

    cherryCanopy?: {
        leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        height: number;
        radius: number;
        wideBottomLayerHoleChance: number;
        cornerHoleChance: number;
        hangingLeavesChance: number;
        hangingLeavesExtensionChance: number;
    };

    mangroveRoots?: {
        maxRootWidth: number;
        maxRootLength: number;
        yOffset: {
            rangeMin: number;
            rangeMax: number;
        },
        rootBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        muddyRootBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        mudBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        aboveRoot: {
            aboveRootBlock: (string | MinecraftBlockTypes | BlockDataTypes);
            aboveRootChance: ChanceDemoniatorTypes;
        },
        rootsMayGrowThrough: (string | MinecraftBlockTypes | BlockDataTypes)[];
    };

    mangroveTrunk?: {
        trunkWidth: number;
        trunkHeight: {
            base: number;
            heightRandA: number;
            heightRandB: number;
        };
        trunkBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        branches: {
            branchChance: number;
            branchLength: {
                rangeMin: number;
                rangeMax: number;
            };
            branchSteps: {
                rangeMin: number;
                rangeMax: number;
            };
        };
    };

    mangroveCanopy?: {
        canopyHeight: number;
        canopyRadius: number;
        leafPlacementAttempts: number;
        leafBlocks: [(string | MinecraftBlockTypes | BlockDataTypes), number][];
        canopyDecoration: {
            decorationBlock: (string | MinecraftBlockTypes | BlockDataTypes);
            decorationChance: ChanceDemoniatorTypes;
            numSteps: number;
            stepDirection: StepDirectionsTypes;
        };
        hangingBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        hangingBlockPlacementChance: ChanceDemoniatorTypes;
    };

    poplarTrunk?: {
        trunkHeight: {
            rangeMin: number;
            rangeMax: number;
        };
        trunkBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        remainingTrunkHeightAboveBranches: {
            rangeMin: number;
            rangeMax: number;
        };
        amountOfFoliageSupportBranches: {
            rangeMin: number;
            rangeMax: number;
        };
        logDecorationFeature: string;
    };

    poplarCanopy?: {
        radius: WeightValue[];
        height: {
            rangeMin: number;
            rangeMax: number;
        };
        sideHoleChance: number;
        leafBlock: (string | MinecraftBlockTypes | BlockDataTypes);
        branchBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    };
}


interface UnderwaterCaveCarverFeatureParams {
    fillWith: (string | MinecraftBlockTypes | BlockDataTypes);
    floorLevel: IntRangeGeneric;
    heightLimit: number;
    horizontalRadiusMultiplier: IntRangeGeneric;
    replaceAirWith: (string | MinecraftBlockTypes | BlockDataTypes);
    skipCarveChance: number;
    verticalRadiusMultiplier: IntRangeGeneric;
    widthModifier: string | MoLangValue;
    yScale: IntRangeGeneric;
}


interface VegetationPatchFeatureParams {
    depth: IntRangeGeneric;
    extraDeepBlockChance?: number;
    extraEdgeColumnChance: number;
    groundBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    horizontalRadius: IntRangeGeneric;
    replaceableBlocks: (string | MinecraftBlockTypes | BlockDataTypes)[];
    surface: "floor" | "ceiling";
    vegetationChance: number;
    vegetationFeature: string;
    verticalRange: number;
    waterlogged?: boolean;
}


type ListOfFeaturesTypes = [string, number];

interface WeightedRandomFeatureParams {
    features: (ListOfFeaturesTypes | string)[];
}

interface SculkPatchFeatureParams {
    canPlaceSculkPatchOn: (string | MinecraftBlockTypes | BlockDataTypes)[];
    centralBlock: (string | MinecraftBlockTypes | BlockDataTypes);
    centralBlockPlacementChance: number;
    cursorCount: number;
    chargeAmount: number;
    spreadAttempts: number;
    growthRounds: number;
    spreadRounds: number;
    extraGrowthChance?: {
        rangeMin: number;
        rangeMax: number;
    };
}

interface HorizontalTreeDecorationFeatureParams {
    placesBlock: string;
    barkSideOnly: boolean;
    allowAdjacent: boolean;
}