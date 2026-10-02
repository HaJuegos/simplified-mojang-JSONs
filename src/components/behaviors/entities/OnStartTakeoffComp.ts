import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { EntityFilterTrigger } from "../../../types/EntityFilters";

interface OnStartTakeoffData extends BPComponent, EntityFilterTrigger {

}

export class SetOnStartTakeoff extends BehaviorEntityComponentBuilder<OnStartTakeoffData, "minecraft:on_start_takeoff"> {
    /**
     * 
     * @param {OnStartTakeoffData} params Parametros del componente.
     * @author HaJuegos - 28-09-2026
     * @constructor
     * @public
     */
    public constructor (params: OnStartTakeoffData) {
        super("minecraft:on_start_takeoff", params);
    }
}