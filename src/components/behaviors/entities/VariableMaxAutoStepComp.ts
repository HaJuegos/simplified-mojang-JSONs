import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface VariableMaxAutoStepData extends BPComponent {
    baseValue?: number;
    controlledValue?: number;
    jumpPreventedValue?: number;
}

export class SetVariableMaxAutoStep extends BehaviorEntityComponentBuilder<VariableMaxAutoStepData, "minecraft:variable_max_auto_step"> {
    /**
     * 
     * @param {VariableMaxAutoStepData} params Parametros del componente.
     * @author HaJuegos - 29-09-2026
     * @constructor
     * @public
     */
    public constructor (params: VariableMaxAutoStepData) {
        super("minecraft:variable_max_auto_step", params);
    }
}