import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMoveThroughVillageData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    onlyAtNight?: boolean;
}

export class SetBehaviorMoveThroughVillage extends BehaviorEntityComponentBuilder<BehaviorMoveThroughVillageData> {
    /**
     * 
     * @param {BehaviorMoveThroughVillageData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveThroughVillageData) {
        super("minecraft:behavior.move_through_village", params);
    }
}