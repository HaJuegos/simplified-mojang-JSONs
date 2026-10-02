import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface ExhaustionValuesData extends BPComponent {
    attack?: number;
    damage?: number;
    heal?: number;
    jump?: number;
    lunge?: number;
    mine?: number;
    sprint?: number;
    sprintJump?: number;
    swim?: number;
    walk?: number;
}

export class SetExhaustionValues extends BehaviorEntityComponentBuilder<ExhaustionValuesData, "minecraft:exhaustion_values"> {
    /**
     * 
     * @param {ExhaustionValuesData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: ExhaustionValuesData) {
        super("minecraft:exhaustion_values", params);
    }
}