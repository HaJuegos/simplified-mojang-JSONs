import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { TargetItemsTypes } from "../../../types/EntityFilters";

interface BribeableData extends BPComponent {
    bribeCooldown?: number;
    bribeItems?: (string | TargetItemsTypes)[];
}

export class SetBribeable extends BehaviorEntityComponentBuilder<BribeableData, "minecraft:bribeable"> {
    /**
     * 
     * @param {BribeableData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BribeableData) {
        super("minecraft:bribeable", params);
    }
}