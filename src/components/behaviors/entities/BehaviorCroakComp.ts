import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorCroakData extends BPComponent {
    priority: number;
    duration?: {
        min: number,
        max: number;
    };
    filters?: EntityFilter | EntityFilter[];
    interval?: {
        min: number,
        max: number;
    };
}

export class SetBehaviorCroak extends BehaviorEntityComponentBuilder<BehaviorCroakData> {
    /**
     * 
     * @param {BehaviorCroakData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorCroakData) {
        super("minecraft:behavior.croak", params);
    }
}