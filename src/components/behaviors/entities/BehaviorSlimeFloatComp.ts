import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorSlimeFloatData extends BPComponent {
    priority: number;
    speedMultiplier?: number;
    jumpChancePercentage?: number;
}

export class SetBehaviorSlimeFloat extends BehaviorEntityComponentBuilder<BehaviorSlimeFloatData> {
    /**
     * 
     * @param {BehaviorSlimeFloatData} params Parametros del componente.
     * @author HaJuegos - 24-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorSlimeFloatData) {
        super("minecraft:behavior.slime_float", params);
    }
}