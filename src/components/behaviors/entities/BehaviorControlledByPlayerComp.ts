import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorControlledByPlayerData extends BPComponent {
    priority: number;
    fractionalRotation?: number;
    fractionalRotationLimit?: number;
    mountSpeedMultiplier?: number;
}

export class SetBehaviorControlledByPlayer extends BehaviorEntityComponentBuilder<BehaviorControlledByPlayerData, "minecraft:behavior.controlled_by_player"> {
    /**
     * 
     * @param {BehaviorControlledByPlayerData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorControlledByPlayerData) {
        super("minecraft:behavior.controlled_by_player", params);
    }
}