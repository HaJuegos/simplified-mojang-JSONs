import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

interface SurfaceBuilderData extends BPComponent {
    builder: SurfaceBuilderTypes;
}

export class SetSurfaceBuilder extends BehaviorBiomeComponentBulder<SurfaceBuilderData, "minecraft:surface_builder"> {
    /**
     * 
     * @param {SurfaceBuilderData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: SurfaceBuilderData) {
        super("minecraft:surface_builder", params);
    }
}

type BlockDataTypes = {
    name: string | MinecraftBlockTypes;
    states?: Record<string, string | boolean | number>;
    tags?: never;
} | {
    name?: never;
    states?: Record<string, string | boolean | number>;
    tags: string | MoLangValue;
};

interface BaseParamsBuilder {
    topMaterial: string | MinecraftBlockTypes | BlockDataTypes;
    midMaterial: string | MinecraftBlockTypes | BlockDataTypes;
    seaFloorMaterial: string | MinecraftBlockTypes | BlockDataTypes;
    foundationMaterial: string | MinecraftBlockTypes | BlockDataTypes;
    seaMaterial: string | MinecraftBlockTypes | BlockDataTypes;
    seaFloorDepth: number;
}

interface OverworldBuilder extends BaseParamsBuilder {
    type: "minecraft:overworld";
};

interface FrozenOceanBuilder extends BaseParamsBuilder {
    type: "minecraft:frozen_ocean";
};

interface MesaBuilder extends BaseParamsBuilder {
    type: "minecraft:mesa";
    brycePillars: boolean;
    clayMaterial: string | MinecraftBlockTypes | BlockDataTypes;
    hardClayMaterial: string | MinecraftBlockTypes | BlockDataTypes;
    hasForest: boolean;
};

interface SwampBuilder extends BaseParamsBuilder {
    type: "minecraft:swamp";
    maxPuddleDepthBelowSeaLevel: number;
};

interface CappedBuilder {
    type: "minecraft:capped";
    ceilingMaterials?: (string | MinecraftBlockTypes | BlockDataTypes)[];
    floorMaterials?: (string | MinecraftBlockTypes | BlockDataTypes)[];
    foundationMaterial?: string | MinecraftBlockTypes | BlockDataTypes;
    seaMaterial?: string | MinecraftBlockTypes | BlockDataTypes;
    beachMaterial?: string | MinecraftBlockTypes | BlockDataTypes;
};

interface TheEndBuilder {
    type: "minecraft:the_end";
};

interface NoiseGradientBuilder {
    type: "minecraft:noise_gradient";
    noiseDescriptor: {
        name: string;
        firstOctave: number;
        amplitudes: [number, number, number];
    };
    noiseBlockSpecifiers: NoiseBlocksSpecifiersTypes[];
    nonReplaceableBlocks?: (string | MinecraftBlockTypes | BlockDataTypes)[];
};

interface NoiseBlocksSpecifiersTypes {
    block: string | MinecraftBlockTypes | BlockDataTypes;
    range: {
        min: number;
        max: number;
    };
}

type SurfaceBuilderTypes = OverworldBuilder | FrozenOceanBuilder | MesaBuilder | SwampBuilder | CappedBuilder | TheEndBuilder | NoiseGradientBuilder;