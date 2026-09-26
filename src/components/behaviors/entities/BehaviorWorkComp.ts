import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorWorkData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    activeTime?: number;
    canWorkInRain?: boolean;
    goalCooldown?: number;
    onArrival?: string | EntityFilterTrigger | EntityFilterTrigger[];
    soundDelayMax?: number;
    soundDelayMin?: number;
    workInRainTolerance?: number;
}

export class SetBehaviorWork extends BehaviorEntityComponentBuilder<BehaviorWorkData> {
    /**
     * 
     * @param {BehaviorWorkData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorWorkData) {
        super("minecraft:behavior.work", params);
    }
}