import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFiltersTarget } from "../../../types/EntityFilters";

interface BehaviorHoldGroundData extends BPComponent {
    priority: number;
    broadcast?: boolean;
    broadcastRange?: number;
    minRadius?: number;
    withinRadiusEvent?: string | EntityFiltersTarget;
}

export class SetBehaviorHoldGround extends BehaviorEntityComponentBuilder<BehaviorHoldGroundData> {
    /**
     * 
     * @param {BehaviorHoldGroundData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorHoldGroundData) {
        super("minecraft:behavior.hold_ground", params);
    }
}