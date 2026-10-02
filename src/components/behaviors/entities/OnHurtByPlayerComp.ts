import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnHurtByPlayerData extends BPComponent, EntityFilterTrigger {

}

export class SetOnHurtByPlayer extends BehaviorEntityComponentBuilder<OnHurtByPlayerData, "minecraft:on_hurt_by_player"> {
    /**
     * 
     * @param {OnHurtByPlayerData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OnHurtByPlayerData) {
        super("minecraft:on_hurt_by_player", params);
    }
}