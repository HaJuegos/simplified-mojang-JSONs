import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

type BlockDataTypes = {
    name: string | MinecraftBlockTypes;
    states?: Record<string, string | boolean | number>;
    tags?: never;
} | {
    name?: never;
    states?: Record<string, string | boolean | number>;
    tags: string | MoLangValue;
};

interface SubsurfaceBuilderData extends BPComponent {
    builder: BuilderSubsurfaceTypes;
}

interface BuilderSubsurfaceTypes {
    type: "minecraft:noise_gradient";
    noiseDescriptor: {
        name: string;
        firstOctave: number;
        amplitudes: [number, number, number];
    },
    noiseBlockSpecifiers: NoiseBlocksTypes[],
    nonReplaceableBlocks?: (string | MinecraftBlockTypes | BlockDataTypes)[];
}

interface NoiseBlocksTypes {
    block?: string | MinecraftBlockTypes | BlockDataTypes;
    range?: {
        min: number;
        max: number;
    };
    noise?: "Noise";
    threshold?: number;
}

export class SetSubsurfaceBuilder extends BehaviorBiomeComponentBulder<SubsurfaceBuilderData, "minecraft:subsurface_builder"> {
    /**
     * 
     * @param {SubsurfaceBuilderData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: SubsurfaceBuilderData) {
        super("minecraft:subsurface_builder", params);
    }
}