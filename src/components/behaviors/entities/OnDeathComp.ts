import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnDeathData extends BPComponent, EntityFilterTrigger {

}

export class SetOnDeath extends BehaviorEntityComponentBuilder<OnDeathData, "minecraft:on_death"> {
    /**
     * 
     * @param {OnDeathData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OnDeathData) {
        super("minecraft:on_death", params);
    }
}