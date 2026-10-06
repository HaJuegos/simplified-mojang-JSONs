import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnWakeWithOwnerData extends BPComponent, EntityFilterTrigger {

}

export class SetOnWakeWithOwner extends BehaviorEntityComponentBuilder<OnWakeWithOwnerData, "minecraft:on_wake_with_owner"> {
    /**
     * 
     * @param {OnWakeWithOwnerData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OnWakeWithOwnerData) {
        super("minecraft:on_wake_with_owner", params);
    }
}