import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorBiomeComponentBulder } from "../../../builders/behaviors/biomes/BiomeCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { MoLangValue } from "../../../types/MoLang";

interface MountainParametersData extends BPComponent {
    steepMaterialAdjustment?: {
        material: string | MinecraftBlockTypes | BlockDataTypes;
        eastSlopes: boolean;
        northSlopes: boolean;
        southSlopes: boolean;
        westSlopes: boolean;
    };
    topSlide?: {
        enabled: boolean;
    };
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

export class SetMountainParameters extends BehaviorBiomeComponentBulder<MountainParametersData, "minecraft:mountain_parameters"> {
    /**
     * 
     * @param {MountainParametersData} params Parametros del componente.
     * @author HaJuegos - 15-10-2026
     * @constructor
     * @public
     */
    public constructor (params?: MountainParametersData) {
        super("minecraft:mountain_parameters", params);
    }
}