import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorMountPathingData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    targetDist?: number;
    trackTarget?: boolean;
}

export class SetBehaviorMountPathing extends BehaviorEntityComponentBuilder<BehaviorMountPathingData> {
    /**
     * 
     * @param {BehaviorMountPathingData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorMountPathingData) {
        super("minecraft:behavior.mount_pathing", params);
    }
}