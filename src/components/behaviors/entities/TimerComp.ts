import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter, EntityFilterTrigger } from "../../../types/EntityFilters";

interface TimerData extends BPComponent {
    looping?: boolean;
    time?: [number, number] | number;
    timeDownEvent?: EntityFilterTrigger;
    randomTimeChoices?: RandomTimeRypes[];
}

interface RandomTimeRypes {
    value: number;
    weight: number;
}

export class SetTimer extends BehaviorEntityComponentBuilder<TimerData, "minecraft:timer"> {
    /**
     * 
     * @param {TimerData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: TimerData) {
        super("minecraft:timer", params);
    }
}