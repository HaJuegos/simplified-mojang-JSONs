import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";
import { GlobalNavigationParams } from "../../../types/EntityFilters";

interface NavigationGenericData extends BPComponent, GlobalNavigationParams {
}

export class SetNavigationGeneric extends BehaviorEntityComponentBuilder<NavigationGenericData> {
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