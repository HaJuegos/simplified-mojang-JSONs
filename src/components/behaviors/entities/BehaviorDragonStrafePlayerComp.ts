import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorDragonStrafePlayerData extends BPComponent {
    priority: number;
    activeSpeed?: number;
    fireballRange?: number;
    flightSpeed?: number;
    switchDirectionProbability?: number;
    targetInRangeAndInViewTime?: number;
    targetZone?: {
        min: number,
        max: number;
    };
    turnSpeed?: number;
    viewAngle?: number;
}

export class SetBehaviorDragonStrafePlayer extends BehaviorEntityComponentBuilder<BehaviorDragonStrafePlayerData, "minecraft:behavior.dragonstrafeplayer"> {
    /**
     * 
     * @param {BehaviorDragonStrafePlayerData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDragonStrafePlayerData) {
        super("minecraft:behavior.dragonstrafeplayer", params);
    }
}