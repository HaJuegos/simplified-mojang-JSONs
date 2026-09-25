import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSkeletonHorseTrapData extends BPComponent {
    priority: number;
    duration?: number;
    withinRadius?: number;
}

export class SetBehaviorSkeletonHorseTrap extends BehaviorEntityComponentBuilder<BehaviorSkeletonHorseTrapData> {
    /**
     * 
     * @param {BehaviorSkeletonHorseTrapData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSkeletonHorseTrapData) {
        super("minecraft:behavior.skeleton_horse_trap", params);
    }
}