import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorPlayerRideTamedData extends BPComponent {
    priority: number;
}

export class SetBehaviorPlayerRideTamed extends BehaviorEntityComponentBuilder<BehaviorPlayerRideTamedData> {
    /**
     * 
     * @param {BehaviorPlayerRideTamedData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorPlayerRideTamedData) {
        super("minecraft:behavior.player_ride_tamed", params);
    }
}