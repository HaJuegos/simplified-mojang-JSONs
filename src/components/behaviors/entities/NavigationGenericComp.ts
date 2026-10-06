import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";
import { GlobalNavigationParams } from "../../../types/EntityFilters";

interface NavigationGenericData extends BPComponent, GlobalNavigationParams {
}

export class SetNavigationGeneric extends BehaviorEntityComponentBuilder<NavigationGenericData, "minecraft:navigation.generic"> {
    /**
     * 
     * @param {NavigationGenericData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: NavigationGenericData) {
        super("minecraft:navigation.generic", params);
    }
}