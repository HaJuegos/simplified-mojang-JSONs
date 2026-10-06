import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnHurtData extends BPComponent, EntityFilterTrigger {

}

export class SetOnHurt extends BehaviorEntityComponentBuilder<OnHurtData, "minecraft:on_hurt"> {
    /**
     * 
     * @param {OnHurtData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OnHurtData) {
        super("minecraft:on_hurt", params);
    }
}