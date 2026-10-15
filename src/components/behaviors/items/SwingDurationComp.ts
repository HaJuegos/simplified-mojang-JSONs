import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SwingDurationData extends BPComponent {
    value: number;
}

export class SetSwingDuration extends BehaviorItemsComponentsBuilder<SwingDurationData, "minecraft:swing_duration"> {
    /**
     * 
     * @param {SwingDurationData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: SwingDurationData) {
        super("minecraft:swing_duration", params);
    }
}