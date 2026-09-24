import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorRandomSittingData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    cooldown?: number;
    minSitTime?: number;
    startChance?: number;
    stopChance?: number;
}

export class SetBehaviorRandomSitting extends BehaviorEntityComponentBuilder<BehaviorRandomSittingData> {
    /**
     * 
     * @param {BehaviorRandomSittingData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorRandomSittingData) {
        super("minecraft:behavior.random_sitting", params);
    }
}