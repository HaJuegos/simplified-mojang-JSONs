import { BehaviorItemsComponentsBuilder } from "../../../builders/behaviors/items/ItemsCompsBuilder";
import { BPComponent } from "../../../types/behaviors/entities/EntitiesComps";

interface SwingSoundsData extends BPComponent {
    attackCriticalHit: string;
    attackHit: string;
    attackMiss: string;
}

export class SetSwingSounds extends BehaviorItemsComponentsBuilder<SwingSoundsData, "minecraft:swing_sounds"> {
    /**
     * 
     * @param {SwingSoundsData} params Parametros del componente.
     * @author HaJuegos - 14-10-2026
     * @constructor
     * @public
     */
    public constructor (params: SwingSoundsData) {
        super("minecraft:swing_sounds", params);
    }
}