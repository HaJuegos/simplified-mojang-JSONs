import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorDragonChargePlayerData extends BPComponent {
    priority: number;
    activeSpeed?: number;
    continueChargeThresholdTime?: number;
    flightSpeed?: number;
    targetZone?: {
        min: number,
        max: number;
    };
    turnSpeed?: number;
}

export class SetBehaviorDragonChargePlayer extends BehaviorEntityComponentBuilder<BehaviorDragonChargePlayerData, "minecraft:behavior.dragonchargeplayer"> {
    /**
     * 
     * @param {BehaviorDragonChargePlayerData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDragonChargePlayerData) {
        super("minecraft:behavior.dragonchargeplayer", params);
    }
}