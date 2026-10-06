import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

type ControlFlagsTypes = "jump" | "look" | "move";

interface BehaviorTimerFlagOneData extends BPComponent {
    priority?: number;
    controlFlags?: [] | [ControlFlagsTypes] | [ControlFlagsTypes, ControlFlagsTypes];
    cooldownRange?: number | {
        min: number;
        max: number;
    };
    durationRange?: number | {
        min: number;
        max: number;
    };
    onEnd?: string | EntityFilterTrigger | EntityFilterTrigger[];
    onStart?: string | EntityFilterTrigger | EntityFilterTrigger[];
}

export class SetBehaviorTimerFlagOne extends BehaviorEntityComponentBuilder<BehaviorTimerFlagOneData, "minecraft:behavior.timer_flag_1"> {
    /**
     * 
     * @param {BehaviorTimerFlagOneData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorTimerFlagOneData) {
        super("minecraft:behavior.timer_flag_1", params);
    }
}