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

interface SurfaceMaterialAdjustmentsData extends BPComponent {
    adjustments: AdjustmentsTypes[];
}

interface AdjustmentsTypes {
    materials: {
        seaMaterial?: string | MinecraftBlockTypes | BlockDataTypes;
        seaFloorMaterial?: string | MinecraftBlockTypes | BlockDataTypes;
        foundationMaterial?: string | MinecraftBlockTypes | BlockDataTypes;
        topMaterial?: string | MinecraftBlockTypes | BlockDataTypes;
        midMaterial?: string | MinecraftBlockTypes | BlockDataTypes;
    },
    heightRange?: (string | MoLangValue)[];
    noiseFrequencyScale?: number;
    noiseRange?: [number, number];
}

export class SetSurfaceMaterialAdjustments extends BehaviorBiomeComponentBulder<SurfaceMaterialAdjustmentsData, "minecraft:surface_material_adjustments"> {
    /**
     * 
     * @param {SurfaceMaterialAdjustmentsData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params: SurfaceMaterialAdjustmentsData) {
        super("minecraft:surface_material_adjustments", params);
    }
}