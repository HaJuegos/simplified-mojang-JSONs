import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorHideData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    duration?: number;
    poiType?: "bed" | "meeting_area" | "jobsite";
    timeoutCooldown?: number;
}

export class SetBehaviorHide extends BehaviorEntityComponentBuilder<BehaviorHideData> {
    /**
     * 
     * @param {BehaviorHideData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorHideData) {
        super("minecraft:behavior.hide", params);
    }
}