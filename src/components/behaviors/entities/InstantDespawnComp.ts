import { BehaviorEntityComponentBuilder } from "../../../builders/behaviors/entities/EntityCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface InstantDespawnData extends BPComponent {
    removeChildEntities?: boolean;
}

export class SetInstantDespawn extends BehaviorEntityComponentBuilder<InstantDespawnData, "minecraft:instant_despawn"> {
    /**
     * 
     * @param {InstantDespawnData} params Parametros del componente.
     * @author HaJuegos - 27-09-2026
     * @constructor
     * @public
     */
    public constructor (params?: InstantDespawnData) {
        super("minecraft:instant_despawn", params);
    }
}