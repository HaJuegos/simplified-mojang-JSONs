import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { GlobalNavigationParams } from "../../../types/EntityFilters";

interface NavigationFloatData extends BPComponent, GlobalNavigationParams {
}

export class SetNavigationFloat extends BehaviorEntityComponentBuilder<NavigationFloatData, "minecraft:navigation.float"> {
    /**
     * 
     * @param {NavigationFloatData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: NavigationFloatData) {
        super("minecraft:navigation.float", params);
    }
}