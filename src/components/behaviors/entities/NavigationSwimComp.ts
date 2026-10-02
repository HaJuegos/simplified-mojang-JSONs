import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { GlobalNavigationParams } from "../../../types/EntityFilters";

interface NavigationSwimData extends BPComponent, GlobalNavigationParams {
}

export class SetNavigationSwim extends BehaviorEntityComponentBuilder<NavigationSwimData, "minecraft:navigation.swim"> {
    /**
     * 
     * @param {NavigationSwimData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: NavigationSwimData) {
        super("minecraft:navigation.swim", params);
    }
}