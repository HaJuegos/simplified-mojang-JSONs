import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorDragonLandingData extends BPComponent {
    priority: number;
}

export class SetBehaviorDragonLanding extends BehaviorEntityComponentBuilder<BehaviorDragonLandingData> {
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