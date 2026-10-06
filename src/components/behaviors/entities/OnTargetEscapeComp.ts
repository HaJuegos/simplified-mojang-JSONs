import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnTargetEscapeData extends BPComponent, EntityFilterTrigger {

}

export class SetOnTargetEscape extends BehaviorEntityComponentBuilder<OnTargetEscapeData, "minecraft:on_target_escape"> {
    /**
     * 
     * @param {OnTargetEscapeData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: OnTargetEscapeData) {
        super("minecraft:on_target_escape", params);
    }
}