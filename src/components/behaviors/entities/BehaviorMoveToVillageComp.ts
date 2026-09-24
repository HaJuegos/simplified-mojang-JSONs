import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveToVillageData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    cooldownTime?: number;
    goalRadius?: number;
    searchRange?: number;
}

export class SetBehaviorMoveToVillage extends BehaviorEntityComponentBuilder<BehaviorMoveToVillageData> {
    /**
     * 
     * @param {BehaviorMoveToVillageData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveToVillageData) {
        super("minecraft:behavior.move_to_village", params);
    }
}