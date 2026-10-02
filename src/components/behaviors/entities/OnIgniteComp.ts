import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnIgniteData extends BPComponent, EntityFilterTrigger {

}

export class SetOnIgnite extends BehaviorEntityComponentBuilder<OnIgniteData, "minecraft:on_ignite"> {
    /**
     * 
     * @param {OnIgniteData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OnIgniteData) {
        super("minecraft:on_ignite", params);
    }
}