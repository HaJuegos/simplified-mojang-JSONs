import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { TargetItemsTypes } from "../../../types/EntityFilters";

interface BribeableData extends BPComponent {
    bribeCooldown?: number;
    bribeItems?: (string | TargetItemsTypes)[];
}

export class SetBribeable extends BehaviorEntityComponentBuilder<BribeableData> {
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