import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger, TargetItemsTypes } from "../../../types/EntityFilters";

interface BehaviorTemptData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    canGetScared?: boolean;
    canTemptWhileRidden?: boolean;
    canTemptVertically?: boolean;
    items?: (string | TargetItemsTypes)[];
    soundInterval?: number | [number, number];
    stopDistance?: number;
    temptSound?: string;
    withinRadius?: number;
    onStart?: string | EntityFilterTrigger | EntityFilterTrigger[];
    onEnd?: string | EntityFilterTrigger | EntityFilterTrigger[];
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