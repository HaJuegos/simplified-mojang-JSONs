import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnTargetEscapeData extends BPComponent, EntityFilterTrigger {

}

export class SetOnTargetEscape extends BehaviorEntityComponentBuilder<OnTargetEscapeData> {
    /**
     * 
     * @param {OnTargetEscapeData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OnTargetEscapeData) {
        super("minecraft:on_target_escape", params);
    }
}