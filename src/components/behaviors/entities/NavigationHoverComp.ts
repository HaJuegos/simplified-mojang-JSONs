import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { GlobalNavigationParams } from "../../../types/EntityFilters";

interface NavigationHoverData extends BPComponent, GlobalNavigationParams {
}

export class SetNavigationHover extends BehaviorEntityComponentBuilder<NavigationHoverData, "minecraft:navigation.hover"> {
    /**
     * 
     * @param {NavigationHoverData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: NavigationHoverData) {
        super("minecraft:navigation.hover", params);
    }
}