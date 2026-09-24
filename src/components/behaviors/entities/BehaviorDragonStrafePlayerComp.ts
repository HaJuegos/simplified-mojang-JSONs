import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

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

export class SetBehaviorDragonStrafePlayer extends BehaviorEntityComponentBuilder<BehaviorDragonStrafePlayerData> {
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