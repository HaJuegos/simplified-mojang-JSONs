import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface BehaviorDragonHoldingPatternData extends BPComponent {
    priority: number;
}

export class SetBehaviorDragonHoldingPattern extends BehaviorEntityComponentBuilder<BehaviorDragonHoldingPatternData> {
    /**
     * 
     * @param {BehaviorDragonHoldingPatternData} params Parametros del componente.
     * @author HaJuegos - 23-09-2026
     * @constructor
     * @public
     */
    public constructor (params: BehaviorDragonHoldingPatternData) {
        super("minecraft:behavior.dragonholdingpattern", params);
    }
}