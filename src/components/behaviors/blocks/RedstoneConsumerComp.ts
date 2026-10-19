import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface RedstoneConsumerData extends BPComponent {
    minPower: number;
    propagatesPower?: boolean;
}

export class SetRedstoneConsumer extends BehaviorBlockComponentBuilder<RedstoneConsumerData, "minecraft:redstone_consumer"> {
    /**
     * 
     * @param {RedstoneConsumerData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: RedstoneConsumerData) {
        super("minecraft:redstone_consumer", params);
    }
}