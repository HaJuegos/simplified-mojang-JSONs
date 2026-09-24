import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorPetSleepWithOwnerData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    goalRadius?: number;
    searchHeight?: number;
    searchRadius?: number;
    searchRange?: number;
}

export class SetBehaviorPetSleepWithOwner extends BehaviorEntityComponentBuilder<BehaviorPetSleepWithOwnerData> {
    /**
     * 
     * @param {BehaviorPetSleepWithOwnerData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorPetSleepWithOwnerData) {
        super("minecraft:behavior.pet_sleep_with_owner", params);
    }
}