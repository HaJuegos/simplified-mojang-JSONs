import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface PushThroughData extends BPComponent {
    value?: number;
}

export class SetPushThrough extends BehaviorEntityComponentBuilder<PushThroughData, "minecraft:push_through"> {
    /**
     * 
     * @param {PushThroughData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: PushThroughData) {
        super("minecraft:push_through", params);
    }
}