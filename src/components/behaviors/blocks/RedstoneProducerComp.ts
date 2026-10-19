import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type FacesSidesTypes = "down" | "up" | "north" | "south" | "west" | "east" | "all";

interface RedstoneProducerData extends BPComponent {
    power: number;
    stronglyPoweredFace: FacesSidesTypes;
    connectedFaces?: FacesSidesTypes[];
    transformRelative?: boolean;
}

export class SetRedstoneProducer extends BehaviorBlockComponentBuilder<RedstoneProducerData, "minecraft:redstone_producer"> {
    /**
     * 
     * @param {RedstoneProducerData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: RedstoneProducerData) {
        super("minecraft:redstone_producer", params);
    }
}