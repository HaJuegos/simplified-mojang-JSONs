import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
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

export class SetBehaviorWork extends BehaviorEntityComponentBuilder<BehaviorWorkData, "minecraft:behavior.work"> {
    /**
     * 
     * @param {BehaviorWorkData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: BehaviorWorkData) {
        super("minecraft:behavior.work", params);
    }
}