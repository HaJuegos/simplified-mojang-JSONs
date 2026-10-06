import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface DryingOutTimerData extends BPComponent {
    driedOutEvent?: EntityFilterTrigger;
    recoverAfterDriedOutEvent?: EntityFilterTrigger;
    stoppedDryingOutEvent?: EntityFilterTrigger;
    totalTime?: number;
    waterBottleRefillTime?: number;
}

export class SetDryingOutTimer extends BehaviorEntityComponentBuilder<DryingOutTimerData, "minecraft:drying_out_timer"> {
    /**
     * 
     * @param {DryingOutTimerData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: DryingOutTimerData) {
        super("minecraft:drying_out_timer", params);
    }
}