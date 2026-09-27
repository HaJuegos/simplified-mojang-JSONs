import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { TargetItemsTypes } from "../../../types/EntityFilters";

interface BoostableData extends BPComponent {
    duration?: number;
    speedMultiplier?: number;
    boostItems?: BoostableItems[];
}

interface BoostableItems {
    damage: number;
    item: string | TargetItemsTypes;
    replaceItem: string | TargetItemsTypes;
}

export class SetBoostable extends BehaviorEntityComponentBuilder<BoostableData> {
    /**
     * 
     * @param {BoostableData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BoostableData) {
        super("minecraft:boostable", params);
    }
}