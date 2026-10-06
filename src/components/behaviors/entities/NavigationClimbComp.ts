import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { GlobalNavigationParams } from "../../../types/EntityFilters";

interface NavigationClimbData extends BPComponent, GlobalNavigationParams {
}

export class SetNavigationClimb extends BehaviorEntityComponentBuilder<NavigationClimbData, "minecraft:navigation.climb"> {
    /**
     * 
     * @param {NavigationClimbData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: NavigationClimbData) {
        super("minecraft:navigation.climb", params);
    }
}