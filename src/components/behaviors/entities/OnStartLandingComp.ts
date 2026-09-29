import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnStartLandingData extends BPComponent, EntityFilterTrigger {

}

export class SetOnStartLanding extends BehaviorEntityComponentBuilder<OnStartLandingData> {
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