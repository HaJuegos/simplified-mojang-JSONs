import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnStartLandingData extends BPComponent, EntityFilterTrigger {

}

export class SetOnStartLanding extends BehaviorEntityComponentBuilder<OnStartLandingData, "minecraft:on_start_landing"> {
    /**
     * 
     * @param {OnStartLandingData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OnStartLandingData) {
        super("minecraft:on_start_landing", params);
    }
}