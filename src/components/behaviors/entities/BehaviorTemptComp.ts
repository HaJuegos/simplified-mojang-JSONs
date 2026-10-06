import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger, TargetItemsTypes } from "../../../types/EntityFilters";

interface BehaviorTemptData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    canGetScared?: boolean;
    canTemptWhileRidden?: boolean;
    canTemptVertically?: boolean;
    items?: (string | TargetItemsTypes)[];
    soundInterval?: number | [number, number] | {
        rangeMin?: number;
        rangeMax?: number;
    };
    stopDistance?: number;
    temptSound?: string;
    withinRadius?: number;
    onTemptStart?: string | EntityFilterTrigger | EntityFilterTrigger[];
    onTemptEnd?: string | EntityFilterTrigger | EntityFilterTrigger[];
}

export class SetBehaviorTempt extends BehaviorEntityComponentBuilder<BehaviorTemptData, "minecraft:behavior.tempt"> {
    /**
     * 
     * @param {BehaviorTemptData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorTemptData) {
        super("minecraft:behavior.tempt", params);
    }
}