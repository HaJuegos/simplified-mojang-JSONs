import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { GlobalNavigationParams } from "../../../types/EntityFilters";

interface NavigationWalkData extends BPComponent, GlobalNavigationParams {
}

export class SetNavigationWalk extends BehaviorEntityComponentBuilder<NavigationWalkData, "minecraft:navigation.walk"> {
    /**
     * 
     * @param {NavigationWalkData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: NavigationWalkData) {
        super("minecraft:navigation.walk", params);
    }
}