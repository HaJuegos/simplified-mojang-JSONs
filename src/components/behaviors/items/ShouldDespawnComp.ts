import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

type ShouldDespawnData = boolean | {
    value?: boolean;
};

export class SetShouldDespawn extends BehaviorItemsComponentsBuilder<ShouldDespawnData, "minecraft:should_despawn"> {
    /**
     * 
     * @param {ShouldDespawnData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: ShouldDespawnData) {
        super("minecraft:should_despawn", params);
    }
}