import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorFindMountData extends BPComponent {
    priority: number;
    avoidWater?: boolean;
    mountDistance?: number;
    startDelay?: number;
    targetNeeded?: boolean;
    withinRadius?: number;
    maxFailedAttempts?: number;
}

export class SetBehaviorFindMount extends BehaviorEntityComponentBuilder<BehaviorFindMountData> {
    /**
     * 
     * @param {BehaviorFindMountData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorFindMountData) {
        super("minecraft:behavior.find_mount", params);
    }
}