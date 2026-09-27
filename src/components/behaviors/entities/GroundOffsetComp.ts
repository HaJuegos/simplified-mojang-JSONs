import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface GroundOffsetData extends BPComponent {
    value?: number;
}

export class SetGroundOffset extends BehaviorEntityComponentBuilder<GroundOffsetData> {
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