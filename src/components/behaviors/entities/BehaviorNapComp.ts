import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilter } from "../../../types/EntityFilters";

interface BehaviorNapData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    cooldownMax?: number;
    cooldownMin?: number;
    mobDetectDist?: number;
    mobDetectHeight?: number;
    canNapFilters?: EntityFilter | EntityFilter[];
    wakeMobExceptions?: EntityFilter | EntityFilter[];
}

export class SetBehaviorNap extends BehaviorEntityComponentBuilder<BehaviorNapData> {
    /**
     * 
     * @param {BehaviorNapData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorNapData) {
        super("minecraft:behavior.nap", params);
    }
}