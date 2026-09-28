import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/EntitiesComps";

interface InstantDespawnData extends BPComponent {
    removeChildEntities?: boolean;
}

export class SetInstantDespawn extends BehaviorEntityComponentBuilder<InstantDespawnData> {
    /**
     * 
     * @param {InstantDespawnData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params: InstantDespawnData) {
        super("minecraft:instant_despawn", params);
    }
}