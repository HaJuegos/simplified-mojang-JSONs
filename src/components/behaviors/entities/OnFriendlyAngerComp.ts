import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnFriendlyAngerData extends BPComponent, EntityFilterTrigger {

}

export class SetOnFriendlyAnger extends BehaviorEntityComponentBuilder<OnFriendlyAngerData, "minecraft:on_friendly_anger"> {
    /**
     * 
     * @param {OnFriendlyAngerData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OnFriendlyAngerData) {
        super("minecraft:on_friendly_anger", params);
    }
}