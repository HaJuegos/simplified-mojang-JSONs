import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorRandomSittingData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    cooldown?: number;
    minSitTime?: number;
    startChance?: number;
    stopChance?: number;
}

export class SetBehaviorRandomSitting extends BehaviorEntityComponentBuilder<BehaviorRandomSittingData, "minecraft:behavior.random_sitting"> {
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