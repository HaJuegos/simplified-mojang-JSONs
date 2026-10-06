import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { GlobalNavigationParams } from "../../../types/EntityFilters";

interface NavigationFlyData extends BPComponent, GlobalNavigationParams {
}

export class SetNavigationFly extends BehaviorEntityComponentBuilder<NavigationFlyData, "minecraft:navigation.fly"> {
    /**
     * 
     * @param {NavigationFlyData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: NavigationFlyData) {
        super("minecraft:navigation.fly", params);
    }
}