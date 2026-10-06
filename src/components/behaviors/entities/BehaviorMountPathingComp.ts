import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorMountPathingData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    targetDist?: number;
    trackTarget?: boolean;
}

export class SetBehaviorMountPathing extends BehaviorEntityComponentBuilder<BehaviorMountPathingData, "minecraft:behavior.mount_pathing"> {
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