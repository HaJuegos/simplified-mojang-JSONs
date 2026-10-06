import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnTargetAcquiredData extends BPComponent, EntityFilterTrigger {

}

export class SetOnTargetAcquired extends BehaviorEntityComponentBuilder<OnTargetAcquiredData, "minecraft:on_target_acquired"> {
    /**
     * 
     * @param {OnTargetAcquiredData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: OnTargetAcquiredData) {
        super("minecraft:on_target_acquired", params);
    }
}