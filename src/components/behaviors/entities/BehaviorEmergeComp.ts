import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface BehaviorEmergeData extends BPComponent {
    priority: number;
    cooldownTime?: number;
    duration?: number;
    onDone?: string | EntityFilterTrigger | EntityFilterTrigger[];
}

export class SetBehaviorEmerge extends BehaviorEntityComponentBuilder<BehaviorEmergeData> {
    /**
     * 
     * @param {BehaviorEmergeData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorEmergeData) {
        super("minecraft:behavior.emerge", params);
    }
}