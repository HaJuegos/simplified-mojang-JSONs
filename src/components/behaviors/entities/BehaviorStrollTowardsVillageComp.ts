import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorStrollTowardsVillageData extends BPComponent {
    priority: number;
    cooldownTime?: number;
    goalRadius?: number;
    searchRange?: number;
    speedMultiplier?: number;
    startChance?: number;
}

export class SetBehaviorStrollTowardsVillage extends BehaviorEntityComponentBuilder<BehaviorStrollTowardsVillageData, "minecraft:behavior.stroll_towards_village"> {
    /**
     * 
     * @param {BehaviorStrollTowardsVillageData} params Parametros del componente.
     * @author HaJuegos - 26-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorStrollTowardsVillageData) {
        super("minecraft:behavior.stroll_towards_village", params);
    }
}