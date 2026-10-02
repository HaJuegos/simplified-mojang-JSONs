import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BlockSensorData extends BPComponent {
    sensorRadius?: number;
    onBreak?: BlockListSensor[];
    sources?: EntityFilter[];
}

interface BlockListSensor {
    blockList: (string | MinecraftBlockTypes)[];
    onBlockBroken: string;
}

export class SetBlockSensor extends BehaviorEntityComponentBuilder<BlockSensorData, "minecraft:block_sensor"> {
    /**
     * 
     * @param {BlockSensorData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BlockSensorData) {
        super("minecraft:block_sensor", params);
    }
}