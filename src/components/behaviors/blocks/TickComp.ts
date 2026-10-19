import { BehaviorBlockComponentBuilder } from "../../../builders/behaviors/blocks/BlockCompBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface TickData extends BPComponent {
    intervalRange: [number, number];
    looping?: boolean;
}

export class SetTick extends BehaviorBlockComponentBuilder<TickData, "minecraft:tick"> {
    /**
     * 
     * @param {TickData} params Parametros del componente.
     * @author HaJuegos - 19-10-2026
     * @constructor
     * @public
     */
    public constructor (params: TickData) {
        super("minecraft:tick", params);
    }
}