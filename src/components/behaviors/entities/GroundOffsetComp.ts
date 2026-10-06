import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface GroundOffsetData extends BPComponent {
    value?: number;
}

export class SetGroundOffset extends BehaviorEntityComponentBuilder<GroundOffsetData, "minecraft:ground_offset"> {
    /**
     * 
     * @param {GroundOffsetData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: GroundOffsetData) {
        super("minecraft:ground_offset", params);
    }
}