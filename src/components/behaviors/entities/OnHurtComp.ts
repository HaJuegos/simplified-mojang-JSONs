import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnHurtData extends BPComponent, EntityFilterTrigger {

}

export class SetOnHurt extends BehaviorEntityComponentBuilder<OnHurtData> {
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