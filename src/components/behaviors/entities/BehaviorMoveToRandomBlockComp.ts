import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorMoveToRandomBlockData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    blockDistance?: number;
    withinRadius?: number;
}

export class SetBehaviorMoveToRandomBlock extends BehaviorEntityComponentBuilder<BehaviorMoveToRandomBlockData, "minecraft:behavior.move_to_random_block"> {
    /**
     * 
     * @param {BehaviorMoveToRandomBlockData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMoveToRandomBlockData) {
        super("minecraft:behavior.move_to_random_block", params);
    }
}