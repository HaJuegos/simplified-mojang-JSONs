import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorDigData extends BPComponent {
    priority: number;
    allowDigWhenNamed?: boolean;
    digsInDaylight?: boolean;
    duration?: number;
    idleTime?: number;
    suspicionIsDisturbance?: boolean;
    vibrationIsDisturbance?: boolean;
    onStart?: string | EntityFilterTrigger | EntityFilterTrigger[];
}

export class SetBehaviorDig extends BehaviorEntityComponentBuilder<BehaviorDigData> {
    /**
     * 
     * @param {BehaviorDigData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDigData) {
        super("minecraft:behavior.dig", params);
    }
}