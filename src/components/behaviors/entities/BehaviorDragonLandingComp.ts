import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface BehaviorDragonLandingData extends BPComponent {
    priority: number;
}

export class SetBehaviorDragonLanding extends BehaviorEntityComponentBuilder<BehaviorDragonLandingData, "minecraft:behavior.dragonlanding"> {
    /**
     * 
     * @param {BehaviorDragonLandingData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDragonLandingData) {
        super("minecraft:behavior.dragonlanding", params);
    }
}